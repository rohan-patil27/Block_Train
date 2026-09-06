from sqlalchemy.orm import Session
from app.services.optimization.adapter import OptimizationAdapter
from app.services.optimization.solver import Optimizer
from app.services.safety.validator import SafetyValidator
from app.services.simulation.schemas import SimulationResult
from app.schemas.shared import Plan
from app.services.optimization.schemas import OptimizationConfig

class BoundedReoptimizer:
    def __init__(self, db: Session, max_attempts: int = 3):
        self.db = db
        self.max_attempts = max_attempts

    def maybe_reoptimize(self, sim_result: SimulationResult, config_override: OptimizationConfig = None) -> SimulationResult:
        sim_result.reoptimization_triggered = False
        sim_result.reoptimization_status = "ROBUST"

        # Check conditions for reoptimization
        needs_reopt = False
        if sim_result.scenario == "block_overrun":
            if any(ev.get("type") == "overrun" for ev in sim_result.propagation_events):
                needs_reopt = True
        elif sim_result.scenario == "machine_failure_mid_section":
            if any(ev.get("type") == "machine_failure" for ev in sim_result.propagation_events):
                needs_reopt = True
        elif sim_result.scenario == "traction_power_trip":
            if any(ev.get("type") == "traction_trip" for ev in sim_result.propagation_events):
                needs_reopt = True
        
        # Or if plan stability < 0.9 (tighter threshold)
        if sim_result.robustness_metrics.get("plan_stability_index", 1.0) < 0.9:
            needs_reopt = True

        if not needs_reopt:
            return sim_result

        sim_result.reoptimization_triggered = True
        sim_result.reoptimization_status = "PENDING"
        
        adapter = OptimizationAdapter(self.db)
        validator = SafetyValidator(self.db)
        
        for attempt in range(1, self.max_attempts + 1):
            if not config_override:
                from app.services.optimization.schemas import OptimizationConfig
                config_override = OptimizationConfig()
                
            opt_input = adapter.generate_input(sim_result.start_time, config_override)
            
            # Relax soft weights sequentially
            if attempt == 2:
                opt_input.config.w_delay *= 0.5
                opt_input.config.w_maintenance *= 1.5
            elif attempt == 3:
                opt_input.config.w_delay *= 0.1
                opt_input.config.w_maintenance *= 2.0
                
            solver = Optimizer(opt_input)
            new_plan = solver.solve()
            
            # Map solver status
            if new_plan.solver_status and new_plan.solver_status.status == "INFEASIBLE":
                sim_result.reoptimization_status = "INFEASIBLE"
                continue
            elif new_plan.solver_status and new_plan.solver_status.status in ["UNKNOWN", "MODEL_INVALID"]:
                sim_result.reoptimization_status = "TIMEOUT"
                continue
                
            # Must pass safety validation
            safety_result = validator.validate_plan(new_plan, {"horizon_start": sim_result.start_time})
            if safety_result.status in ["PASS", "PASS_WITH_WARNINGS"]:
                sim_result.reoptimization_status = "REOPTIMIZED"
                sim_result.revised_plan = new_plan
                return sim_result
            else:
                sim_result.reoptimization_status = "FALLBACK_REQUIRED"
        
        if sim_result.reoptimization_status == "PENDING" or sim_result.reoptimization_status == "FALLBACK_REQUIRED":
            sim_result.reoptimization_status = "MAX_ATTEMPTS"
            
        return sim_result
