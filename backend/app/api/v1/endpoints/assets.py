from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.asset import MaintenanceAsset
from app.core.dependencies import get_current_user

router = APIRouter()

@router.get("/")
def get_assets(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    assets = db.query(MaintenanceAsset).all()
    return [{"id": a.id, "asset_type": a.asset_type, "department_id": a.department_id} for a in assets]
