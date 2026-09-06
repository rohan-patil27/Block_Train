from typing import Dict, List, Optional
from app.schemas.shared import Plan
from app.services.explainability.schemas import Explanation

class PlanManager:
    """
    In-memory prototype state manager for Plans and Explanations.
    This serves as a lightweight versioning and rollback reference store.
    """
    def __init__(self):
        self._plans: Dict[str, Plan] = {}
        self._explanations: Dict[str, Explanation] = {}
        
        # Track history chains. plan_id -> list of plan_ids in order
        self._history: Dict[str, List[str]] = {}
        
        # Last known good plan reference
        self._last_known_good_plan_id: Optional[str] = None

    def store_plan(self, plan: Plan, is_good: bool = False):
        plan_id = plan.id or plan.plan_id
        if not plan_id:
            return
            
        self._plans[plan_id] = plan
        
        # Manage history chain
        chain_id = plan_id
        # If there's a previous plan, this is an update to an existing chain
        if getattr(plan, "previous_plan_id", None):
            prev = plan.previous_plan_id
            for root, chain in self._history.items():
                if prev in chain:
                    chain_id = root
                    if plan_id not in chain:
                        chain.append(plan_id)
                    break
        else:
            if chain_id not in self._history:
                self._history[chain_id] = [chain_id]
                
        if is_good:
            self._last_known_good_plan_id = plan_id

    def store_explanation(self, explanation: Explanation):
        self._explanations[explanation.plan_id] = explanation

    def get_plan(self, plan_id: str) -> Optional[Plan]:
        return self._plans.get(plan_id)

    def get_explanation(self, plan_id: str) -> Optional[Explanation]:
        return self._explanations.get(plan_id)

    def get_plan_history(self, plan_id: str) -> List[Plan]:
        for root, chain in self._history.items():
            if plan_id in chain:
                return [self._plans[p_id] for p_id in chain if p_id in self._plans]
        
        # If not in any chain, just return itself if exists
        if plan_id in self._plans:
            return [self._plans[plan_id]]
        return []

    def get_last_known_good_plan(self) -> Optional[Plan]:
        if self._last_known_good_plan_id:
            return self._plans.get(self._last_known_good_plan_id)
        return None

# Global instance for prototype usage
plan_store = PlanManager()
