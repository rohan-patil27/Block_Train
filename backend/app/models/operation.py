from sqlalchemy import Column, Integer, String, Float, ForeignKey, DateTime, Boolean
from app.db.base import Base
from sqlalchemy.orm import relationship

class Train(Base):
    __tablename__ = "trains"

    id = Column(Integer, primary_key=True, index=True)
    train_number = Column(String, unique=True, index=True, nullable=False)
    train_type = Column(String, nullable=False)
    # E.g., 'freight', 'express', 'passenger'

class TrainSchedule(Base):
    __tablename__ = "train_schedules"

    id = Column(Integer, primary_key=True, index=True)
    train_id = Column(Integer, ForeignKey("trains.id"), nullable=False)
    node_id = Column(Integer, ForeignKey("railway_nodes.id"), nullable=False)
    arrival_time = Column(DateTime, nullable=True)
    departure_time = Column(DateTime, nullable=True)
    sequence = Column(Integer, nullable=False)

    train = relationship("Train")
    node = relationship("RailwayNode")

class MaintenanceRequest(Base):
    __tablename__ = "maintenance_requests"

    id = Column(Integer, primary_key=True, index=True)
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=False)
    asset_id = Column(Integer, ForeignKey("maintenance_assets.id"), nullable=False)
    duration_mins = Column(Integer, nullable=False)
    priority_score = Column(Float)
    status = Column(String, default="pending")
    due_date = Column(DateTime, nullable=True)
    
    department = relationship("Department")
    asset = relationship("MaintenanceAsset")

class BlockRequest(Base):
    __tablename__ = "block_requests"

    id = Column(Integer, primary_key=True, index=True)
    maintenance_request_id = Column(Integer, ForeignKey("maintenance_requests.id"), nullable=False)
    start_time = Column(DateTime)
    end_time = Column(DateTime)
    status = Column(String, default="requested")

    maintenance_request = relationship("MaintenanceRequest")

class Defect(Base):
    __tablename__ = "defects"

    id = Column(Integer, primary_key=True, index=True)
    asset_id = Column(Integer, ForeignKey("maintenance_assets.id"), nullable=False)
    description = Column(String, nullable=False)
    severity = Column(String, nullable=False)
    reported_at = Column(DateTime, nullable=False)

    asset = relationship("MaintenanceAsset")

class TSR(Base):
    """Temporary Speed Restriction"""
    __tablename__ = "tsrs"

    id = Column(Integer, primary_key=True, index=True)
    track_section_id = Column(Integer, ForeignKey("track_sections.id"), nullable=False)
    speed_limit = Column(Float, nullable=False)
    start_time = Column(DateTime, nullable=False)
    end_time = Column(DateTime, nullable=True)

    track_section = relationship("TrackSection")

class TractionState(Base):
    __tablename__ = "traction_states"

    id = Column(Integer, primary_key=True, index=True)
    track_section_id = Column(Integer, ForeignKey("track_sections.id"), nullable=False)
    is_active = Column(Boolean, default=True)
    voltage = Column(Float, nullable=True)
    recorded_at = Column(DateTime, nullable=False)

    track_section = relationship("TrackSection")
