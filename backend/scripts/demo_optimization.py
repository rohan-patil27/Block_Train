import sys
import os
from datetime import datetime, timezone
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

from app.db.session import SessionLocal
from app.models.operation import Train, TrainSchedule, MaintenanceRequest, TractionState
from app.models.topology import TrackSection
from app.models.asset import MaintenanceGang, Department
from app.services.optimization.schemas import (
    OptimizationInput, OptimizationConfig, OptTrain, OptMaintenanceRequest, OptSection, OptGang
)
from app.services.optimization.solver import Optimizer

def run_demo():
    print("Loading Phase 1 data from database...")
    db = SessionLocal()
    
    # 1. Sections
    db_sections = db.query(TrackSection).all()
    sections = []
    section_map = {}
    
    for s in db_sections:
        ts = db.query(TractionState).filter(TractionState.track_section_id == s.id).first()
        t_state = "AVAILABLE"
        if ts and not ts.is_active:
            t_state = "FAILED"
            
        opt_sec = OptSection(section_id=s.id, capacity=100, traction_state=t_state)
        sections.append(opt_sec)
        section_map[s.id] = s

    # 2. Gangs
    db_gangs = db.query(MaintenanceGang).all()
    gangs = [OptGang(gang_id=g.id, department_id=g.department_id, available=True) for g in db_gangs]
    
    # 3. Trains
    db_schedules = db.query(TrainSchedule).limit(5).all()
    trains = []
    
    horizon_start = datetime.now(timezone.utc).replace(tzinfo=None)
    
    for sch in db_schedules:
        arr = sch.arrival_time or sch.departure_time
        dep = sch.departure_time or sch.arrival_time
        if arr and dep:
            start_min = int((arr - horizon_start).total_seconds() / 60)
            end_min = int((dep - horizon_start).total_seconds() / 60)
            section_id = sections[0].section_id if sections else 1
            trains.append(OptTrain(
                train_id=sch.train_id,
                train_type="express",
                scheduled_start=max(0, start_min),
                scheduled_end=max(0, end_min + 10),
                section_id=section_id,
                confidence="HIGH"
            ))

    if not trains:
        print("No trains found in DB. Injecting dummy train for demonstration...")
        section_id = sections[0].section_id if sections else 1
        trains.append(OptTrain(
            train_id=999,
            train_type="express",
            scheduled_start=30,
            scheduled_end=40,
            section_id=section_id,
            confidence="HIGH"
        ))

    # 4. Maintenance Requests
    db_maint = db.query(MaintenanceRequest).limit(5).all()
    maint_reqs = []
    for i, m in enumerate(db_maint):
        section_id = sections[0].section_id if sections else 1
        start_min = max(0, 10 * i)
        end_min = start_min + 120
        
        req = OptMaintenanceRequest(
            request_id=m.id,
            department_id=m.department_id,
            section_id=section_id,
            duration_mins=m.duration_mins or 45,
            priority_score=m.priority_score or 0.5,
            window_start=start_min,
            window_end=end_min,
            confidence="HIGH"
        )
        maint_reqs.append(req)

    print(f"Constructed input: {len(trains)} trains, {len(maint_reqs)} maintenance requests, {len(sections)} sections, {len(gangs)} gangs")
    
    config = OptimizationConfig(horizon_mins=480, max_time_in_seconds=10)
    data = OptimizationInput(
        horizon_start=horizon_start,
        config=config,
        trains=trains,
        maintenance_requests=maint_reqs,
        sections=sections,
        gangs=gangs
    )
    
    print("\nStarting CP-SAT Optimizer...")
    opt = Optimizer(data)
    plan = opt.solve()
    
    print("\n" + "="*50)
    print("OPTIMIZATION RESULTS")
    print("="*50)
    print(f"Solver Status       : {plan.solver_status.status}")
    print(f"Solve Time (s)      : {plan.solver_status.solve_time_seconds:.4f}")
    print(f"Objective Value     : {plan.solver_status.objective_value}")
    
    print(f"\n[ Maintenance Blocks Selected ({len(plan.items)}) ]")
    for item in plan.items:
        shadow = f"(Shadow Group: {item.shadow_group_id})" if item.is_shadow_block else ""
        print(f"  - Req ID: {item.block_request_id:2d} | Window: {item.scheduled_start.strftime('%H:%M')} to {item.scheduled_end.strftime('%H:%M')} {shadow}")
        
    print(f"\n[ Deferred/Rejected Requests ({len(plan.solver_status.deferred_requests)}) ]")
    for req_id in plan.solver_status.deferred_requests:
        print(f"  - Req ID: {req_id}")
        
    print(f"\n[ Shadow Block Groupings ({len(plan.solver_status.shadow_block_groups)}) ]")
    for group in plan.solver_status.shadow_block_groups:
        print(f"  - {group.group_id}: Requests {group.block_request_ids}")

    print("="*50)
    
if __name__ == "__main__":
    run_demo()
