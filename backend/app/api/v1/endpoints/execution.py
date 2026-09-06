from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import Any
from app.db.session import get_db
from app.core.dependencies import get_current_user
from app.services.execution.engine import ExecutionEngine
from app.services.execution.detector import EventDetector
from app.services.execution.closed_loop import ClosedLoopController
from app.services.explainability.plan_manager import plan_store
from app.services.explainability.audit import AuditLogger
from app.schemas.shared import ExecutionStateSchema

router = APIRouter()

@router.post("/start")
def start_execution(
    plan_id: str,
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    plan = plan_store.get_plan(plan_id)
    if not plan:
        raise HTTPException(status_code=404, detail="Plan not found")
        
    engine = ExecutionEngine(db)
    session = engine.start_execution(plan)
    
    logger = AuditLogger(db)
    logger.log_action(
        action="EXECUTION_STARTED",
        resource="Execution",
        plan_id=plan.plan_id,
        plan_version=plan.version,
        actor=current_user.get("username", "controller1") if isinstance(current_user, dict) else getattr(current_user, "username", "controller1"),
        actor_role="controller",
        reason="Simulated execution started by controller",
        result="SUCCESS"
    )
    
    return {"status": "started", "execution_id": session.id}

@router.get("/{execution_id}", response_model=ExecutionStateSchema)
def get_execution_state(
    execution_id: int,
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    from app.models.execution import ExecutionSession, TelemetryLog, DisruptionEvent
    session = db.query(ExecutionSession).filter(ExecutionSession.id == execution_id).first()
    if not session:
        raise HTTPException(status_code=404, detail="Execution session not found")
        
    telemetry = db.query(TelemetryLog).filter(TelemetryLog.execution_id == execution_id).all()
    events = db.query(DisruptionEvent).filter(DisruptionEvent.execution_id == execution_id).all()
    
    # Simple polling trick to advance time automatically for demo if running
    if session.status == "RUNNING":
        engine = ExecutionEngine(db)
        engine.tick(execution_id, 1.0)
        
    return {
        "execution_id": session.id,
        "plan_id": session.plan_id,
        "plan_version": session.plan_version,
        "status": session.status,
        "start_time": session.start_time,
        "last_updated": session.last_updated,
        "telemetry": telemetry,
        "events": events
    }

@router.post("/{execution_id}/trigger-overrun")
def trigger_overrun(
    execution_id: int,
    block_request_id: int,
    delay_minutes: float = 15.0,
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    engine = ExecutionEngine(db)
    engine.trigger_overrun(execution_id, block_request_id, delay_minutes)
    
    detector = EventDetector(db)
    events = detector.check_for_disruptions(execution_id)
    
    if events:
        loop = ClosedLoopController(db)
        result = loop.trigger_reoptimization(execution_id)
        
        audit_logger = AuditLogger(db)
        audit_logger.log_action(
            action="OVERRUN_TRIGGERED",
            resource="Execution",
            plan_id=str(execution_id),
            plan_version="1.0",
            actor=current_user.get("username", "controller1") if isinstance(current_user, dict) else getattr(current_user, "username", "controller1"),
            actor_role="controller",
            reason=f"Injected {delay_minutes} min overrun on block {block_request_id}",
            result="SUCCESS"
        )
        
        if result:
            return {"status": "disrupted", "reoptimization_triggered": True, "result": result}
            
    audit_logger = AuditLogger(db)
    audit_logger.log_action(
        action="OVERRUN_TRIGGERED",
        resource="Execution",
        plan_id=str(execution_id),
        plan_version="1.0",
        actor=current_user.get("username", "controller1") if isinstance(current_user, dict) else getattr(current_user, "username", "controller1"),
        actor_role="controller",
        reason=f"Injected {delay_minutes} min overrun on block {block_request_id}",
        result="SUCCESS"
    )
    return {"status": "overrun_triggered", "reoptimization_triggered": False}

@router.post("/{execution_id}/trigger-machine-failure")
def trigger_machine_failure(
    execution_id: int,
    machine_id: int,
    block_request_id: int,
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    engine = ExecutionEngine(db)
    engine.trigger_machine_failure(execution_id, machine_id, block_request_id)
    
    detector = EventDetector(db)
    events = detector.check_for_disruptions(execution_id)
    
    if events:
        loop = ClosedLoopController(db)
        result = loop.trigger_reoptimization(execution_id)
        
        audit_logger = AuditLogger(db)
        audit_logger.log_action(
            action="MACHINE_FAILURE_TRIGGERED",
            resource="Execution",
            plan_id=str(execution_id),
            plan_version="1.0",
            actor=current_user.get("username", "controller1") if isinstance(current_user, dict) else getattr(current_user, "username", "controller1"),
            actor_role="controller",
            reason=f"Injected machine {machine_id} failure on block {block_request_id}",
            result="SUCCESS"
        )
        
        if result:
            return {"status": "disrupted", "reoptimization_triggered": True, "result": result}
            
    audit_logger = AuditLogger(db)
    audit_logger.log_action(
        action="MACHINE_FAILURE_TRIGGERED",
        resource="Execution",
        plan_id=str(execution_id),
        plan_version="1.0",
        actor=current_user.get("username", "controller1") if isinstance(current_user, dict) else getattr(current_user, "username", "controller1"),
        actor_role="controller",
        reason=f"Injected machine {machine_id} failure on block {block_request_id}",
        result="SUCCESS"
    )
    return {"status": "machine_failure_triggered", "reoptimization_triggered": False}

@router.post("/{execution_id}/reset")
def reset_execution(
    execution_id: int,
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    from app.models.execution import ExecutionSession
    session = db.query(ExecutionSession).filter(ExecutionSession.id == execution_id).first()
    if session:
        session.status = "CANCELLED"
        
        logger = AuditLogger(db)
        logger.log_action(
            action="EXECUTION_RESET",
            resource="Execution",
            plan_id=session.plan_id,
            plan_version=session.plan_version,
            actor=current_user.get("username", "controller1") if isinstance(current_user, dict) else getattr(current_user, "username", "controller1"),
            actor_role="controller",
            reason="Execution manually reset by controller",
            result="SUCCESS"
        )
        
        db.commit()
    return {"status": "reset"}

@router.get("/{execution_id}/telemetry")
def get_telemetry(
    execution_id: int,
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    from app.models.execution import TelemetryLog
    logs = db.query(TelemetryLog).filter(TelemetryLog.execution_id == execution_id).all()
    return {"telemetry": logs}
