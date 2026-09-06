import pytest
from datetime import datetime, timedelta
import os
import sys

from app.db.session import SessionLocal, engine
from app.db.base import Base

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../data-gen")))
import seed
from app.services.optimization.schemas import OptimizationConfig
from app.services.optimization.adapter import OptimizationAdapter
from app.services.optimization.solver import Optimizer
from app.services.safety.validator import SafetyValidator
from app.schemas.shared import Plan, PlanItem, SolverStatus, ShadowBlockGroup
from app.services.explainability.fallback import FallbackScheduler
from app.services.explainability.generator import ExplanationGenerator
from app.services.explainability.audit import AuditLogger
from app.services.explainability.plan_manager import plan_store
from app.api.v1.endpoints.explainability import generate_fallback_plan
from fastapi.testclient import TestClient
from app.main import app

@pytest.fixture(scope="module")
def setup_database():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    seed.seed_data()
    db = SessionLocal()
    yield db
    db.close()

def test_fallback_activation_and_determinism(setup_database):
    db = setup_database
    config = OptimizationConfig(horizon_mins=120)
    adapter = OptimizationAdapter(db)
    opt_input = adapter.generate_input(datetime.now(), config)
    
    # Run fallback directly
    scheduler = FallbackScheduler(opt_input)
    fallback_plan = scheduler.generate_fallback_plan()
    
    assert fallback_plan.solver_status.status == "FALLBACK"
    assert len(fallback_plan.items) > 0
    
    # Ensure it's deterministic (running again gives exact same items)
    fallback_plan2 = scheduler.generate_fallback_plan()
    assert [item.block_request_id for item in fallback_plan.items] == [item.block_request_id for item in fallback_plan2.items]
    assert [item.scheduled_start for item in fallback_plan.items] == [item.scheduled_start for item in fallback_plan2.items]

def test_explanation_generated_for_real_plan(setup_database):
    db = setup_database
    config = OptimizationConfig(horizon_mins=120)
    adapter = OptimizationAdapter(db)
    opt_input = adapter.generate_input(datetime.now(), config)
    
    # Run solver
    solver = Optimizer(opt_input)
    plan = solver.solve()
    plan.id = "test-plan-id"
    plan.plan_id = "test-plan-id"
    assert plan.solver_status.status == "OPTIMAL"
    
    # Safety Validator
    validator = SafetyValidator(db)
    safety_result = validator.validate_plan(plan)
    
    # Explain
    generator = ExplanationGenerator(plan, opt_input, safety_result)
    explanation = generator.generate()
    
    assert explanation.plan_id == (plan.id or plan.plan_id)
    assert "minimizing total expected train delay" in explanation.root_cause
    assert "shared block" in explanation.synergy or "No maintenance requests were consolidated" in explanation.synergy
    
    # Must use actual plan data
    if getattr(plan.solver_status, 'shadow_block_groups', []):
        assert "maintenance requests were grouped" in explanation.synergy
        
    if getattr(plan.solver_status, 'objective_breakdown', {}):
        assert "delay penalty" in explanation.tradeoffs
    else:
        assert "Trade-off analysis is unavailable" in explanation.tradeoffs
    assert "Safety validation" in explanation.safety_summary

def test_audit_record_creation(setup_database):
    db = setup_database
    logger = AuditLogger(db)
    
    logger.log_action(
        action="PLAN_GENERATED",
        resource="Plan",
        plan_id="test-plan-1",
        plan_version="1.0",
        reason="Testing audit",
        result="SUCCESS",
        actor="test_user"
    )
    
    logs = logger.get_logs_for_plan("test-plan-1")
    assert len(logs) == 1
    assert logs[0].action == "PLAN_GENERATED"
    assert logs[0].actor == "test_user"

def test_plan_history_and_last_known_good():
    p1 = Plan(id="p1", items=[], solver_status=SolverStatus(status="OPTIMAL", solve_time_seconds=1.0, objective_value=100.0))
    p2 = Plan(id="p2", previous_plan_id="p1", items=[], solver_status=SolverStatus(status="OPTIMAL", solve_time_seconds=1.0, objective_value=90.0))
    
    plan_store.store_plan(p1, is_good=True)
    plan_store.store_plan(p2, is_good=False)
    
    history = plan_store.get_plan_history("p2")
    assert len(history) == 2
    assert history[0].id == "p1"
    assert history[1].id == "p2"
    
    lkg = plan_store.get_last_known_good_plan()
    assert lkg.id == "p1"

def test_api_endpoints(setup_database):
    db = setup_database
    
    def override_get_db():
        try:
            yield db
        finally:
            pass
            
    from app.db.session import get_db
    from app.core.dependencies import get_current_user
    
    app.dependency_overrides[get_db] = override_get_db
    
    def override_current_user():
        class MockUser:
            email = "admin@example.com"
            role = "controller"
        return MockUser()
    app.dependency_overrides[get_current_user] = override_current_user
    
    client = TestClient(app)
    
    # 1. Fallback Generation
    config = OptimizationConfig(horizon_mins=120)
    adapter = OptimizationAdapter(db)
    opt_input = adapter.generate_input(datetime.now(), config)
    
    response = client.post("/api/v1/fallback/generate", json=opt_input.model_dump(mode='json'))
    assert response.status_code == 200
    data = response.json()
    assert data["status"] in ["ACCEPTED", "REJECTED"]
    plan_id = data["plan_id"]
    
    # 2. Get Explanation
    response = client.get(f"/api/v1/explanations/{plan_id}")
    assert response.status_code == 200
    expl_data = response.json()
    assert expl_data["plan_id"] == plan_id
    
    # 3. Get Audit trail
    response = client.get(f"/api/v1/audit/{plan_id}")
    assert response.status_code == 200
    audit_data = response.json()
    assert len(audit_data) > 0
    assert audit_data[0]["action"] in ["FALLBACK_ACTIVATED", "PLAN_REJECTED"]
    
    app.dependency_overrides.pop(get_current_user, None)
    app.dependency_overrides.pop(get_db, None)
