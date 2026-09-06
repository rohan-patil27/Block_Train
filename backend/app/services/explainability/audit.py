from sqlalchemy.orm import Session
from app.models.log import AuditLog

class AuditLogger:
    def __init__(self, db: Session):
        self.db = db

    def log_action(self, action: str, resource: str, plan_id: str, plan_version: str, 
                   actor: str = "system", actor_role: str = "system", 
                   reason: str = None, result: str = None, 
                   previous_plan_id: str = None, new_plan_id: str = None,
                   optimizer_version: str = None, safety_validator_version: str = None,
                   explanation_version: str = None, simulation_id: str = None):
        
        audit_record = AuditLog(
            action=action,
            resource=resource,
            actor=actor,
            actor_role=actor_role,
            plan_id=plan_id,
            plan_version=plan_version,
            previous_plan_id=previous_plan_id,
            new_plan_id=new_plan_id,
            optimizer_version=optimizer_version,
            safety_validator_version=safety_validator_version,
            explanation_version=explanation_version,
            simulation_id=simulation_id,
            reason=reason,
            result=result
        )
        self.db.add(audit_record)
        self.db.commit()
        self.db.refresh(audit_record)
        return audit_record

    def get_logs_for_plan(self, plan_id: str):
        return self.db.query(AuditLog).filter(AuditLog.plan_id == plan_id).order_by(AuditLog.timestamp.asc()).all()
        
    def get_all_logs(self):
        return self.db.query(AuditLog).order_by(AuditLog.timestamp.desc()).limit(100).all()
