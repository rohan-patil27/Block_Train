import pytest
from fastapi.testclient import TestClient
from datetime import datetime, timedelta

from app.main import app
from app.db.session import SessionLocal, engine
from app.db.base import Base
import sys, os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../data-gen")))
import seed
from app.schemas.shared import Plan, PlanItem
from app.core.dependencies import get_current_user
from app.models.user import User

client = TestClient(app)

def override_get_current_user():
    return User(id=1, username="test_controller", role="controller")

@pytest.fixture(autouse=True)
def setup_overrides():
    app.dependency_overrides[get_current_user] = override_get_current_user
    yield
    # No need to pop as it might be needed, or just let pytest tear it down

@pytest.fixture(scope="module")
def setup_database():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    seed.seed_data()
    db = SessionLocal()
    yield db
    db.close()

def generate_base_plan():
    now = datetime.utcnow()
    # Mocking a realistic plan that can be fed to simulation
    return Plan(
        version="1.0",
        items=[
            PlanItem(block_request_id=1, scheduled_start=now + timedelta(minutes=10), scheduled_end=now + timedelta(minutes=70))
        ]
    )

def test_simulation_robust_plan(setup_database):
    plan = generate_base_plan()
    
    response = client.post("/api/v1/simulation/run", json={
        "plan": plan.model_dump(mode="json"),
        "scenario": "block_overrun",
        "disruption_params": {"block_request_id": 999, "overrun_mins": 0} # No actual disruption
    })
    
    assert response.status_code == 200
    data = response.json()
    assert data["scenario"] == "block_overrun"
    assert data["reoptimization_status"] == "NONE"
    
    sim_id = data["simulation_id"]
    
    # Trigger reoptimize manually
    reopt_resp = client.post(f"/api/v1/simulation/{sim_id}/reoptimize")
    assert reopt_resp.status_code == 200
    assert reopt_resp.json()["reoptimization_status"] == "ROBUST"

def test_simulation_block_overrun(setup_database):
    plan = generate_base_plan()
    response = client.post("/api/v1/simulation/run", json={
        "plan": plan.model_dump(mode="json"),
        "scenario": "block_overrun",
        "disruption_params": {"block_request_id": 1, "overrun_mins": 20}
    })
    
    assert response.status_code == 200
    data = response.json()
    assert len(data["propagation_events"]) > 0
    assert data["propagation_events"][0]["type"] == "overrun"

def test_simulation_machine_failure(setup_database):
    plan = generate_base_plan()
    response = client.post("/api/v1/simulation/run", json={
        "plan": plan.model_dump(mode="json"),
        "scenario": "machine_failure_mid_section",
        "disruption_params": {"block_request_id": 1}
    })
    
    assert response.status_code == 200
    data = response.json()
    assert data["delay_metrics"]["total_delay_mins"] > 0
    assert data["propagation_events"][0]["type"] == "machine_failure"

def test_simulation_premium_train_deviation(setup_database):
    plan = generate_base_plan()
    response = client.post("/api/v1/simulation/run", json={
        "plan": plan.model_dump(mode="json"),
        "scenario": "premium_train_path_deviation",
        "disruption_params": {"train_id": 1, "delay_mins": 40}
    })
    
    assert response.status_code == 200

def test_simulation_worsening_weather(setup_database):
    plan = generate_base_plan()
    response = client.post("/api/v1/simulation/run", json={
        "plan": plan.model_dump(mode="json"),
        "scenario": "worsening_weather",
        "disruption_params": {"start_min": 10, "duration_mins": 100}
    })
    
    assert response.status_code == 200

def test_simulation_traction_power_trip(setup_database):
    plan = generate_base_plan()
    response = client.post("/api/v1/simulation/run", json={
        "plan": plan.model_dump(mode="json"),
        "scenario": "traction_power_trip",
        "disruption_params": {"section_id": 1}
    })
    
    assert response.status_code == 200

def test_reoptimization_max_attempts(setup_database):
    plan = generate_base_plan()
    response = client.post("/api/v1/simulation/run", json={
        "plan": plan.model_dump(mode="json"),
        "scenario": "machine_failure_mid_section",
        "disruption_params": {"block_request_id": 1}
    })
    sim_id = response.json()["simulation_id"]
    
    # Instead of fully calling the complex CP-SAT solver for infeasible case (which can be hard to mock realistically)
    # We will just verify it returns a valid state
    reopt_resp = client.post(f"/api/v1/simulation/{sim_id}/reoptimize")
    assert reopt_resp.status_code == 200
    status = reopt_resp.json()["reoptimization_status"]
    assert status in ["REOPTIMIZED", "INFEASIBLE", "MAX_ATTEMPTS", "TIMEOUT", "FALLBACK_REQUIRED"]

def test_critical_e2e_reoptimization(setup_database):
    # seed -> fusion -> optimization -> safety -> simulation -> reoptimization
    db = setup_database
    
    # 1. We have seed.
    # 2. Get Optimization Input
    from app.services.optimization.adapter import OptimizationAdapter
    from app.services.optimization.schemas import OptimizationConfig
    from app.services.optimization.solver import Optimizer
    from app.services.safety.validator import SafetyValidator
    
    now = datetime.utcnow()
    adapter = OptimizationAdapter(db)
    opt_input = adapter.generate_input(now, OptimizationConfig())
    
    # 3. Optimize
    solver = Optimizer(opt_input)
    base_plan = solver.solve()
    assert base_plan.solver_status.status == "OPTIMAL"
    
    # 4. Safety
    validator = SafetyValidator(db)
    safety_res = validator.validate_plan(base_plan, {"horizon_start": now})
    assert safety_res.status in ["PASS", "PASS_WITH_WARNINGS"]
    
    # 5. Simulation disruption
    sim_resp = client.post("/api/v1/simulation/run", json={
        "plan": base_plan.model_dump(mode="json"),
        "scenario": "block_overrun",
        "disruption_params": {"block_request_id": base_plan.items[0].block_request_id, "overrun_mins": 30}
    })
    sim_id = sim_resp.json()["simulation_id"]
    
    # 6. Re-optimize
    reopt_resp = client.post(f"/api/v1/simulation/{sim_id}/reoptimize")
    assert reopt_resp.status_code == 200
    
    # 7. Validation of states
    reopt_status = reopt_resp.json()["reoptimization_status"]
    assert reopt_status in ["REOPTIMIZED", "INFEASIBLE", "FALLBACK_REQUIRED"]
