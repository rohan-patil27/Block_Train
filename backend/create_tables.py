import sys
sys.path.insert(0, '/app')

# Import all models so Base.metadata knows about them
from app.models import (
    Base, User, RoleEnum,
    RailwayNode, TrackSection, Loop, Platform, LevelCrossing,
    Department, Machine, MaintenanceAsset, Depot, Siding, MaintenanceGang,
    Train, MaintenanceRequest, BlockRequest, TrainSchedule, Defect, TSR, TractionState,
    AuditLog,
    ConfidenceLevel, IssueType, DataSource, RawIngestionRecord, ProvenanceLog, FusionIssue,
    ExecutionSession, TelemetryLog, DisruptionEvent, PredictionCalibration,
)
from app.db.session import engine

print("Creating all tables with all models registered...")
Base.metadata.create_all(engine)
print("Done! All tables created successfully.")
