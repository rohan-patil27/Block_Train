from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.db.session import get_db
from app.models.operation import BlockRequest
from app.core.dependencies import get_current_user
from app.schemas.shared import BlockRequestSchema
from typing import List

router = APIRouter()

@router.get("/", response_model=List[BlockRequestSchema])
def get_blocks(db: Session = Depends(get_db), current_user = Depends(get_current_user)):
    blocks = db.query(BlockRequest).all()
    return blocks
