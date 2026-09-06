import os
import sys
from logging.config import fileConfig

from sqlalchemy import engine_from_config
from sqlalchemy import pool

from alembic import context

# Add backend dir to python path
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

from app.core.config import settings
from app.models import Base

config = context.config
config.set_main_option("sqlalchemy.url", settings.SQLALCHEMY_DATABASE_URI)

if config.config_file_name is not None:
    fileConfig(config.config_file_name)

target_metadata = Base.metadata

def include_object(object, name, type_, reflected, compare_to):
    if type_ == "table" and name == "spatial_ref_sys":
        return False
    if type_ == "table" and getattr(object, "schema", None) in ("tiger", "topology"):
        return False
    # some tiger tables don't specify schema in reflected objects but have specific names
    if type_ == "table" and (name.startswith("tiger_") or name.startswith("loader_") or name.startswith("pagc_") or name.startswith("zip_") or name.startswith("place_") or name.startswith("county_") or name.startswith("state_") or name in ["edges", "faces", "addr", "addrfeat", "cousub", "featnames", "place", "state", "tabblock", "zcta5", "bg", "tabblock20", "geocode_settings", "geocode_settings_default", "direction_lookup", "secondary_unit_lookup", "street_type_lookup", "countysub_lookup", "county_lookup", "layer", "topology"]):
        return False
    return True

def run_migrations_offline() -> None:
    url = config.get_main_option("sqlalchemy.url")
    context.configure(
        url=url,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
        include_object=include_object,
    )

    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online() -> None:
    connectable = engine_from_config(
        config.get_section(config.config_ini_section, {}),
        prefix="sqlalchemy.",
        poolclass=pool.NullPool,
    )

    with connectable.connect() as connection:
        context.configure(
            connection=connection, target_metadata=target_metadata,
            include_object=include_object
        )

        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
