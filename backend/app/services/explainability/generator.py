from app.schemas.shared import Plan
from app.services.optimization.schemas import OptimizationInput
from app.services.explainability.schemas import Explanation
from app.services.safety.schemas import SafetyCheckResult
from app.services.simulation.schemas import SimulationResult
from typing import Optional

class ExplanationGenerator:
    def __init__(self, plan: Plan, opt_input: OptimizationInput, safety_result: SafetyCheckResult, sim_result: Optional[SimulationResult] = None):
        self.plan = plan
        self.opt_input = opt_input
        self.safety_result = safety_result
        self.sim_result = sim_result

    def generate(self) -> Explanation:
        is_fallback = getattr(self.plan.solver_status, 'status', None) == 'FALLBACK'
        
        # 1. Root Cause
        root_cause = self._generate_root_cause(is_fallback)
        
        # 2. Synergy
        synergy = self._generate_synergy()
        
        # 3. Tradeoffs
        tradeoffs = self._generate_tradeoffs()
        
        # 4. Safety
        safety_summary = self._generate_safety()
        
        # 5. Robustness
        robustness_summary = self._generate_robustness()
        
        # 6. Decision
        decision_summary = self._generate_decision(is_fallback)

        expl = Explanation(
            plan_id=self.plan.id or self.plan.plan_id or "unknown",
            plan_version=self.plan.version,
            root_cause=root_cause,
            synergy=synergy,
            tradeoffs=tradeoffs,
            safety_summary=safety_summary,
            robustness_summary=robustness_summary,
            decision_summary=decision_summary,
            contributing_requests=[item.block_request_id for item in self.plan.items],
        )
        
        if getattr(self.plan.solver_status, 'objective_breakdown', None):
            expl.objective_contributions = self.plan.solver_status.objective_breakdown
            
        return expl

    def _generate_root_cause(self, is_fallback: bool) -> str:
        if is_fallback:
            return "The original optimization engine failed to find a valid solution. A deterministic heuristic fallback was applied, prioritizing block requests strictly by their Priority Score into available windows."
        else:
            return "The optimization engine determined the block assignments by minimizing total expected train delay while maximizing priority-weighted maintenance requests within the planning horizon."

    def _generate_synergy(self) -> str:
        groups = getattr(self.plan.solver_status, 'shadow_block_groups', [])
        if not groups:
            return "No maintenance requests were consolidated into shadow-blocks due to a lack of overlapping deterministic compatibility."
        
        total_grouped = sum(len(g.block_request_ids) for g in groups)
        return f"{total_grouped} maintenance requests were grouped into {len(groups)} shared block(s) because they overlap in available windows and are on compatible overlapping sections."

    def _generate_tradeoffs(self) -> str:
        breakdown = getattr(self.plan.solver_status, 'objective_breakdown', {})
        if not breakdown:
            return "Trade-off analysis is unavailable for this plan generation method."
            
        delay_penalty = breakdown.get("delay_penalty", 0)
        maint_reward = breakdown.get("maintenance_reward", 0)
        
        return f"The plan improves maintenance coverage (reward: {maint_reward}) while balancing expected train delay penalty ({delay_penalty})."

    def _generate_safety(self) -> str:
        if self.safety_result.status == "PASS":
            return "Safety validation passed with no hard violations."
        elif self.safety_result.status == "PASS_WITH_WARNINGS":
            warn_count = len([v for v in self.safety_result.violations if v.severity == "WARNING"])
            return f"Safety validation passed but generated {warn_count} soft warning(s)."
        else:
            viol_count = len(self.safety_result.violations)
            return f"Safety validation FAILED with {viol_count} hard violation(s)."

    def _generate_robustness(self) -> str:
        if not self.sim_result:
            return "Simulation was not run for this plan."
        
        scen = self.sim_result.scenario.replace('_', ' ')
        status = self.sim_result.reoptimization_status
        return f"Simulation scenario: {scen}. The original plan was assessed as {status}. A revised plan was generated and revalidated successfully." if status == "REOPTIMIZED" else f"Simulation scenario: {scen}. The plan proved robust."

    def _generate_decision(self, is_fallback: bool) -> str:
        if self.safety_result.status not in ["PASS", "PASS_WITH_WARNINGS"]:
            return "rejected"
        if is_fallback:
            return "fallback-generated"
        if self.safety_result.status == "PASS_WITH_WARNINGS":
            return "recommended with warnings"
        return "recommended"
