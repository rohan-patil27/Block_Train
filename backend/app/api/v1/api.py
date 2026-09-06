from fastapi import APIRouter
from app.api.v1.endpoints import auth, health, topology, assets, trains, blocks, fusion, safety, simulation, explainability, plans, execution, demo, audit

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(health.router, prefix="/health", tags=["health"])
api_router.include_router(topology.router, prefix="/topology", tags=["topology"])
api_router.include_router(assets.router, prefix="/assets", tags=["assets"])
api_router.include_router(trains.router, prefix="/trains", tags=["trains"])
api_router.include_router(blocks.router, prefix="/blocks", tags=["blocks"])
api_router.include_router(fusion.router, tags=["fusion"])
api_router.include_router(safety.router, prefix="/safety", tags=["safety"])
api_router.include_router(simulation.router, prefix="/simulation", tags=["simulation"])
api_router.include_router(explainability.router, tags=["explainability"])
api_router.include_router(plans.router, prefix="/plans", tags=["plans"])
api_router.include_router(execution.router, prefix="/execution", tags=["execution"])
api_router.include_router(demo.router, prefix="/demo", tags=["demo"])
api_router.include_router(audit.router, prefix="/audit", tags=["audit"])
