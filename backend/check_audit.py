import sys
sys.path.insert(0, '/app')
from app.db.session import SessionLocal
from app.models.log import AuditLog

db = SessionLocal()
logs = db.query(AuditLog).order_by(AuditLog.id.desc()).limit(10).all()
print(f"Total audit logs: {db.query(AuditLog).count()}")
for l in logs:
    print(f"  action={l.action}, timestamp={l.timestamp}, user_id={getattr(l,'user_id','?')}")
db.close()
