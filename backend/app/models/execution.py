from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Boolean
from app.db.base import Base
from sqlalchemy.orm import relationship
import datetime

class ExecutionSession(Base):
    __tablename__ = "execution_sessions"

    id = Column(Integer, primary_key=True, index=True)
    plan_id = Column(String, index=True, nullable=False)
    plan_version = Column(String, nullable=False)
    status = Column(String, default="RUNNING") # RUNNING, DISRUPTED, AWAITING_APPROVAL, COMPLETED, CANCELLED
    start_time = Column(DateTime, default=datetime.datetime.utcnow)
    last_updated = Column(DateTime, default=datetime.datetime.utcnow)

class TelemetryLog(Base):
    __tablename__ = "telemetry_logs"

    id = Column(Integer, primary_key=True, index=True)
    execution_id = Column(Integer, ForeignKey("execution_sessions.id"), nullable=False)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    plan_id = Column(String, nullable=False)
    plan_version = Column(String, nullable=False)
    block_request_id = Column(Integer, nullable=False)
    section_id = Column(Integer, nullable=True)
    machine_id = Column(Integer, nullable=True)
    gang_id = Column(Integer, nullable=True)
    progress_percent = Column(Float, default=0.0)
    elapsed_minutes = Column(Float, default=0.0)
    expected_remaining_minutes = Column(Float, default=0.0)
    actual_status = Column(String, nullable=False) # SCHEDULED, ACTIVE, AT_RISK, OVERRUN, COMPLETED, FAILED

    session = relationship("ExecutionSession")

class DisruptionEvent(Base):
    __tablename__ = "disruption_events"

    id = Column(Integer, primary_key=True, index=True)
    execution_id = Column(Integer, ForeignKey("execution_sessions.id"), nullable=False)
    event_type = Column(String, nullable=False) # BLOCK_OVERRUN, MACHINE_FAILURE
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)
    plan_id = Column(String, nullable=False)
    plan_version = Column(String, nullable=False)
    affected_request = Column(Integer, nullable=True)
    affected_section = Column(Integer, nullable=True)
    severity = Column(String, nullable=False)
    reason = Column(String, nullable=True)

    session = relationship("ExecutionSession")

class PredictionCalibration(Base):
    __tablename__ = "prediction_calibrations"
    
    id = Column(Integer, primary_key=True, index=True)
    block_request_id = Column(Integer, nullable=False)
    predicted_duration = Column(Float, nullable=False)
    actual_duration = Column(Float, nullable=False)
    prediction_error = Column(Float, nullable=False)
    model_version = Column(String, nullable=False)
    execution_outcome = Column(String, nullable=False) # COMPLETED, FAILED, OVERRUN
    recorded_at = Column(DateTime, default=datetime.datetime.utcnow)
