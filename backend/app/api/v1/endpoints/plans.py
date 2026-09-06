from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import datetime
from typing import Any
import uuid

from app.db.session import get_db
from app.core.dependencies import get_current_user
from app.services.optimization.adapter import OptimizationAdapter
from app.services.optimization.schemas import OptimizationConfig
from app.services.optimization.solver import Optimizer
from app.services.safety.validator import SafetyValidator
from app.services.explainability.generator import ExplanationGenerator
from app.services.explainability.plan_manager import plan_store
from app.services.explainability.audit import AuditLogger
from app.services.explainability.schemas import Explanation
from app.schemas.shared import Plan, SafetyCheckResult
from pydantic import BaseModel

router = APIRouter()

class DemoResponse(BaseModel):
    plan: Plan
    safety_result: SafetyCheckResult
    explanation: Explanation

@router.get("/demo", response_model=DemoResponse)
def run_demo_flow(
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    now = datetime.utcnow()
    config = OptimizationConfig(horizon_mins=120)
    adapter = OptimizationAdapter(db)
    opt_input = adapter.generate_input(now, config)
    
    # 1. Optimize
    solver = Optimizer(opt_input)
    plan = solver.solve()
    
    # Ensure Plan has ID
    if not plan.id:
        plan.id = str(uuid.uuid4())
        plan.plan_id = plan.id
        
    # 2. Safety Check
    validator = SafetyValidator(db)
    safety_result = validator.validate_plan(plan)
    
    # Store Plan
    is_safe = safety_result.status in ["PASS", "PASS_WITH_WARNINGS"]
    plan_store.store_plan(plan, is_good=is_safe)
    
    # 3. Explain
    generator = ExplanationGenerator(plan, opt_input, safety_result)
    expl = generator.generate()
    plan_store.store_explanation(expl)
    
    # 4. Audit Plan Generation
    logger = AuditLogger(db)
    logger.log_action(
        action="PLAN_GENERATED",
        resource="Plan",
        plan_id=plan.id,
        plan_version=plan.version,
        actor="optimizer",
        actor_role="system",
        reason="Demo flow triggered",
        result=safety_result.status
    )
    
    return DemoResponse(
        plan=plan,
        safety_result=safety_result,
        explanation=expl
    )

@router.post("/{plan_id}/approve")
def approve_plan(
    plan_id: str,
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    logger = AuditLogger(db)
    logger.log_action(
        action="PLAN_APPROVED",
        resource="Plan",
        plan_id=plan_id,
        plan_version="1.0",
        actor=getattr(current_user, "username", "controller"),
        actor_role=getattr(current_user, "role", "CONTROLLER"),
        reason="Approved by controller",
        result="SUCCESS"
    )
    return {"status": "approved", "plan_id": plan_id}

@router.post("/{plan_id}/reject")
def reject_plan(
    plan_id: str,
    reason: str = "Rejected by controller",
    db: Session = Depends(get_db),
    current_user: Any = Depends(get_current_user)
):
    logger = AuditLogger(db)
    logger.log_action(
        action="PLAN_REJECTED",
        resource="Plan",
        plan_id=plan_id,
        plan_version="1.0",
        actor=getattr(current_user, "username", "controller"),
        actor_role=getattr(current_user, "role", "CONTROLLER"),
        reason=reason,
        result="SUCCESS"
    )
    return {"status": "rejected", "plan_id": plan_id}
