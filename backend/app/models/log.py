from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from app.db.base import Base
from sqlalchemy.sql import func

class AuditLog(Base):
    __tablename__ = "audit_logs"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    action = Column(String, nullable=False)
    resource = Column(String, nullable=False)
    timestamp = Column(DateTime, server_default=func.now())
    
    actor = Column(String, nullable=True)
    actor_role = Column(String, nullable=True)
    plan_id = Column(String, nullable=True)
    plan_version = Column(String, nullable=True)
    previous_plan_id = Column(String, nullable=True)
    new_plan_id = Column(String, nullable=True)
    
    optimizer_version = Column(String, nullable=True)
    safety_validator_version = Column(String, nullable=True)
    explanation_version = Column(String, nullable=True)
    simulation_id = Column(String, nullable=True)
    
    reason = Column(String, nullable=True)
    result = Column(String, nullable=True)
