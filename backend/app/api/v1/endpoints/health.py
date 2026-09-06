from fastapi import APIRouter
from app.schemas.shared import TwinState
router = APIRouter()

@router.get("/")
def health_check():
    return {"status": "ok"}
