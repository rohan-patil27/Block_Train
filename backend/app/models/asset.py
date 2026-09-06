from sqlalchemy import Column, Integer, String, ForeignKey
from geoalchemy2 import Geometry
from app.db.base import Base
from sqlalchemy.orm import relationship

class Department(Base):
    __tablename__ = "departments"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, nullable=False)

class Machine(Base):
    __tablename__ = "machines"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    department_id = Column(Integer, ForeignKey("departments.id"))
    
    department = relationship("Department")

class MaintenanceAsset(Base):
    __tablename__ = "maintenance_assets"
    
    id = Column(Integer, primary_key=True, index=True)
    asset_type = Column(String, nullable=False)
    department_id = Column(Integer, ForeignKey("departments.id"))
    geometry = Column(Geometry('GEOMETRY', srid=4326)) # Can be POINT or LINESTRING
    
    department = relationship("Department")

class Depot(Base):
    __tablename__ = "depots"

    id = Column(Integer, primary_key=True, index=True)
    node_id = Column(Integer, ForeignKey("railway_nodes.id"), nullable=False)
    name = Column(String, nullable=False)
    department_id = Column(Integer, ForeignKey("departments.id"))
    geometry = Column(Geometry('POINT', srid=4326))

    node = relationship("RailwayNode")
    department = relationship("Department")

class Siding(Base):
    __tablename__ = "sidings"

    id = Column(Integer, primary_key=True, index=True)
    node_id = Column(Integer, ForeignKey("railway_nodes.id"), nullable=False)
    name = Column(String, nullable=False)
    capacity = Column(Integer, nullable=False)
    geometry = Column(Geometry('LINESTRING', srid=4326))

    node = relationship("RailwayNode")

class MaintenanceGang(Base):
    __tablename__ = "maintenance_gangs"

    id = Column(Integer, primary_key=True, index=True)
    department_id = Column(Integer, ForeignKey("departments.id"), nullable=False)
    name = Column(String, nullable=False)
    depot_id = Column(Integer, ForeignKey("depots.id"), nullable=True)

    department = relationship("Department")
    depot = relationship("Depot")
