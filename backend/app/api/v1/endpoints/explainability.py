from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List, Any
import uuid

from app.db.session import get_db
from app.core.dependencies import get_current_user
from app.services.optimization.schemas import OptimizationInput
from app.services.explainability.schemas import Explanation, FallbackResult
from app.services.explainability.fallback import FallbackScheduler
from app.services.explainability.generator import ExplanationGenerator
from app.services.explainability.plan_manager import plan_store
from app.services.explainability.audit import AuditLogger
from app.services.safety.validator import SafetyValidator

router = APIRouter()

@router.get("/explanations/{plan_id}", response_model=Explanation)
def get_explanation(
    plan_id: str,
    current_user: Any = Depends(get_current_user)
):
    expl = plan_store.get_explanation(plan_id)
    if not expl:
        raise HTTPException(status_code=404, detail="Explanation not found")
    return expl

@router.post("/fallback/generate", response_model=FallbackResult)
def generate_fallback_plan(
    opt_input: OptimizationInput,
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    # 1. Fallback Generation
    scheduler = FallbackScheduler(opt_input)
    plan = scheduler.generate_fallback_plan()
    
    # 2. Safety Validator
    validator = SafetyValidator(db)
    safety_result = validator.validate_plan(plan)
    
    # 3. Decision
    if safety_result.status in ["PASS", "PASS_WITH_WARNINGS"]:
        is_safe = True
        plan_store.store_plan(plan, is_good=True)
    else:
        is_safe = False
        plan_store.store_plan(plan, is_good=False)
        
    # 4. Explanation
    generator = ExplanationGenerator(plan, opt_input, safety_result)
    expl = generator.generate()
    plan_store.store_explanation(expl)
    
    # 5. Audit Logging
    logger = AuditLogger(db)
    action = "FALLBACK_ACTIVATED" if is_safe else "PLAN_REJECTED"
    logger.log_action(
        action=action,
        resource="Plan",
        plan_id=plan.id,
        plan_version=plan.version,
        actor=getattr(current_user, "email", "system"),
        actor_role=getattr(current_user, "role", "system"),
        reason="Fallback plan generation invoked",
        result=safety_result.status,
        optimizer_version=plan.optimizer_version,
        safety_validator_version=plan.safety_validator_version,
        explanation_version=expl.explanation_version
    )
    
    if not is_safe:
        return FallbackResult(
            status="REJECTED",
            message="Fallback plan failed safety validation",
            plan_id=plan.id,
            fallback_plan=plan,
            safety_result=safety_result
        )
        
    return FallbackResult(
        status="ACCEPTED",
        message="Fallback plan generated and passed safety validation",
        plan_id=plan.id,
        fallback_plan=plan,
        safety_result=safety_result
    )

@router.get("/audit/{plan_id}")
def get_plan_audit_trail(
    plan_id: str,
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    logger = AuditLogger(db)
    logs = logger.get_logs_for_plan(plan_id)
    return logs

@router.get("/audit")
def get_all_audit_trail(
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    logger = AuditLogger(db)
    logs = logger.get_all_logs()
    return logs

@router.get("/plans/{plan_id}/history")
def get_plan_history(
    plan_id: str,
    current_user: Any = Depends(get_current_user)
):
    history = plan_store.get_plan_history(plan_id)
    if not history:
        raise HTTPException(status_code=404, detail="Plan history not found")
    return history
