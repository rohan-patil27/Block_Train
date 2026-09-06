import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.db.session import get_db
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from app.db.base import Base

import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../data-gen")))
import seed

from app.models.fusion import DataSource, FusionIssue, RawIngestionRecord, ProvenanceLog
from app.models.operation import MaintenanceRequest
from app.models.user import User
from app.models.topology import RailwayNode
from app.models.asset import Department

SQLALCHEMY_DATABASE_URL = "sqlite:///./test_phase1.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

import sqlite3
from sqlalchemy import event

def dummy_func(*args):
    return "00" * 25

@event.listens_for(engine, "connect")
def receive_connect(dbapi_connection, connection_record):
    if isinstance(dbapi_connection, sqlite3.Connection):
        dbapi_connection.create_function("RecoverGeometryColumn", -1, dummy_func)
        dbapi_connection.create_function("AddGeometryColumn", -1, dummy_func)
        dbapi_connection.create_function("CreateSpatialIndex", -1, dummy_func)
        dbapi_connection.create_function("CheckSpatialMetaData", -1, dummy_func)
        dbapi_connection.create_function("CheckSpatialIndex", -1, dummy_func)
        dbapi_connection.create_function("DisableSpatialIndex", -1, dummy_func)
        dbapi_connection.create_function("DiscardGeometryColumn", -1, dummy_func)
        dbapi_connection.create_function("ST_AsGeoJSON", -1, dummy_func)
        dbapi_connection.create_function("GeomFromEWKT", -1, dummy_func)
        dbapi_connection.create_function("AsEWKB", -1, dummy_func)

Base.metadata.drop_all(bind=engine)
Base.metadata.create_all(bind=engine)

def override_get_db():
    db = TestingSessionLocal()
    try:
        yield db
    finally:
        db.close()

app.dependency_overrides[get_db] = override_get_db

# Seed the test db once
db_session = TestingSessionLocal()
seed.seed_data(db_session)
db_session.close()

client = TestClient(app)

def test_phase1_data_sources():
    response = client.get("/api/v1/data-sources")
    assert response.status_code == 200
    data = response.json()
    assert "sources" in data
    # At least some sources should be seeded
    assert len(data["sources"]) > 0
    names = [s["name"] for s in data["sources"]]
    assert "RBPMS" in names

def test_phase1_fusion_status():
    response = client.get("/api/v1/fusion/status")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "active"
    assert data["total_records_processed"] > 0

def test_phase1_fusion_issues():
    response = client.get("/api/v1/fusion/issues")
    assert response.status_code == 200
    data = response.json()
    assert "issues" in data
    # We deliberately seeded corrupted data, so there should be issues
    assert len(data["issues"]) > 0

def test_phase1_fusion_records():
    response = client.get("/api/v1/fusion/records")
    assert response.status_code == 200
    data = response.json()
    assert "records" in data

def test_phase1_maintenance_overdue():
    response = client.get("/api/v1/maintenance/overdue")
    assert response.status_code == 200
    data = response.json()
    assert "overdue" in data
    assert isinstance(data["overdue"], list)
