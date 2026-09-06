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
from app.schemas.shared import Plan, PlanItem, SolverStatus
from app.services.safety.validator import SafetyValidator

@pytest.fixture(scope="module")
def setup_database():
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    seed.seed_data()
    db = SessionLocal()
    yield db
    db.close()

def test_safety_safe_plan(setup_database):
    db = setup_database
    validator = SafetyValidator(db)
    
    from app.models.operation import MaintenanceRequest
    req = db.query(MaintenanceRequest).filter_by(id=2).first()
    old_dur = req.duration_mins
    req.duration_mins = 40
    db.commit()
    
    # Create a perfectly safe plan
    now = datetime.utcnow()
    safe_plan = Plan(
        version="1.0",
        items=[
            PlanItem(
                block_request_id=2, # Using req2 (not req1 which might have LOW confidence injected)
                scheduled_start=now + timedelta(minutes=100),
                scheduled_end=now + timedelta(minutes=140) # 40 min duration exactly
            )
        ]
    )
    
    result = validator.validate_plan(safe_plan, context={"horizon_start": now})
    assert result.status == "PASS"
    assert result.is_safe is True
    assert len(result.violations) == 0
    
    req.duration_mins = old_dur
    db.commit()

def test_safety_line_clear_violation(setup_database):
    db = setup_database
    validator = SafetyValidator(db)
    now = datetime.utcnow()
    
    from app.models.operation import MaintenanceRequest
    req1 = db.query(MaintenanceRequest).filter_by(id=1).first()
    req2 = db.query(MaintenanceRequest).filter_by(id=2).first()
    old_asset = req2.asset_id
    req2.asset_id = req1.asset_id
    db.commit()
    
    # Overlap two items on the same asset (req1 and req2 now mapped to same asset)
    plan = Plan(
        version="1.0",
        items=[
            PlanItem(block_request_id=1, scheduled_start=now, scheduled_end=now + timedelta(minutes=60)),
            PlanItem(block_request_id=2, scheduled_start=now + timedelta(minutes=30), scheduled_end=now + timedelta(minutes=90))
        ]
    )
    
    result = validator.validate_plan(plan, context={"horizon_start": now})
    assert result.status == "REJECTED"
    assert result.is_safe is False
    assert any(v.rule_id == "RULE-001" for v in result.violations)
    
    req2.asset_id = old_asset
    db.commit()

def test_safety_hoer_crew_violation(setup_database):
    db = setup_database
    validator = SafetyValidator(db)
    now = datetime.utcnow()
    
    # Shift crew start back 10 hours so any departure > now is a violation
    # By shifting horizon_start 12 hours forward, shift_start becomes now + 4h, which max_shift_end is now + 14h, which might not violate.
    # We want max_shift_end to be in the past relative to a train departure.
    # Train departures are scheduled around `now + 40 mins` from seed.py.
    # If horizon_start = now - 3 hours. shift_start = now - 11 hours. max_shift_end = now - 1 hour.
    # Then all train departures (now + 40 mins) will be > max_shift_end.
    
    plan = Plan(version="1.0", items=[])
    result = validator.validate_plan(plan, context={"horizon_start": now - timedelta(hours=3)})
    
    assert result.status == "REJECTED"
    assert any(v.rule_id == "RULE-002" for v in result.violations)

def test_safety_braking_distance_violation(setup_database):
    db = setup_database
    validator = SafetyValidator(db)
    now = datetime.utcnow()
    
    # Change track section speed to 300km/h to force braking distance > 2000m
    from app.models.topology import TrackSection
    for section in db.query(TrackSection).all():
        section.max_speed = 300
    db.commit()
    
    plan = Plan(version="1.0", items=[])
    result = validator.validate_plan(plan, context={"horizon_start": now})
    
    assert result.status == "REJECTED"
    assert any(v.rule_id == "RULE-003" for v in result.violations)
    
    # Restore
    for section in db.query(TrackSection).all():
        section.max_speed = 100
    db.commit()

def test_safety_loop_length_violation(setup_database):
    db = setup_database
    validator = SafetyValidator(db)
    now = datetime.utcnow()
    
    from app.models.topology import Loop
    for loop in db.query(Loop).all():
        loop.capacity = 1 # capacity * 100 = 100m. Train length for Freight is 150m.
    db.commit()
    
    plan = Plan(version="1.0", items=[])
    result = validator.validate_plan(plan, context={"horizon_start": now})
    
    # Loop length is SOFT
    # Might have other hard violations if we didn't restore context properly, but let's just check the rule triggered
    assert any(v.rule_id == "RULE-004" for v in result.violations)
    
    # Restore
    for loop in db.query(Loop).all():
        loop.capacity = 100
    db.commit()

def test_safety_level_crossing_violation(setup_database):
    db = setup_database
    validator = SafetyValidator(db)
    now = datetime.utcnow()
    
    # Maint req 1 has duration 60 mins > 45 mins. 
    # If LevelCrossing exists, this will trigger.
    plan = Plan(
        version="1.0",
        items=[
            PlanItem(block_request_id=1, scheduled_start=now, scheduled_end=now + timedelta(minutes=60))
        ]
    )
    result = validator.validate_plan(plan, context={"horizon_start": now})
    
    assert any(v.rule_id == "RULE-005" for v in result.violations)

def test_safety_low_confidence_violation(setup_database):
    db = setup_database
    validator = SafetyValidator(db)
    now = datetime.utcnow()
    
    # req 1 is mocked to have LOW confidence in the checker.
    plan = Plan(
        version="1.0",
        items=[
            PlanItem(block_request_id=1, scheduled_start=now, scheduled_end=now + timedelta(minutes=60))
        ]
    )
    result = validator.validate_plan(plan, context={"horizon_start": now})
    
    assert any(v.rule_id == "RULE-006" for v in result.violations)

def test_safety_multiple_simultaneous_violations(setup_database):
    db = setup_database
    validator = SafetyValidator(db)
    now = datetime.utcnow()
    
    from app.models.topology import TrackSection, Loop
    for section in db.query(TrackSection).all():
        section.max_speed = 300
    for loop in db.query(Loop).all():
        loop.capacity = 1
    db.commit()
    
    from app.models.operation import MaintenanceRequest
    req1 = db.query(MaintenanceRequest).filter_by(id=1).first()
    req2 = db.query(MaintenanceRequest).filter_by(id=2).first()
    old_asset = req2.asset_id
    req2.asset_id = req1.asset_id
    db.commit()
    
    plan = Plan(
        version="1.0",
        items=[
            PlanItem(block_request_id=1, scheduled_start=now, scheduled_end=now + timedelta(minutes=60)),
            PlanItem(block_request_id=2, scheduled_start=now, scheduled_end=now + timedelta(minutes=60))
        ]
    )
    
    # Horizon shifted back 3 hours to trigger HOER
    result = validator.validate_plan(plan, context={"horizon_start": now - timedelta(hours=3)})
    
    # Check all are present
    rule_ids = [v.rule_id for v in result.violations]
    assert "RULE-001" in rule_ids # overlap
    assert "RULE-002" in rule_ids # HOER
    assert "RULE-003" in rule_ids # Braking
    assert "RULE-004" in rule_ids # Loop
    assert "RULE-005" in rule_ids # LC
    assert "RULE-006" in rule_ids # LOW Conf
    
    assert result.status == "REJECTED"
    
    for section in db.query(TrackSection).all():
        section.max_speed = 100
    for loop in db.query(Loop).all():
        loop.capacity = 100
    req2.asset_id = old_asset
    db.commit()

