from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import datetime, timezone

from app.db.session import get_db
from app.core.dependencies import get_current_user
from app.models.user import User
from app.schemas.shared import Plan
from app.services.simulation.schemas import SimulationResult, SimulationRequest
from app.services.simulation.engine import SimulationEngine
from app.services.simulation.reoptimizer import BoundedReoptimizer
from app.services.optimization.adapter import OptimizationAdapter
from app.services.optimization.schemas import OptimizationConfig

router = APIRouter()

# In-memory store for simulation results in this prototype
_simulations = {}

@router.post("/run", response_model=SimulationResult)
def run_simulation(
    request: SimulationRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    if request.scenario not in ["block_overrun", "machine_failure_mid_section", "premium_train_path_deviation", "worsening_weather", "traction_power_trip"]:
        raise HTTPException(status_code=400, detail="Invalid scenario")
        
    adapter = OptimizationAdapter(db)
    now = datetime.utcnow()
    config = OptimizationConfig()
    opt_input = adapter.generate_input(now, config)
    
    engine = SimulationEngine(opt_input, request.plan, request.scenario, request.disruption_params)
    result = engine.run()
    
    _simulations[result.simulation_id] = result
    return result

@router.get("/{simulation_id}", response_model=SimulationResult)
def get_simulation(
    simulation_id: str,
    current_user: User = Depends(get_current_user)
):
    if simulation_id not in _simulations:
        raise HTTPException(status_code=404, detail="Simulation not found")
    return _simulations[simulation_id]

@router.post("/{simulation_id}/reoptimize", response_model=SimulationResult)
def reoptimize_simulation(
    simulation_id: str,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    if simulation_id not in _simulations:
        raise HTTPException(status_code=404, detail="Simulation not found")
        
    sim_result = _simulations[simulation_id]
    reoptimizer = BoundedReoptimizer(db)
    updated_result = reoptimizer.maybe_reoptimize(sim_result)
    
    _simulations[simulation_id] = updated_result
    return updated_result
