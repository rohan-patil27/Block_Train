from pydantic import BaseModel
from typing import List, Dict, Any, Optional
from datetime import datetime

from app.schemas.shared import Plan

class SimulationRequest(BaseModel):
    plan: Plan
    scenario: str
    disruption_params: Optional[Dict[str, Any]] = None

class SimulationResult(BaseModel):
    simulation_id: str
    plan_id: str
    scenario: str
    start_time: datetime
    end_time: datetime
    affected_trains: List[int]
    affected_sections: List[int]
    delay_metrics: Dict[str, float]
    propagation_events: List[Dict[str, Any]]
    recovery_metrics: Dict[str, float]
    cost_metrics: Dict[str, float]
    robustness_metrics: Dict[str, float]
    simulation_version: str
    reoptimization_triggered: bool = False
    reoptimization_status: str = "NONE" # ROBUST, REOPTIMIZED, TIMEOUT, INFEASIBLE, MAX_ATTEMPTS, FALLBACK_REQUIRED
    revised_plan: Optional[Plan] = None
