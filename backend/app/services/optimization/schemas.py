from pydantic import BaseModel
from typing import List, Optional, Dict
from datetime import datetime

class OptTrain(BaseModel):
    train_id: int
    train_type: str # e.g. "express", "freight"
    scheduled_start: int # relative minute from horizon start
    scheduled_end: int # relative minute
    section_id: int
    confidence: str = "HIGH"

class OptMaintenanceRequest(BaseModel):
    request_id: int
    department_id: int
    section_id: int
    duration_mins: int
    priority_score: float # 0.0 to 1.0
    window_start: int # relative minute
    window_end: int # relative minute
    confidence: str = "HIGH"

class OptSection(BaseModel):
    section_id: int
    capacity: int = 1
    traction_state: str = "AVAILABLE" # AVAILABLE, LIMITED, FAILED

class OptGang(BaseModel):
    gang_id: int
    department_id: int
    available: bool = True

class OptimizationConfig(BaseModel):
    horizon_mins: int = 480
    max_time_in_seconds: int = 60
    w_maintenance: float = 0.40
    w_delay: float = 0.35
    w_shadow: float = 0.15
    w_dead_mileage: float = 0.05
    w_risk: float = 0.05

class OptimizationInput(BaseModel):
    horizon_start: datetime
    config: OptimizationConfig
    trains: List[OptTrain]
    maintenance_requests: List[OptMaintenanceRequest]
    sections: List[OptSection]
    gangs: List[OptGang]
