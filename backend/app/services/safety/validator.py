from sqlalchemy.orm import Session
from datetime import datetime
from typing import Dict, Any

from app.services.safety.schemas import SafetyCheckResult, RuleViolation
from app.services.safety.registry import get_registry
from app.schemas.shared import Plan
import app.services.safety.checkers as checkers

class SafetyValidator:
    def __init__(self, db: Session):
        self.db = db
        self.registry = get_registry()
        
    def validate_plan(self, plan: Plan, context: Dict[str, Any] = None) -> SafetyCheckResult:
        if context is None:
            context = {}
            
        all_violations = []
        
        for rule in self.registry:
            checker_func = getattr(checkers, rule.checker_reference, None)
            if checker_func:
                violations = checker_func(rule, plan, self.db, context)
                all_violations.extend(violations)
                
        # Determine overall status
        status = "PASS"
        is_safe = True
        
        has_soft = False
        has_hard = False
        
        for v in all_violations:
            if v.severity == "HIGH" or next((r.hard_or_soft for r in self.registry if r.rule_id == v.rule_id), "SOFT") == "HARD":
                has_hard = True
                is_safe = False
            else:
                has_soft = True
                
        if has_hard:
            status = "REJECTED"
        elif has_soft:
            status = "PASS_WITH_WARNINGS"
            
        return SafetyCheckResult(
            status=status,
            is_safe=is_safe,
            violations=all_violations,
            validation_timestamp=datetime.utcnow(),
            plan_version=plan.version
        )
