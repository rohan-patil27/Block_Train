import logging
from sqlalchemy.orm import Session
from datetime import datetime
import uuid
from app.models.execution import ExecutionSession
from app.services.optimization.adapter import OptimizationAdapter
from app.services.optimization.schemas import OptimizationConfig
from app.services.optimization.solver import Optimizer
from app.services.safety.validator import SafetyValidator
from app.services.explainability.generator import ExplanationGenerator
from app.services.explainability.plan_manager import plan_store
from app.services.explainability.audit import AuditLogger

logger = logging.getLogger(__name__)

class ClosedLoopController:
    def __init__(self, db: Session):
        self.db = db

    def trigger_reoptimization(self, execution_id: int):
        """
        Coordinates the closed-loop re-optimization process when a disruption is detected.
        """
        session = self.db.query(ExecutionSession).filter(ExecutionSession.id == execution_id).first()
        if not session or session.status != "RUNNING":
            return None

        # 1. Generate updated operational state
        now = datetime.utcnow()
        config = OptimizationConfig(horizon_mins=120)
        adapter = OptimizationAdapter(self.db)
        
        # In a real system, the adapter would ingest telemetry to adjust starting states.
        # Here we just generate the baseline input, simulating the updated state.
        opt_input = adapter.generate_input(now, config)
        
        # 2. Run CP-SAT Optimizer
        solver = Optimizer(opt_input)
        revised_plan = solver.solve()
        
        # 3. Plan Versioning
        old_version = session.plan_version
        try:
            v_major, v_minor = map(int, old_version.split('.'))
            new_version = f"{v_major}.{v_minor + 1}"
        except:
            new_version = "2.0"

        revised_plan.id = str(uuid.uuid4())
        revised_plan.plan_id = session.plan_id
        revised_plan.version = new_version
        revised_plan.previous_plan_id = session.plan_id # Keeping simple link to previous
        
        # 4. Validate Safety
        validator = SafetyValidator(self.db)
        safety_result = validator.validate_plan(revised_plan)
        
        # Must pass safety validator
        if safety_result.status not in ["PASS", "PASS_WITH_WARNINGS"]:
            logger.error("Revised plan failed safety validation. Cannot proceed.")
            # In a full system, might fallback to emergency schedule.
            return None

        # Store the plan
        plan_store.store_plan(revised_plan, is_good=True)
        
        # 5. Generate Explanation
        generator = ExplanationGenerator(revised_plan, opt_input, safety_result)
        expl = generator.generate()
        plan_store.store_explanation(expl)
        
        # 6. Audit Trail
        audit_logger = AuditLogger(self.db)
        audit_logger.log_action(
            action="REOPTIMIZATION_TRIGGERED",
            resource="Execution",
            plan_id=revised_plan.plan_id,
            plan_version=old_version,
            actor="detector",
            actor_role="system",
            reason="Disruption detected",
            result="SUCCESS"
        )
        
        audit_logger.log_action(
            action="PLAN_GENERATED",
            resource="Plan",
            plan_id=revised_plan.plan_id,
            plan_version=new_version,
            actor="optimizer",
            actor_role="system",
            reason="Re-optimization after disruption",
            result=safety_result.status
        )
        
        audit_logger.log_action(
            action="PLAN_SAFETY_VALIDATED",
            resource="Plan",
            plan_id=revised_plan.plan_id,
            plan_version=new_version,
            actor="safety_validator",
            actor_role="system",
            reason="Safety check for revised plan",
            result=safety_result.status
        )

        # 7. Update Execution Session
        # The execution pauses for controller approval.
        session.status = "AWAITING_APPROVAL"
        self.db.commit()

        return {
            "revised_plan": revised_plan,
            "safety_result": safety_result,
            "explanation": expl,
            "old_version": old_version,
            "new_version": new_version
        }
