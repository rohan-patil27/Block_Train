from ortools.sat.python import cp_model
from app.services.optimization.schemas import OptimizationInput
from typing import Dict, List, Tuple

class OptimizationBuilder:
    def __init__(self, data: OptimizationInput, attempt: int = 1):
        self.data = data
        self.attempt = attempt
        self.model = cp_model.CpModel()
        
        # Variables
        self.train_vars = {} # train_id -> dict of CP variables
        self.maint_vars = {} # request_id -> dict of CP variables
        self.gang_assign_vars = {} # (request_id, gang_id) -> bool var
        self.shadow_vars = {} # (req_1, req_2) -> bool var
        
        # Extracted sets for constraints
        self.trains_by_section = {}
        self.maint_by_section = {}
        for s in self.data.sections:
            self.trains_by_section[s.section_id] = []
            self.maint_by_section[s.section_id] = []

    def build_variables(self):
        horizon = self.data.config.horizon_mins
        
        # Trains
        for t in self.data.trains:
            # Transit time is fixed, but start can be delayed
            transit_time = max(1, t.scheduled_end - t.scheduled_start)
            
            # Apply low confidence risk buffer if necessary
            buffer = int(0.15 * transit_time) if t.confidence == "LOW" else 0
            transit_time += buffer
            
            # In Attempt 1, max delay is 60 minutes. In Attempt 2, max delay is horizon.
            max_delay = 60 if self.attempt == 1 else horizon
            max_start = min(horizon, t.scheduled_start + max_delay)
            # Prevent invalid domains if scheduled_start > horizon
            max_start = max(t.scheduled_start, max_start)
            
            start_var = self.model.NewIntVar(t.scheduled_start, max_start, f"train_start_{t.train_id}")
            end_var = self.model.NewIntVar(t.scheduled_start + transit_time, max_start + transit_time, f"train_end_{t.train_id}")
            interval_var = self.model.NewIntervalVar(start_var, transit_time, end_var, f"train_int_{t.train_id}")
            
            self.train_vars[t.train_id] = {
                "start": start_var,
                "end": end_var,
                "interval": interval_var,
                "transit_time": transit_time,
                "original_start": t.scheduled_start
            }
            self.trains_by_section.setdefault(t.section_id, []).append(t.train_id)

        # Maintenance
        for m in self.data.maintenance_requests:
            is_active = self.model.NewBoolVar(f"maint_active_{m.request_id}")
            
            # Window bounds
            safe_start = max(0, m.window_start)
            safe_end = min(horizon, m.window_end)
            
            # If window is impossible, fix active to 0
            if safe_end - safe_start < m.duration_mins:
                self.model.Add(is_active == 0)
                safe_end = max(safe_start, horizon) # Prevent domain crash

            duration = m.duration_mins
            # Risk penalty buffer
            if m.confidence == "LOW":
                duration += int(0.15 * duration)
                
            # We use NewOptionalIntervalVar
            start_var = self.model.NewIntVar(safe_start, safe_end, f"maint_start_{m.request_id}")
            end_var = self.model.NewIntVar(safe_start, safe_end + duration, f"maint_end_{m.request_id}")
            
            interval_var = self.model.NewOptionalIntervalVar(
                start_var, duration, end_var, is_active, f"maint_int_{m.request_id}"
            )
            
            self.maint_vars[m.request_id] = {
                "active": is_active,
                "start": start_var,
                "end": end_var,
                "interval": interval_var,
                "duration": duration,
                "priority": m.priority_score,
                "confidence": m.confidence
            }
            self.maint_by_section.setdefault(m.section_id, []).append(m.request_id)
            
            # Gang Assignment
            eligible_gangs = [g.gang_id for g in self.data.gangs if g.department_id == m.department_id and g.available]
            if not eligible_gangs:
                self.model.Add(is_active == 0)
            
            gang_vars_for_m = []
            for gid in eligible_gangs:
                g_var = self.model.NewBoolVar(f"assign_{m.request_id}_{gid}")
                self.gang_assign_vars[(m.request_id, gid)] = g_var
                gang_vars_for_m.append(g_var)
                
            # If active, exactly one gang is assigned
            self.model.Add(sum(gang_vars_for_m) == is_active)
            
    def build_constraints(self):
        # 1. NoOverlap on Sections (Train vs Train vs Maint)
        # Note: Shadow block means two maintenance requests can overlap. 
        # But trains cannot overlap with maintenance. 
        # Simplification for prototype: we don't enforce exact shadow block boolean vars inside NoOverlap.
        # Instead, we just put all of them into NoOverlap. BUT wait! The formulation says shadow blocks can overlap.
        # If we put them in NoOverlap, they can't overlap. 
        # To allow shadow blocks, we can use a Cumulative constraint where capacity=1 for trains, but maintenance only uses capacity if not shadowed?
        # Actually, standard way: 
        # For each section, we want NoOverlap on trains and maintenance.
        # But if m1 and m2 are compatible, they CAN overlap.
        # Let's model this: capacity = 2. Trains consume 2. Maintenance consumes 1 (if compatible).
        # But wait, then 2 maintenance could overlap. This works!
        # Let's just use capacity=2 for sections. Trains need 2 capacity, maintenance needs 1.
        # Wait, if maintenance needs 1, then THREE maintenance requests can't overlap, only 2.
        # Let's implement capacity = N (large), train takes N. Maint takes 1. This allows infinite compatible shadow blocks!
        # BUT trains can't overlap with ANY maintenance.
        # Yes! If capacity is N, train demands N. Maint demands 1.
        # Wait, if capacity is N, then N maint can overlap. But if a train comes, train demands N, total demand = N + 1 > N! So train cannot overlap with ANY maint.
        # This perfectly models "Trains cannot overlap with maintenance, but maintenance can overlap with maintenance".
        # Are there pairs of maint that CANNOT overlap? The prompt says:
        # "department and resource requirements are compatible (e.g. OHE and Track can safely co-occur)"
        # For this prototype, let's assume ALL maintenance requests on the same section can shadow block if they overlap. 
        
        for section in self.data.sections:
            if section.traction_state == "FAILED":
                # Section is dead. Trains and maint cannot be scheduled here.
                for t_id in self.trains_by_section[section.section_id]:
                    # Train MUST be delayed or dropped. Since trains can't drop, we force them to end of horizon
                    self.model.Add(self.train_vars[t_id]["start"] == self.data.config.horizon_mins)
                for m_id in self.maint_by_section[section.section_id]:
                    self.model.Add(self.maint_vars[m_id]["active"] == 0)
                continue
                
            intervals = []
            demands = []
            
            capacity = 100 # Large N
            
            # Trains demand 100.
            for t_id in self.trains_by_section[section.section_id]:
                intervals.append(self.train_vars[t_id]["interval"])
                # If traction is LIMITED, we could add penalty, but for now it's just a capacity check.
                demands.append(capacity)
                
            # Maint demands 1.
            for m_id in self.maint_by_section[section.section_id]:
                intervals.append(self.maint_vars[m_id]["interval"])
                demands.append(1)
                
            if intervals:
                self.model.AddCumulative(intervals, demands, capacity)

        # 2. Gang Resource Capacity (NoOverlap for gangs)
        gang_intervals = {}
        for m in self.data.maintenance_requests:
            for g in self.data.gangs:
                if (m.request_id, g.gang_id) in self.gang_assign_vars:
                    assign_var = self.gang_assign_vars[(m.request_id, g.gang_id)]
                    duration = self.maint_vars[m.request_id]["duration"]
                    m_start = self.maint_vars[m.request_id]["start"]
                    m_end = self.maint_vars[m.request_id]["end"]
                    
                    # Create dedicated start/end vars for this gang assignment to avoid CP-SAT crashes
                    g_start = self.model.NewIntVar(0, 10000, f"g_start_{m.request_id}_{g.gang_id}")
                    g_end = self.model.NewIntVar(0, 10000, f"g_end_{m.request_id}_{g.gang_id}")
                    
                    self.model.Add(g_start == m_start).OnlyEnforceIf(assign_var)
                    self.model.Add(g_end == m_end).OnlyEnforceIf(assign_var)
                    
                    # Create optional interval for this specific gang assignment
                    gang_int = self.model.NewOptionalIntervalVar(
                        g_start,
                        duration,
                        g_end,
                        assign_var,
                        f"gang_{g.gang_id}_maint_{m.request_id}"
                    )
                    gang_intervals.setdefault(g.gang_id, []).append(gang_int)
                    
        for g_id, intervals in gang_intervals.items():
            if len(intervals) > 1:
                self.model.AddNoOverlap(intervals)

        # 3. Shadow Block boolean definitions (for objective)
        # S_{r1, r2} = 1 iff r1 and r2 are active, on same section, and overlap
        for s in self.data.sections:
            m_list = self.maint_by_section[s.section_id]
            for i in range(len(m_list)):
                for j in range(i + 1, len(m_list)):
                    r1 = m_list[i]
                    r2 = m_list[j]
                    s_var = self.model.NewBoolVar(f"shadow_{r1}_{r2}")
                    self.shadow_vars[(r1, r2)] = s_var
                    
                    # Overlap logic: start1 < end2 and start2 < end1
                    # Since CP-SAT doesn't have an easy "overlaps" boolean constraint directly on optional intervals,
                    # we can constrain it:
                    overlap = self.model.NewBoolVar(f"overlap_{r1}_{r2}")
                    
                    start1 = self.maint_vars[r1]["start"]
                    end1 = self.maint_vars[r1]["end"]
                    start2 = self.maint_vars[r2]["start"]
                    end2 = self.maint_vars[r2]["end"]
                    
                    # start1 < end2
                    cond1 = self.model.NewBoolVar("")
                    self.model.Add(start1 < end2).OnlyEnforceIf(cond1)
                    self.model.Add(start1 >= end2).OnlyEnforceIf(cond1.Not())
                    
                    # start2 < end1
                    cond2 = self.model.NewBoolVar("")
                    self.model.Add(start2 < end1).OnlyEnforceIf(cond2)
                    self.model.Add(start2 >= end1).OnlyEnforceIf(cond2.Not())
                    # S_var is true iff active1, active2, and overlap
                    self.model.AddMinEquality(overlap, [cond1, cond2])
                    self.model.AddMinEquality(s_var, [self.maint_vars[r1]["active"], self.maint_vars[r2]["active"], overlap])


    def build_objective(self):
        # We want to Maximize: 
        # w_maint * (maint/max) + w_shadow * (shadow/max) - w_delay * (delay/max) - w_risk * (risk/max)
        
        # 1. Maintenance Fulfillment
        max_maint_score = 1 # avoid div by zero
        for m_id, v in self.maint_vars.items():
            max_maint_score += int(v["priority"] * 1000)
            
        # 2. Train Delay
        max_delay = 1
        for t_id, v in self.train_vars.items():
            max_delay += self.data.config.horizon_mins
            
        # 3. Shadow Blocks
        max_shadow = len(self.shadow_vars) if self.shadow_vars else 1
        
        # 4. Risk / Confidence Penalty
        max_risk = 1
        for m_id, v in self.maint_vars.items():
            if v["confidence"] == "LOW":
                max_risk += 1
                
        # Build Objective
        obj_terms = []
        
        # Maintenance
        w_maint = int(self.data.config.w_maintenance * 1000000)
        for m_id, v in self.maint_vars.items():
            weight = int(v["priority"] * 1000)
            coeff = (weight * w_maint) // max_maint_score
            obj_terms.append(v["active"] * coeff)
            
        # Delay
        w_delay = int(self.data.config.w_delay * 1000000)
        for t_id, v in self.train_vars.items():
            delay = v["start"] - v["original_start"]
            coeff = w_delay // max_delay
            obj_terms.append(delay * (-coeff))
            
        # Shadow
        w_shadow = int(self.data.config.w_shadow * 1000000)
        shadow_coeff = w_shadow // max_shadow
        for s_var in self.shadow_vars.values():
            obj_terms.append(s_var * shadow_coeff)
            
        # Risk
        w_risk = int(self.data.config.w_risk * 1000000)
        risk_coeff = w_risk // max_risk
        for m_id, v in self.maint_vars.items():
            if v["confidence"] == "LOW":
                obj_terms.append(v["active"] * (-risk_coeff))
                
        if obj_terms:
            self.model.Maximize(sum(obj_terms))
            
    def build(self):
        self.build_variables()
        self.build_constraints()
        self.build_objective()
        return self.model
