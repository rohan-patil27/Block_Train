from ortools.sat.python import cp_model
from app.services.optimization.schemas import OptimizationInput
from app.services.optimization.builder import OptimizationBuilder
from app.schemas.shared import Plan, PlanItem, SolverStatus, ShadowBlockGroup
from datetime import timedelta
import time

class Optimizer:
    def __init__(self, data: OptimizationInput):
        self.data = data
        
    def solve(self) -> Plan:
        start_time = time.time()
        
        # Attempt 1
        plan, status = self._run_attempt(attempt=1)
        
        if status == cp_model.INFEASIBLE:
            # Attempt 2: Relax soft constraints (allow max train delay up to horizon)
            plan, status = self._run_attempt(attempt=2)
            
        solve_time = time.time() - start_time
        
        if plan.solver_status:
            plan.solver_status.solve_time_seconds = solve_time
            
        return plan
        
    def _run_attempt(self, attempt: int) -> tuple[Plan, int]:
        print(f"--- Running attempt {attempt} ---")
        builder = OptimizationBuilder(self.data, attempt=attempt)
        model = builder.build()
        
        solver = cp_model.CpSolver()
        solver.parameters.max_time_in_seconds = self.data.config.max_time_in_seconds
        
        print("Calling solver.Solve(model)...")
        status = solver.Solve(model)
        print(f"Solve finished with status: {status}")
        
        solver_status = SolverStatus(
            status="UNKNOWN",
            solve_time_seconds=0.0,
            objective_value=0.0
        )
        
        if status == cp_model.OPTIMAL or status == cp_model.FEASIBLE:
            solver_status.status = "OPTIMAL" if status == cp_model.OPTIMAL else "FEASIBLE"
            solver_status.objective_value = solver.ObjectiveValue()
            
            # Extract Solution
            items = []
            deferred = []
            
            for m_id, v in builder.maint_vars.items():
                if solver.Value(v["active"]):
                    start_min = solver.Value(v["start"])
                    end_min = solver.Value(v["end"])
                    
                    scheduled_start = self.data.horizon_start + timedelta(minutes=start_min)
                    scheduled_end = self.data.horizon_start + timedelta(minutes=end_min)
                    
                    items.append(PlanItem(
                        block_request_id=m_id,
                        scheduled_start=scheduled_start,
                        scheduled_end=scheduled_end,
                        confidence_state=v["confidence"],
                        priority_score=v["priority"],
                        is_shadow_block=False,
                        shadow_group_id=None
                    ))
                else:
                    deferred.append(m_id)
                    
            # Extract Shadow Groups
            groups = []
            group_idx = 1
            for (r1, r2), s_var in builder.shadow_vars.items():
                if solver.Value(s_var):
                    # Found a shadow block
                    group_id = f"SBG-{group_idx}"
                    group_idx += 1
                    groups.append(ShadowBlockGroup(group_id=group_id, block_request_ids=[r1, r2]))
                    
                    # Update PlanItems
                    for item in items:
                        if item.block_request_id in [r1, r2]:
                            item.is_shadow_block = True
                            item.shadow_group_id = group_id
                            
            solver_status.deferred_requests = deferred
            solver_status.shadow_block_groups = groups
            
            return Plan(items=items, solver_status=solver_status), status
            
        elif status == cp_model.INFEASIBLE:
            solver_status.status = "INFEASIBLE"
            solver_status.diagnostics = {"attempt": attempt, "message": "Hard constraints violated."}
            return Plan(items=[], solver_status=solver_status), status
            
        else: # UNKNOWN usually means TIMEOUT before first solution
            solver_status.status = "TIMEOUT"
            solver_status.diagnostics = {"message": "Solver timed out before finding a feasible solution."}
            return Plan(items=[], solver_status=solver_status), status
