from sqlalchemy import Column, Integer, String, ForeignKey, DateTime, JSON, Enum
from app.db.base import Base
from sqlalchemy.orm import relationship
import enum

class ConfidenceLevel(str, enum.Enum):
    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"

class IssueType(str, enum.Enum):
    DUPLICATE = "DUPLICATE"
    MISSING_VALUE = "MISSING_VALUE"
    CONTRADICTION = "CONTRADICTION"
    STALE = "STALE"
    OVERDUE = "OVERDUE"

class DataSource(Base):
    __tablename__ = "data_sources"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True, nullable=False)
    description = Column(String)

class RawIngestionRecord(Base):
    __tablename__ = "raw_ingestion_records"

    id = Column(Integer, primary_key=True, index=True)
    source_id = Column(Integer, ForeignKey("data_sources.id"), nullable=False)
    source_record_id = Column(String, nullable=False, index=True)
    ingestion_timestamp = Column(DateTime, nullable=False)
    schema_version = Column(String, nullable=False)
    payload = Column(JSON, nullable=False)
    
    source = relationship("DataSource")

class ProvenanceLog(Base):
    __tablename__ = "provenance_logs"

    id = Column(Integer, primary_key=True, index=True)
    raw_record_id = Column(Integer, ForeignKey("raw_ingestion_records.id"), nullable=True)
    entity_type = Column(String, nullable=False, index=True)
    entity_id = Column(Integer, nullable=False, index=True)
    field_name = Column(String, nullable=False)
    selected_value = Column(String) # Cast to string for simplicity, or JSON
    confidence = Column(Enum(ConfidenceLevel), nullable=False)
    action = Column(String, nullable=False) # e.g. 'reconciled_conflict', 'imputed_missing', 'selected_latest'
    reason = Column(String)
    timestamp = Column(DateTime, nullable=False)

    raw_record = relationship("RawIngestionRecord")

class FusionIssue(Base):
    __tablename__ = "fusion_issues"

    id = Column(Integer, primary_key=True, index=True)
    raw_record_id = Column(Integer, ForeignKey("raw_ingestion_records.id"), nullable=True)
    issue_type = Column(Enum(IssueType), nullable=False)
    severity = Column(String, nullable=False)
    field = Column(String)
    description = Column(String, nullable=False)
    detected_at = Column(DateTime, nullable=False)

    raw_record = relationship("RawIngestionRecord")
