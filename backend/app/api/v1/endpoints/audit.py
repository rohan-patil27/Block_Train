from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import Any

from app.db.session import get_db
from app.core.dependencies import get_current_user
from app.models.log import AuditLog

router = APIRouter()

@router.get("/")
def get_audit_logs(
    limit: int = 50,
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    logs = (
        db.query(AuditLog)
        .order_by(AuditLog.id.desc())
        .limit(limit)
        .all()
    )
    return [
        {
            "id": l.id,
            "action": l.action,
            "resource": getattr(l, "resource", "Plan"),
            "plan_id": getattr(l, "plan_id", None),
            "actor": getattr(l, "actor", None),
            "actor_role": getattr(l, "actor_role", None),
            "reason": getattr(l, "reason", None),
            "result": getattr(l, "result", None),
            "timestamp": l.timestamp.isoformat() if l.timestamp else None,
        }
        for l in reversed(logs)
    ]
