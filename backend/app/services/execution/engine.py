import datetime
import logging
from typing import List, Optional
from sqlalchemy.orm import Session
from app.models.execution import ExecutionSession, TelemetryLog, DisruptionEvent
from app.schemas.shared import Plan

logger = logging.getLogger(__name__)

class ExecutionEngine:
    def __init__(self, db: Session):
        self.db = db

    def start_execution(self, plan: Plan) -> ExecutionSession:
        """Starts a new execution session for an approved plan."""
        # Cancel any running session
        running_sessions = self.db.query(ExecutionSession).filter(ExecutionSession.status == "RUNNING").all()
        for s in running_sessions:
            s.status = "CANCELLED"
            s.last_updated = datetime.datetime.utcnow()
        
        session = ExecutionSession(
            plan_id=plan.plan_id or "unknown",
            plan_version=plan.version,
            status="RUNNING"
        )
        self.db.add(session)
        self.db.commit()
        self.db.refresh(session)
        
        # Initialize telemetry for all items as SCHEDULED
        for item in plan.items:
            expected_remaining = (item.scheduled_end - item.scheduled_start).total_seconds() / 60.0
            log = TelemetryLog(
                execution_id=session.id,
                plan_id=session.plan_id,
                plan_version=session.plan_version,
                block_request_id=item.block_request_id,
                progress_percent=0.0,
                elapsed_minutes=0.0,
                expected_remaining_minutes=max(expected_remaining, 0.0),
                actual_status="SCHEDULED"
            )
            self.db.add(log)
            
        self.db.commit()
        return session

    def _get_active_session(self) -> Optional[ExecutionSession]:
        return self.db.query(ExecutionSession).filter(ExecutionSession.status == "RUNNING").first()

    def tick(self, execution_id: int, minutes_to_advance: float = 1.0):
        """Advances the simulation by the specified minutes for all active blocks."""
        session = self.db.query(ExecutionSession).filter(ExecutionSession.id == execution_id).first()
        if not session or session.status != "RUNNING":
            logger.warning(f"Cannot tick execution {execution_id}: not found or not running.")
            return

        # Fetch latest telemetry for each block to advance its state
        logs = self.db.query(TelemetryLog).filter(TelemetryLog.execution_id == execution_id).all()
        # Group by block_request_id and get latest
        latest_logs = {}
        for log in logs:
            if log.block_request_id not in latest_logs or log.timestamp > latest_logs[log.block_request_id].timestamp:
                latest_logs[log.block_request_id] = log

        for block_id, log in latest_logs.items():
            if log.actual_status in ["COMPLETED", "FAILED", "CANCELLED"]:
                continue # Terminal state

            # For demo, if scheduled, move to active (simplification)
            new_status = log.actual_status
            if log.actual_status == "SCHEDULED":
                new_status = "ACTIVE"
            
            new_elapsed = log.elapsed_minutes + minutes_to_advance
            new_remaining = max(log.expected_remaining_minutes - minutes_to_advance, 0.0)
            
            # Simple progress calculation
            total_time = new_elapsed + new_remaining
            progress = (new_elapsed / total_time) * 100.0 if total_time > 0 else 0.0
            
            # If remaining is 0 and it was ACTIVE or OVERRUN, it completes (unless it was already overrun and still running, but let's keep it simple)
            if new_remaining <= 0 and new_status in ["ACTIVE", "OVERRUN"]:
                new_status = "COMPLETED"
                progress = 100.0

            new_log = TelemetryLog(
                execution_id=session.id,
                plan_id=session.plan_id,
                plan_version=session.plan_version,
                block_request_id=block_id,
                progress_percent=progress,
                elapsed_minutes=new_elapsed,
                expected_remaining_minutes=new_remaining,
                actual_status=new_status,
                section_id=log.section_id,
                machine_id=log.machine_id,
                gang_id=log.gang_id
            )
            self.db.add(new_log)
        
        session.last_updated = datetime.datetime.utcnow()
        self.db.commit()

    def trigger_overrun(self, execution_id: int, block_request_id: int, delay_minutes: float):
        """Injects a block overrun disruption."""
        session = self.db.query(ExecutionSession).filter(ExecutionSession.id == execution_id).first()
        if not session or session.status != "RUNNING":
            return

        latest_log = self.db.query(TelemetryLog).filter(
            TelemetryLog.execution_id == execution_id,
            TelemetryLog.block_request_id == block_request_id
        ).order_by(TelemetryLog.timestamp.desc()).first()

        if not latest_log:
            return

        # Add delay to remaining minutes and set status to OVERRUN
        new_log = TelemetryLog(
            execution_id=session.id,
            plan_id=session.plan_id,
            plan_version=session.plan_version,
            block_request_id=block_request_id,
            progress_percent=latest_log.progress_percent,
            elapsed_minutes=latest_log.elapsed_minutes,
            expected_remaining_minutes=latest_log.expected_remaining_minutes + delay_minutes,
            actual_status="OVERRUN",
            section_id=latest_log.section_id,
            machine_id=latest_log.machine_id,
            gang_id=latest_log.gang_id
        )
        self.db.add(new_log)
        
        event = DisruptionEvent(
            execution_id=session.id,
            event_type="BLOCK_OVERRUN",
            plan_id=session.plan_id,
            plan_version=session.plan_version,
            affected_request=block_request_id,
            severity="HIGH",
            reason=f"Block {block_request_id} overrun by {delay_minutes} minutes"
        )
        self.db.add(event)
        
        session.last_updated = datetime.datetime.utcnow()
        self.db.commit()

    def trigger_machine_failure(self, execution_id: int, machine_id: int, block_request_id: int):
        """Injects a machine failure disruption."""
        session = self.db.query(ExecutionSession).filter(ExecutionSession.id == execution_id).first()
        if not session or session.status != "RUNNING":
            return

        latest_log = self.db.query(TelemetryLog).filter(
            TelemetryLog.execution_id == execution_id,
            TelemetryLog.block_request_id == block_request_id
        ).order_by(TelemetryLog.timestamp.desc()).first()

        new_log = TelemetryLog(
            execution_id=session.id,
            plan_id=session.plan_id,
            plan_version=session.plan_version,
            block_request_id=block_request_id,
            progress_percent=latest_log.progress_percent if latest_log else 0.0,
            elapsed_minutes=latest_log.elapsed_minutes if latest_log else 0.0,
            expected_remaining_minutes=latest_log.expected_remaining_minutes if latest_log else 0.0,
            actual_status="FAILED",
            section_id=latest_log.section_id if latest_log else None,
            machine_id=machine_id,
            gang_id=latest_log.gang_id if latest_log else None
        )
        self.db.add(new_log)
        
        event = DisruptionEvent(
            execution_id=session.id,
            event_type="MACHINE_FAILURE",
            plan_id=session.plan_id,
            plan_version=session.plan_version,
            affected_request=block_request_id,
            affected_section=latest_log.section_id if latest_log else None,
            severity="CRITICAL",
            reason=f"Machine {machine_id} failed on block {block_request_id}"
        )
        self.db.add(event)
        
        session.last_updated = datetime.datetime.utcnow()
        self.db.commit()
