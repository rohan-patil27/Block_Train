import os
import sys
import random
from datetime import datetime, timedelta

# Setup paths to import from backend
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../backend'))

from app.db.session import SessionLocal
from app.models.user import User, RoleEnum
from app.models.topology import RailwayNode, TrackSection, Loop, Platform, LevelCrossing
from app.models.asset import Department, Machine, MaintenanceAsset, Depot, Siding, MaintenanceGang
from app.models.operation import Train, MaintenanceRequest, TrainSchedule, Defect, TSR, TractionState
from app.core.security import get_password_hash

from app.schemas.sources import (
    BlockRequestSource, TrainAndCrewSource, MaintenanceSource,
    SignallingTractionSource, LogisticsResourceSource, WeatherSource,
    CostResourceLedgerSource, GoodsTrafficForecastSource
)
from app.services.ingestion import IngestionAdapter
from app.services.fusion import FusionEngine

def seed_data(db_session=None):
    db = db_session or SessionLocal()
    random.seed(42)  # Deterministic seed

    # Clear old data if needed (cascade delete in real world, but here we just append or rely on DB reset)

    print("Seeding Users...")
    users = [
        User(username="controller1", hashed_password=get_password_hash("pass"), role=RoleEnum.CONTROLLER),
        User(username="maintenance1", hashed_password=get_password_hash("pass"), role=RoleEnum.MAINTENANCE),
        User(username="divisional1", hashed_password=get_password_hash("pass"), role=RoleEnum.DIVISIONAL),
        User(username="management1", hashed_password=get_password_hash("pass"), role=RoleEnum.MANAGEMENT),
        User(username="crew1", hashed_password=get_password_hash("pass"), role=RoleEnum.CREW),
    ]
    # Handle unique constraint if already exists
    for u in users:
        if not db.query(User).filter_by(username=u.username).first():
            db.add(u)
    db.commit()

    print("Seeding Topology...")
    nodes = []
    for i in range(1, 21):
        node = RailwayNode(name=f"Station_{i}", geometry=f"SRID=4326;POINT({77.0 + i*0.1} 28.6)")
        db.add(node)
        nodes.append(node)
    db.commit()

    sections = []
    for i in range(len(nodes) - 1):
        section = TrackSection(
            from_node_id=nodes[i].id,
            to_node_id=nodes[i+1].id,
            length=10.0 + random.uniform(0, 5),
            gradient=random.uniform(-1, 1),
            curve_radius=random.uniform(500, 2000),
            max_speed=130.0,
            geometry=f"SRID=4326;LINESTRING({77.0 + (i+1)*0.1} 28.6, {77.0 + (i+2)*0.1} 28.6)"
        )
        db.add(section)
        sections.append(section)
    db.commit()
    
    for i in range(0, len(nodes), 2):
        loop = Loop(node_id=nodes[i].id, capacity=random.randint(1, 3), name=f"Loop_{nodes[i].name}")
        db.add(loop)
    
    # Add Platforms & LevelCrossings
    for i in range(5):
        platform = Platform(node_id=nodes[i].id, name=f"PF_1_{nodes[i].name}", length=500.0, has_canopy=True, geometry=f"SRID=4326;LINESTRING({77.0 + i*0.1} 28.6, {77.0 + i*0.1 + 0.01} 28.6)")
        db.add(platform)
        
        lx = LevelCrossing(track_section_id=sections[i].id, name=f"LC_{i}", is_manned=True, geometry=f"SRID=4326;POINT({77.0 + i*0.1 + 0.05} 28.6)")
        db.add(lx)
    db.commit()

    print("Seeding Assets & Departments...")
    deps = []
    for name in ["Civil", "Signal", "Electrical"]:
        d = db.query(Department).filter_by(name=name).first()
        if not d:
            d = Department(name=name)
            db.add(d)
        deps.append(d)
    db.commit()

    depots = []
    for i, dep in enumerate(deps):
        depot = Depot(node_id=nodes[i].id, name=f"Depot_{dep.name}", department_id=dep.id, geometry=f"SRID=4326;POINT({77.0} 28.6)")
        db.add(depot)
        depots.append(depot)
    
    siding = Siding(node_id=nodes[0].id, name="Siding_1", capacity=50, geometry="SRID=4326;LINESTRING(77.0 28.6, 77.1 28.6)")
    db.add(siding)
    
    db.commit()

    maintenance_assets = []
    for dep in deps:
        for j in range(3):
            asset = MaintenanceAsset(asset_type=f"Asset_{dep.name}_{j}", department_id=dep.id, geometry=f"SRID=4326;POINT({77.0 + j*0.2} 28.6)")
            db.add(asset)
            maintenance_assets.append(asset)
            machine = Machine(name=f"Machine_{dep.name}_{j}", department_id=dep.id)
            db.add(machine)
            gang = MaintenanceGang(department_id=dep.id, name=f"Gang_{dep.name}_{j}", depot_id=depots[0].id)
            db.add(gang)
    db.commit()

    print("Seeding Trains & Schedules...")
    trains = []
    for i in range(5):
        train = Train(train_number=f"TRN{1000+i}", train_type=random.choice(["Express", "Freight", "Passenger"]))
        if not db.query(Train).filter_by(train_number=train.train_number).first():
            db.add(train)
            trains.append(train)
    db.commit()

    # Maintenance Requests (including one overdue)
    assets = db.query(MaintenanceAsset).all()
    now = datetime.utcnow()
    req1 = MaintenanceRequest(
        department_id=assets[0].department_id,
        asset_id=assets[0].id,
        duration_mins=120,
        priority_score=90.0,
        status="pending",
        due_date=now - timedelta(days=35) # Overdue by 35 days
    )
    req2 = MaintenanceRequest(
        department_id=assets[1].department_id,
        asset_id=assets[1].id,
        duration_mins=60,
        priority_score=50.0,
        status="pending",
        due_date=now + timedelta(days=5) # Not overdue
    )
    db.add(req1)
    db.add(req2)
    db.commit()

    # === PHASE 1 INGESTION AND FUSION ===
    print("Generating Corrupted Ingestion Data...")
    adapter = IngestionAdapter(db)
    fusion = FusionEngine(db)

    # 1. RBPMS (Block Request)
    br = BlockRequestSource(
        source_record_id="BR-101",
        ingestion_timestamp=now,
        maintenance_request_id=req2.id,
        start_time=now + timedelta(days=1),
        end_time=now + timedelta(days=1, hours=2),
        status="requested"
    )
    r1 = adapter.ingest_block_request(br)
    fusion.process_record(r1)
    
    # 2. COA-FOIS (Train & Crew) - with DUPLICATE corruption
    t1 = TrainAndCrewSource(
        source_record_id="TC-202",
        ingestion_timestamp=now,
        train_number=trains[0].train_number,
        train_type=trains[0].train_type,
        current_node_id=nodes[0].id,
        arrival_time=now,
        departure_time=None,
        sequence=1
    )
    r2 = adapter.ingest_train_and_crew(t1)
    fusion.process_record(r2)
    
    # Duplicate payload
    r2_dup = adapter.ingest_train_and_crew(t1)
    fusion.process_record(r2_dup)

    # 3. TDMS (Maintenance) - with MISSING VALUE corruption
    m1 = MaintenanceSource(
        source_record_id="TDMS-303",
        ingestion_timestamp=now,
        asset_id=assets[2].id,
        department_id=deps[0].id,
        duration_mins=45,
        due_date=now + timedelta(days=10),
        priority_score=None, # Missing value
        status="scheduled"
    )
    r3 = adapter.ingest_maintenance(m1)
    fusion.process_record(r3)
    
    # Also ingest a TDMS record for the overdue maintenance to trigger the overdue check
    m2 = MaintenanceSource(
        source_record_id="TDMS-304",
        ingestion_timestamp=now,
        asset_id=req1.asset_id,
        department_id=req1.department_id,
        duration_mins=120,
        due_date=req1.due_date,
        priority_score=90.0,
        status="pending"
    )
    r3b = adapter.ingest_maintenance(m2)
    fusion.process_record(r3b)

    # 4. Signalling & Traction - with STALE corruption
    s1 = SignallingTractionSource(
        source_record_id="SIG-404",
        ingestion_timestamp=datetime(2020, 1, 1), # Stale
        track_section_id=sections[0].id,
        is_active=True,
        voltage=25.0,
        recorded_at=datetime(2020, 1, 1),
        tsr_speed_limit=None,
        tsr_start=None,
        tsr_end=None
    )
    r4 = adapter.ingest_signalling_traction(s1)
    fusion.process_record(r4)

    # 5. Logistics & Resource - with CONTRADICTION corruption
    l1_dict = {
        "source_record_id": "LOG-505",
        "ingestion_timestamp": now.isoformat(),
        "department_id": deps[0].id,
        "gang_name": "Gang_Civil_0",
        "depot_id": depots[0].id,
        "status": "Contradiction: available but also on_leave",
        "is_contradiction": True
    }
    # Hack to ingest directly to trigger contradiction logic easily
    r5 = adapter.ingest_record("Logistics", l1_dict)
    fusion.process_record(r5)

    # 6. Weather
    w1 = WeatherSource(
        source_record_id="WX-606",
        ingestion_timestamp=now,
        node_id=nodes[0].id,
        temperature=35.5,
        precipitation=0.0,
        visibility=10.0,
        recorded_at=now
    )
    r6 = adapter.ingest_weather(w1)
    fusion.process_record(r6)

    # 7. Cost/Resource Ledger
    c1 = CostResourceLedgerSource(
        source_record_id="CST-707",
        ingestion_timestamp=now,
        department_id=deps[0].id,
        asset_id=assets[0].id,
        cost_amount=50000.0,
        cost_type="repair",
        recorded_at=now
    )
    r7 = adapter.ingest_cost_resource_ledger(c1)
    fusion.process_record(r7)

    # 8. Goods Traffic Forecast
    g1 = GoodsTrafficForecastSource(
        source_record_id="GTF-808",
        ingestion_timestamp=now,
        train_number="TRN9999",
        tonnage=4000.0,
        commodity_type="Coal",
        forecast_date=now + timedelta(days=2)
    )
    r8 = adapter.ingest_goods_traffic_forecast(g1)
    fusion.process_record(r8)

    db.close()
    print("Seed and Ingestion complete.")

if __name__ == "__main__":
    seed_data()
