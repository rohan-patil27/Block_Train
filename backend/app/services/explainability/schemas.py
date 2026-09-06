from pydantic import BaseModel, ConfigDict
from typing import List, Dict, Any, Optional
from datetime import datetime
import uuid

class Explanation(BaseModel):
    explanation_id: str = str(uuid.uuid4())
    plan_id: str
    plan_version: str
    generated_at: datetime = datetime.utcnow()
    
    root_cause: str
    synergy: str
    tradeoffs: str
    safety_summary: str
    robustness_summary: Optional[str] = None
    decision_summary: str
    
    contributing_requests: List[int] = []
    contributing_trains: List[int] = []
    objective_contributions: Dict[str, Any] = {}
    
    optimizer_version: str = "cp-sat-0.1"
    models_version: Dict[str, str] = {}
    safety_validator_version: str = "safety-0.1"
    explanation_version: str = "xai-0.1"

class FallbackResult(BaseModel):
    status: str
    message: str
    plan_id: Optional[str] = None
    fallback_plan: Optional[Any] = None
    safety_result: Optional[Any] = None
