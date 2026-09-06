from sqlalchemy import create_engine, event
from sqlalchemy.orm import sessionmaker
from app.core.config import settings
import sqlite3

# Determine connect args
connect_args = {}
if settings.SQLALCHEMY_DATABASE_URI.startswith("sqlite"):
    connect_args["check_same_thread"] = False

engine = create_engine(settings.SQLALCHEMY_DATABASE_URI, pool_pre_ping=True, connect_args=connect_args)

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
        dbapi_connection.create_function("ST_AsText", -1, dummy_func)
        dbapi_connection.create_function("ST_GeomFromText", -1, dummy_func)
        dbapi_connection.create_function("ST_GeomFromEWKT", -1, dummy_func)
        dbapi_connection.create_function("GeomFromEWKT", -1, dummy_func)
        dbapi_connection.create_function("AsEWKB", -1, dummy_func)
        dbapi_connection.create_function("AsGeoJSON", -1, dummy_func)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
