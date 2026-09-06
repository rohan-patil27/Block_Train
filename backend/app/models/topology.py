from sqlalchemy import Column, Integer, String, Float, ForeignKey, Boolean
from sqlalchemy.orm import relationship
from geoalchemy2 import Geometry
from app.db.base import Base

class RailwayNode(Base):
    __tablename__ = "railway_nodes"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    geometry = Column(Geometry('POINT', srid=4326))

class TrackSection(Base):
    __tablename__ = "track_sections"

    id = Column(Integer, primary_key=True, index=True)
    from_node_id = Column(Integer, ForeignKey("railway_nodes.id"), nullable=False)
    to_node_id = Column(Integer, ForeignKey("railway_nodes.id"), nullable=False)
    length = Column(Float, nullable=False)
    gradient = Column(Float, nullable=False)
    curve_radius = Column(Float, nullable=False)
    max_speed = Column(Float, nullable=False)
    geometry = Column(Geometry('LINESTRING', srid=4326))

    from_node = relationship("RailwayNode", foreign_keys=[from_node_id])
    to_node = relationship("RailwayNode", foreign_keys=[to_node_id])

class Loop(Base):
    __tablename__ = "loops"

    id = Column(Integer, primary_key=True, index=True)
    node_id = Column(Integer, ForeignKey("railway_nodes.id"), nullable=False)
    capacity = Column(Integer, nullable=False)
    name = Column(String)

    node = relationship("RailwayNode")

class Platform(Base):
    __tablename__ = "platforms"

    id = Column(Integer, primary_key=True, index=True)
    node_id = Column(Integer, ForeignKey("railway_nodes.id"), nullable=False)
    name = Column(String, nullable=False)
    length = Column(Float, nullable=False)
    has_canopy = Column(Boolean, default=False)
    geometry = Column(Geometry('LINESTRING', srid=4326))

    node = relationship("RailwayNode")

class LevelCrossing(Base):
    __tablename__ = "level_crossings"

    id = Column(Integer, primary_key=True, index=True)
    track_section_id = Column(Integer, ForeignKey("track_sections.id"), nullable=False)
    name = Column(String, nullable=False)
    is_manned = Column(Boolean, default=True)
    geometry = Column(Geometry('POINT', srid=4326))

    track_section = relationship("TrackSection")
