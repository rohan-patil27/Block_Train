from sqlalchemy import Column, Integer, String, Enum, ForeignKey
from sqlalchemy.orm import relationship
from app.db.base import Base
import enum

class RoleEnum(str, enum.Enum):
    CONTROLLER = "Controller"
    MAINTENANCE = "Maintenance Department"
    DIVISIONAL = "Divisional Operations"
    MANAGEMENT = "Management"
    CREW = "Crew/Gang"

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    role = Column(Enum(RoleEnum), nullable=False)
