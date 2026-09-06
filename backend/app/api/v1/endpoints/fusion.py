from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.fusion import DataSource, FusionIssue, RawIngestionRecord, ProvenanceLog
from app.services.fusion import FusionEngine

router = APIRouter()

@router.get("/data-sources")
def get_data_sources(db: Session = Depends(get_db)):
    sources = db.query(DataSource).all()
    return {"sources": [{"id": s.id, "name": s.name} for s in sources]}

@router.get("/fusion/status")
def get_fusion_status(db: Session = Depends(get_db)):
    total_records = db.query(RawIngestionRecord).count()
    total_issues = db.query(FusionIssue).count()
    return {
        "status": "active",
        "total_records_processed": total_records,
        "total_issues_detected": total_issues
    }

@router.get("/fusion/issues")
def get_fusion_issues(db: Session = Depends(get_db)):
    issues = db.query(FusionIssue).all()
    return {"issues": [{"id": i.id, "type": i.issue_type, "severity": i.severity, "description": i.description, "field": i.field} for i in issues]}

@router.get("/fusion/records")
def get_fusion_records(db: Session = Depends(get_db)):
    # Getting provenance logs representing fused records
    logs = db.query(ProvenanceLog).all()
    return {"records": [{"id": l.id, "entity_type": l.entity_type, "confidence": l.confidence, "action": l.action, "reason": l.reason} for l in logs]}

@router.get("/maintenance/overdue")
def get_overdue_maintenance(db: Session = Depends(get_db)):
    engine = FusionEngine(db)
    return {"overdue": engine.check_overdue_maintenance()}
