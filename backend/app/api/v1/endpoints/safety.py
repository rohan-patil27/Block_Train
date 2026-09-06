from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from typing import List

from app.db.session import get_db
from app.core.dependencies import get_current_user
from app.models.user import User
from app.services.safety.schemas import SafetyRule
from app.schemas.shared import SafetyCheckResult, Plan
from app.services.safety.registry import get_registry
from app.services.safety.validator import SafetyValidator

router = APIRouter()

@router.post("/validate", response_model=SafetyCheckResult)
def validate_plan(
    plan: Plan,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """
    Validates a generated Plan against the Safety Validator's deterministic rule registry.
    """
    validator = SafetyValidator(db)
    result = validator.validate_plan(plan)
    
    # Store result in DB (Mocked for prototype unless we define a SafetyCheckResult model)
    # We can just return it.
    return result

@router.get("/rules", response_model=List[SafetyRule])
def list_safety_rules(
    current_user: User = Depends(get_current_user)
):
    """
    Returns the list of active safety rules in the registry.
    """
    return get_registry()

@router.get("/results/{plan_id}", response_model=SafetyCheckResult)
def get_safety_result(
    plan_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    """
    Fetches a previously executed safety validation result.
    (Mocked for prototype as we don't persist it to DB yet, returning 404).
    """
    raise HTTPException(status_code=404, detail="Result persistence not implemented in prototype")
