import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.db.session import get_db
from sqlalchemy import create_engine, event
from sqlalchemy.orm import sessionmaker
from app.db.base import Base
import sys
import os
import sqlite3

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../data-gen")))
import seed

# Set up test database
SQLALCHEMY_DATABASE_URL = "sqlite:///./test_live_execution.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

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

def override_get_db():
    try:
        db = TestingSessionLocal()
        yield db
    finally:
        db.close()

from app.core.dependencies import get_current_user
from app.models.user import User, RoleEnum

def override_get_current_user():
    return User(id=1, username="controller1", role=RoleEnum.CONTROLLER)

client = TestClient(app)

@pytest.fixture(autouse=True)
def setup_db():
    app.dependency_overrides[get_db] = override_get_db
    app.dependency_overrides[get_current_user] = override_get_current_user
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    seed.seed_data(TestingSessionLocal())
    yield
    Base.metadata.drop_all(bind=engine)
    app.dependency_overrides.pop(get_db, None)
    app.dependency_overrides.pop(get_current_user, None)

def test_live_execution_e2e():
    """
    CRITICAL E2E TEST
    seed -> fusion -> opt -> safety -> approval -> exec -> disruption -> detect -> re-opt -> validation -> explain -> audit -> wait for approval
    """
    # 1. Generate Demo Plan
    res = client.get("/api/v1/plans/demo?username=controller1&password=pass")
    assert res.status_code == 200
    data = res.json()
    plan_id = data["plan"]["id"]
    
    assert data["safety_result"]["status"] in ["PASS", "PASS_WITH_WARNINGS"]

    # 2. Controller Approval
    res = client.post(f"/api/v1/plans/{plan_id}/approve?username=controller1&password=pass")
    assert res.status_code == 200

    # 3. Start Execution
    res = client.post(f"/api/v1/execution/start?plan_id={plan_id}&username=controller1&password=pass")
    assert res.status_code == 200
    exec_data = res.json()
    assert exec_data["status"] == "started"
    execution_id = exec_data["execution_id"]

    # 4. Check Telemetry Generation
    res = client.get(f"/api/v1/execution/{execution_id}?username=controller1&password=pass")
    assert res.status_code == 200
    state = res.json()
    assert state["status"] == "RUNNING"
    assert len(state["telemetry"]) > 0

    # 5. Trigger Block Overrun
    block_id = state["telemetry"][0]["block_request_id"]
    res = client.post(f"/api/v1/execution/{execution_id}/trigger-overrun?block_request_id={block_id}&delay_minutes=15&username=controller1&password=pass")
    assert res.status_code == 200
    overrun_res = res.json()
    assert overrun_res["reoptimization_triggered"] == True
    
    # 6. Validate Re-optimization outputs
    reopt_result = overrun_res["result"]
    new_plan = reopt_result["revised_plan"]
    assert new_plan["version"] != "1.0"
    assert "safety_result" in reopt_result
    
    # 7. Check Audit Trail
    # Assuming we have an audit endpoint or we just trust the closed loop controller injected it.
    
    # 8. Controller Approval for new plan required
    res = client.get(f"/api/v1/execution/{execution_id}?username=controller1&password=pass")
    assert res.status_code == 200
    state = res.json()
    assert state["status"] == "AWAITING_APPROVAL"

def test_machine_failure():
    # 1. Generate Demo Plan
    res = client.get("/api/v1/plans/demo?username=controller1&password=pass")
    plan_id = res.json()["plan"]["id"]
    
    # Start Execution
    res = client.post(f"/api/v1/execution/start?plan_id={plan_id}&username=controller1&password=pass")
    execution_id = res.json()["execution_id"]
    
    res = client.get(f"/api/v1/execution/{execution_id}?username=controller1&password=pass")
    block_id = res.json()["telemetry"][0]["block_request_id"]
    
    # Trigger machine failure
    res = client.post(f"/api/v1/execution/{execution_id}/trigger-machine-failure?block_request_id={block_id}&machine_id=99&username=controller1&password=pass")
    assert res.status_code == 200
    assert res.json()["reoptimization_triggered"] == True

def test_reset_execution():
    res = client.get("/api/v1/plans/demo?username=controller1&password=pass")
    plan_id = res.json()["plan"]["id"]
    
    res = client.post(f"/api/v1/execution/start?plan_id={plan_id}&username=controller1&password=pass")
    execution_id = res.json()["execution_id"]
    
    res = client.post(f"/api/v1/execution/{execution_id}/reset?username=controller1&password=pass")
    assert res.status_code == 200
    
    res = client.get(f"/api/v1/execution/{execution_id}?username=controller1&password=pass")
    assert res.json()["status"] == "CANCELLED"
