from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class IngestRecordBase(BaseModel):
    source_record_id: str
    ingestion_timestamp: datetime
    
class BlockRequestSource(IngestRecordBase):
    maintenance_request_id: int
    start_time: datetime
    end_time: datetime
    status: str

class TrainAndCrewSource(IngestRecordBase):
    train_number: str
    train_type: str
    current_node_id: Optional[int]
    arrival_time: Optional[datetime]
    departure_time: Optional[datetime]
    sequence: int

class MaintenanceSource(IngestRecordBase):
    asset_id: int
    department_id: int
    duration_mins: int
    due_date: Optional[datetime]
    priority_score: Optional[float]
    status: str

class SignallingTractionSource(IngestRecordBase):
    track_section_id: int
    is_active: bool
    voltage: Optional[float]
    recorded_at: datetime
    tsr_speed_limit: Optional[float]
    tsr_start: Optional[datetime]
    tsr_end: Optional[datetime]

class LogisticsResourceSource(IngestRecordBase):
    department_id: int
    gang_name: str
    depot_id: Optional[int]
    status: str

class WeatherSource(IngestRecordBase):
    node_id: int
    temperature: float
    precipitation: float
    visibility: float
    recorded_at: datetime

class CostResourceLedgerSource(IngestRecordBase):
    department_id: int
    asset_id: int
    cost_amount: float
    cost_type: str
    recorded_at: datetime

class GoodsTrafficForecastSource(IngestRecordBase):
    train_number: str
    tonnage: float
    commodity_type: str
    forecast_date: datetime
