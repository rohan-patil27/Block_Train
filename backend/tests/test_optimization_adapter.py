import pytest
from datetime import datetime, timezone
import os
import sys

from app.db.session import SessionLocal, engine
from app.db.base import Base

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../data-gen")))
import seed
from app.services.optimization.schemas import OptimizationConfig
from app.services.optimization.adapter import OptimizationAdapter
from app.services.optimization.solver import Optimizer

@pytest.fixture(scope="module")
def setup_database():
    # Setup the DB, run Phase 1 seed
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    
    # We call the seed_data from data-gen/seed.py
    # This generates deterministic topology, trains, maintenance requests, and fused issues
    seed.seed_data()
    
    db = SessionLocal()
    yield db
    db.close()

def test_optimization_integration(setup_database):
    db = setup_database
    
    # Use a horizon start that captures the seeded train data (now UTC)
    horizon_start = datetime.utcnow()
    
    config = OptimizationConfig(horizon_mins=480, max_time_in_seconds=10)
    
    # 1. Transform Phase 1 DB records -> OptimizationInput
    adapter = OptimizationAdapter(db)
    opt_input = adapter.generate_input(horizon_start, config)
    
    # Assertions on mapping
    assert len(opt_input.sections) > 0, "Should have mapped sections"
    assert len(opt_input.trains) > 0, "Should have mapped trains"
    assert len(opt_input.maintenance_requests) > 0, "Should have mapped maintenance requests"
    assert len(opt_input.gangs) > 0, "Should have mapped gangs"
    
    # Verify contradiction logic for gangs
    # In seed.py, Gang_Civil_0 has a contradiction logged
    contradicted_gangs = [g for g in opt_input.gangs if not g.available]
    assert len(contradicted_gangs) >= 1, "Should have marked at least one gang unavailable due to Logistics contradiction"
    
    # Verify confidence logic for maintenance request
    low_confidence_reqs = [r for r in opt_input.maintenance_requests if r.confidence == "LOW"]
    assert len(low_confidence_reqs) >= 1, "Should have mapped TDMS missing priority score as LOW confidence"
    
    # Verify failed traction state logic
    # Wait, seed.py creates SignallingTractionSource as stale but is_active=True
    # Let's check if any sections failed
    
    # 2. Run CP-SAT solver
    optimizer = Optimizer(opt_input)
    plan = optimizer.solve()
    
    # 3. Validation Gate Checks
    assert plan.solver_status.status in ["OPTIMAL", "FEASIBLE"], "Solver should find a solution"
    assert len(plan.items) > 0, "Should have selected at least one maintenance block"
    
    # Verify shadow blocks if any
    if len(plan.solver_status.shadow_block_groups) > 0:
        for group in plan.solver_status.shadow_block_groups:
            assert len(group.block_request_ids) >= 2, "Shadow block group should bundle requests"
