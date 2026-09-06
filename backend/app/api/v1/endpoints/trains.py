from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.operation import Train
from app.core.dependencies import get_current_user

router = APIRouter()

@router.get("/")
def get_trains(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    trains = db.query(Train).all()
    return [{"id": t.id, "train_number": t.train_number, "type": t.train_type} for t in trains]
