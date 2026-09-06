from typing import List, Dict, Any
from datetime import datetime, timedelta
import uuid

from app.services.optimization.schemas import OptimizationInput
from app.schemas.shared import Plan, PlanItem, SolverStatus, ShadowBlockGroup

class FallbackScheduler:
    def __init__(self, opt_input: OptimizationInput):
        self.opt_input = opt_input
        self.config = opt_input.config

    def generate_fallback_plan(self) -> Plan:
        # Sort maintenance requests by priority descending
        requests = sorted(
            self.opt_input.maintenance_requests,
            key=lambda req: req.priority_score,
            reverse=True
        )
        
        horizon_start = self.opt_input.horizon_start
        horizon_end = horizon_start + timedelta(minutes=self.config.horizon_mins)
        
        assigned_items = []
        deferred_requests = []
        shadow_groups = []
        
        # Track section availability to avoid overlaps
        section_occupancy: Dict[int, List[tuple[datetime, datetime]]] = {}
        
        group_id_counter = 1
        
        for req in requests:
            duration = timedelta(minutes=req.duration_mins)
            
            # Find earliest available window within horizon that doesn't overlap
            assigned = False
            
            # Simple heuristic: scan in 15 minute increments
            current_time = horizon_start
            while current_time + duration <= horizon_end:
                end_time = current_time + duration
                
                overlap = False
                for sec_id in [req.section_id]:
                    if sec_id in section_occupancy:
                        for occ_start, occ_end in section_occupancy[sec_id]:
                            if not (end_time <= occ_start or current_time >= occ_end):
                                overlap = True
                                break
                    if overlap:
                        break
                        
                if not overlap:
                    # Assign it here
                    item = PlanItem(
                        block_request_id=req.request_id,
                        scheduled_start=current_time,
                        scheduled_end=end_time,
                        priority_score=req.priority_score,
                    )
                    assigned_items.append(item)
                    
                    for sec_id in [req.section_id]:
                        if sec_id not in section_occupancy:
                            section_occupancy[sec_id] = []
                        section_occupancy[sec_id].append((current_time, end_time))
                    assigned = True
                    break
                    
                current_time += timedelta(minutes=15)
                
            if not assigned:
                deferred_requests.append(req.request_id)
                
        # Shadow block consolidation (simple greedy matching)
        # For prototype, we simply check if multiple requests share same section and time,
        # but our heuristic assigned them separately avoiding overlaps, so there are no overlaps.
        # To make shadow blocks, we can merge requests that have exactly same section.
        # But for this prototype, fallback simply avoids overlaps. 
        # (A more complex fallback could do consolidation, but we'll stick to a simple one as requested: "skip conflicting/unavailable requests")

        plan_id = str(uuid.uuid4())
        
        return Plan(
            id=plan_id,
            plan_id=plan_id,
            generated_at=datetime.utcnow(),
            version="1.0",
            items=assigned_items,
            solver_status=SolverStatus(
                status="FALLBACK",
                solve_time_seconds=0.0,
                objective_value=0.0,
                deferred_requests=deferred_requests,
                shadow_block_groups=shadow_groups
            )
        )
