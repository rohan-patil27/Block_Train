from pydantic import BaseModel, ConfigDict
from typing import List, Optional
from datetime import datetime

class Token(BaseModel):
    access_token: str
    token_type: str

class TokenData(BaseModel):
    username: str | None = None

class TwinState(BaseModel):
    nodes: list[dict]
    sections: list[dict]
    assets: list[dict]

class BlockRequestSchema(BaseModel):
    id: Optional[int] = None
    maintenance_request_id: int
    start_time: datetime
    end_time: datetime
    status: str
    
    model_config = ConfigDict(from_attributes=True)

class PriorityScore(BaseModel):
    maintenance_request_id: int
    score: float

class ShadowBlockGroup(BaseModel):
    group_id: str
    block_request_ids: List[int]

class PlanItem(BaseModel):
    block_request_id: int
    scheduled_start: datetime
    scheduled_end: datetime
    confidence_state: Optional[str] = None
    priority_score: Optional[float] = None
    is_shadow_block: bool = False
    shadow_group_id: Optional[str] = None

class SolverStatus(BaseModel):
    status: str
    solve_time_seconds: float
    objective_value: float
    objective_breakdown: Optional[dict] = None
    deferred_requests: List[int] = []
    shadow_block_groups: List[ShadowBlockGroup] = []
    diagnostics: Optional[dict] = None

class Plan(BaseModel):
    id: Optional[str] = None
    plan_id: Optional[str] = None
    version: str = "1.0"
    generated_at: Optional[datetime] = None
    optimizer_version: str = "cp-sat-0.1"
    safety_validator_version: str = "safety-0.1"
    previous_plan_id: Optional[str] = None
    items: List[PlanItem]
    solver_status: Optional[SolverStatus] = None

class RuleViolation(BaseModel):
    rule_id: str
    severity: str
    plan_item_id: Optional[int] = None
    explanation: str
    supporting_values: dict = {}

class SafetyCheckResult(BaseModel):
    status: str
    is_safe: bool
    violations: List[RuleViolation] = []
    validation_timestamp: datetime
    plan_version: str

class SimulationResult(BaseModel):
    success: bool
    metrics: dict

class Explanation(BaseModel):
    reason: str
    factors: List[str]

class TelemetryRecord(BaseModel):
    timestamp: datetime
    plan_id: str
    plan_version: str
    block_request_id: int
    section_id: Optional[int] = None
    machine_id: Optional[int] = None
    gang_id: Optional[int] = None
    progress_percent: float
    elapsed_minutes: float
    expected_remaining_minutes: float
    actual_status: str

    model_config = ConfigDict(from_attributes=True)

class DisruptionEventSchema(BaseModel):
    event_id: Optional[int] = None
    event_type: str
    timestamp: datetime
    plan_id: str
    plan_version: str
    affected_request: Optional[int] = None
    affected_section: Optional[int] = None
    severity: str
    reason: Optional[str] = None

    model_config = ConfigDict(from_attributes=True)

class ExecutionStateSchema(BaseModel):
    execution_id: int
    plan_id: str
    plan_version: str
    status: str
    start_time: datetime
    last_updated: datetime
    telemetry: List[TelemetryRecord] = []
    events: List[DisruptionEventSchema] = []

    model_config = ConfigDict(from_attributes=True)

class CalibrationRecordSchema(BaseModel):
    block_request_id: int
    predicted_duration: float
    actual_duration: float
    prediction_error: float
    model_version: str
    execution_outcome: str
    recorded_at: datetime
    
    model_config = ConfigDict(from_attributes=True)
