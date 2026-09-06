import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '../backend'))
from app.db.session import SessionLocal
from sqlalchemy import text
db = SessionLocal()
tables = ['users', 'provenance_logs', 'fusion_issues', 'raw_ingestion_records', 'data_sources', 'train_schedules', 'defects', 'tsrs', 'traction_states', 'block_requests', 'maintenance_requests', 'trains', 'maintenance_gangs', 'machines', 'maintenance_assets', 'sidings', 'depots', 'departments', 'level_crossings', 'platforms', 'loops', 'track_sections', 'railway_nodes']
for t in tables:
    db.execute(text(f"TRUNCATE TABLE {t} CASCADE"))
db.commit()
db.close()
print("Truncated all tables.")
