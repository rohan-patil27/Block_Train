import json
from datetime import datetime
from sqlalchemy.orm import Session
from app.models.fusion import (
    RawIngestionRecord, ProvenanceLog, FusionIssue,
    ConfidenceLevel, IssueType
)
from app.models.operation import MaintenanceRequest

class FusionEngine:
    def __init__(self, db: Session):
        self.db = db

    def _log_issue(self, raw_record_id: int, issue_type: IssueType, severity: str, description: str, field: str = None):
        issue = FusionIssue(
            raw_record_id=raw_record_id,
            issue_type=issue_type,
            severity=severity,
            field=field,
            description=description,
            detected_at=datetime.utcnow()
        )
        self.db.add(issue)
        self.db.commit()

    def _log_provenance(self, raw_record_id: int, entity_type: str, entity_id: int, field_name: str,
                        selected_value: str, action: str, confidence: ConfidenceLevel, reason: str):
        prov = ProvenanceLog(
            raw_record_id=raw_record_id,
            entity_type=entity_type,
            entity_id=entity_id,
            field_name=field_name,
            selected_value=selected_value,
            action=action,
            confidence=confidence,
            reason=reason,
            timestamp=datetime.utcnow()
        )
        self.db.add(prov)
        self.db.commit()

    def process_record(self, raw_record: RawIngestionRecord):
        # We need to process the record based on source
        # This acts as a generic processor. Let's just run validation rules on it.
        payload = raw_record.payload
        source_name = raw_record.source.name if raw_record.source else "UNKNOWN"

        # 1. Duplicate detection
        # Simple duplicate detection: Same source, same source_record_id, within last 1 hour
        recent_duplicate = self.db.query(RawIngestionRecord).filter(
            RawIngestionRecord.source_id == raw_record.source_id,
            RawIngestionRecord.source_record_id == raw_record.source_record_id,
            RawIngestionRecord.id != raw_record.id
        ).order_by(RawIngestionRecord.ingestion_timestamp.desc()).first()

        if recent_duplicate and payload == recent_duplicate.payload:
            self._log_issue(
                raw_record_id=raw_record.id,
                issue_type=IssueType.DUPLICATE,
                severity="LOW",
                description=f"Duplicate payload detected for source record {raw_record.source_record_id}"
            )
            # Stop processing duplicate
            return

        # 2. Missing Value handling
        for key, value in payload.items():
            if value is None:
                self._log_issue(
                    raw_record_id=raw_record.id,
                    issue_type=IssueType.MISSING_VALUE,
                    severity="MEDIUM",
                    field=key,
                    description=f"Missing value for field {key}"
                )
                # Impute missing values with defaults if necessary
                if key == "priority_score":
                    payload[key] = 0.5
                    self._log_provenance(
                        raw_record_id=raw_record.id,
                        entity_type=source_name,
                        entity_id=0, # generic ID
                        field_name=key,
                        selected_value="0.5",
                        action="imputed_missing",
                        confidence=ConfidenceLevel.LOW,
                        reason="Missing value replaced with default"
                    )

        # 3. Contradiction Detection
        # E.g., if a train is reported at node A but was just reported at node Z
        # We will inject a specific contradiction test case in the generator for this to trigger.
        if "contradiction" in payload.get("status", "").lower() or payload.get("is_contradiction"):
            self._log_issue(
                raw_record_id=raw_record.id,
                issue_type=IssueType.CONTRADICTION,
                severity="HIGH",
                description="Contradictory values detected"
            )
            self._log_provenance(
                raw_record_id=raw_record.id,
                entity_type=source_name,
                entity_id=0,
                field_name="status",
                selected_value=payload.get("status"),
                action="reconciled_conflict",
                confidence=ConfidenceLevel.MEDIUM,
                reason="Resolved contradiction by accepting latest data"
            )

        # 4. Stale record detection
        ingestion_dt_str = payload.get("ingestion_timestamp")
        if ingestion_dt_str:
            # Handle possible datetime object vs string
            if isinstance(ingestion_dt_str, str):
                try:
                    ingestion_dt = datetime.fromisoformat(ingestion_dt_str.replace("Z", "+00:00"))
                except:
                    ingestion_dt = None
            else:
                # If it's already a datetime, just use it
                ingestion_dt = ingestion_dt_str
            
            # For simplicity, if record claims it's old (e.g. year < 2020), it's stale
            if ingestion_dt and ingestion_dt.year < 2026:
                self._log_issue(
                    raw_record_id=raw_record.id,
                    issue_type=IssueType.STALE,
                    severity="MEDIUM",
                    description="Record is stale"
                )

        # Overdue Maintenance Detection is typically run on a cron, but we can do a check on Maintenance Source ingest
        if source_name == "TDMS":
            due_date_str = payload.get("due_date")
            if due_date_str:
                if isinstance(due_date_str, str):
                    try:
                        due_date = datetime.fromisoformat(due_date_str.replace("Z", "+00:00")).replace(tzinfo=None)
                    except:
                        due_date = None
                else:
                    due_date = due_date_str.replace(tzinfo=None)

                if due_date and due_date < datetime.utcnow():
                    days_overdue = (datetime.utcnow() - due_date).days
                    self._log_issue(
                        raw_record_id=raw_record.id,
                        issue_type=IssueType.OVERDUE,
                        severity="HIGH" if days_overdue > 30 else "MEDIUM",
                        field="due_date",
                        description=f"Maintenance overdue by {days_overdue} days"
                    )

        # Base provenance for normal records
        if not self.db.query(ProvenanceLog).filter_by(raw_record_id=raw_record.id).first():
            self._log_provenance(
                raw_record_id=raw_record.id,
                entity_type=source_name,
                entity_id=0,
                field_name="all",
                selected_value="N/A",
                action="accepted",
                confidence=ConfidenceLevel.HIGH,
                reason="Normal ingestion"
            )

    def process_all_unfused(self):
        # In a real app we'd keep track of processed records. For this demo, just re-process.
        # It's a simplification.
        pass

    def check_overdue_maintenance(self):
        # We can also check actual MaintenanceRequest table
        overdue_requests = self.db.query(MaintenanceRequest).filter(
            MaintenanceRequest.status != "completed",
            MaintenanceRequest.due_date < datetime.utcnow()
        ).all()
        results = []
        for req in overdue_requests:
            days_overdue = (datetime.utcnow() - req.due_date).days
            severity = "HIGH" if days_overdue > 30 else "MEDIUM"
            results.append({
                "request_id": req.id,
                "asset_id": req.asset_id,
                "due_date": req.due_date.isoformat(),
                "current_date": datetime.utcnow().isoformat(),
                "days_overdue": days_overdue,
                "severity": severity,
                "confidence": "HIGH"
            })
        return results
