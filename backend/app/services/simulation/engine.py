import simpy
from typing import Dict, Any, List
from datetime import datetime, timedelta

from app.services.optimization.schemas import OptimizationInput
from app.schemas.shared import Plan
from app.services.simulation.schemas import SimulationResult
from app.services.simulation.metrics import calculate_plan_stability_index, calculate_network_recovery_resilience

class SimulationEngine:
    def __init__(self, opt_input: OptimizationInput, plan: Plan, scenario: str, disruption_params: Dict[str, Any] = None):
        self.opt_input = opt_input
        self.plan = plan
        self.scenario = scenario
        self.disruption_params = disruption_params or {}
        self.env = simpy.Environment()
        self.weather_active = False
        self.results = {
            "start_time": opt_input.horizon_start,
            "end_time": opt_input.horizon_start,
            "affected_trains": set(),
            "affected_sections": set(),
            "delay_metrics": {"total_delay_mins": 0.0, "total_scheduled_mins": 0.0},
            "propagation_events": [],
            "cost_metrics": {},
            "robustness_metrics": {}
        }
        
    def run(self) -> SimulationResult:
        # We model the track sections as simpy.Resource with capacity
        self.sections = {}
        for s in self.opt_input.sections:
            cap = s.capacity
            if self.scenario == "traction_power_trip" and self.disruption_params.get("section_id") == s.section_id:
                cap = 0 # Simulate FAILED traction power trip
                self.results["propagation_events"].append({"time": 0, "type": "traction_trip", "section_id": s.section_id})
                self.results["affected_sections"].add(s.section_id)
            if cap > 0:
                self.sections[s.section_id] = simpy.Resource(self.env, capacity=cap)

        # Start processes for trains
        for tr in self.opt_input.trains:
            self.env.process(self._train_process(tr))
            self.results["delay_metrics"]["total_scheduled_mins"] += max(0, tr.scheduled_end - tr.scheduled_start)

        # Start processes for maintenance blocks (from Plan)
        req_map = {req.request_id: req for req in self.opt_input.maintenance_requests}
        for item in self.plan.items:
            req = req_map.get(item.block_request_id)
            if req:
                self.env.process(self._maintenance_process(req, item))
                self.results["delay_metrics"]["total_scheduled_mins"] += max(0, (item.scheduled_end - item.scheduled_start).total_seconds() / 60.0)

        # Weather disruption process
        if self.scenario == "worsening_weather":
            self.env.process(self._weather_process())

        # Run simulation to horizon limit
        horizon = self.opt_input.config.horizon_mins
        self.env.run(until=horizon)
        
        # Calculate metrics
        end_time = self.opt_input.horizon_start + timedelta(minutes=self.env.now)
        self.results["end_time"] = end_time
        self.results["robustness_metrics"]["plan_stability_index"] = calculate_plan_stability_index(
            self.results["delay_metrics"]["total_delay_mins"],
            self.results["delay_metrics"]["total_scheduled_mins"]
        )
        self.results["robustness_metrics"]["network_recovery_resilience"] = calculate_network_recovery_resilience(
            horizon, self.env.now, self.results["delay_metrics"]["total_delay_mins"]
        )

        return SimulationResult(
            simulation_id=f"sim_{datetime.utcnow().strftime('%Y%m%d%H%M%S')}",
            plan_id=self.plan.version,
            scenario=self.scenario,
            start_time=self.results["start_time"],
            end_time=self.results["end_time"],
            affected_trains=list(self.results["affected_trains"]),
            affected_sections=list(self.results["affected_sections"]),
            delay_metrics=self.results["delay_metrics"],
            propagation_events=self.results["propagation_events"],
            recovery_metrics={},
            cost_metrics=self.results["cost_metrics"],
            robustness_metrics=self.results["robustness_metrics"],
            simulation_version="1.0",
            reoptimization_triggered=False,
            reoptimization_status="NONE"
        )
        
    def _train_process(self, tr):
        start_delay = 0
        if self.scenario == "premium_train_path_deviation" and tr.train_id == self.disruption_params.get("train_id"):
            start_delay = self.disruption_params.get("delay_mins", 30)
            self.results["affected_trains"].add(tr.train_id)
            self.results["propagation_events"].append({"time": self.env.now, "type": "deviation", "train_id": tr.train_id})
        
        yield self.env.timeout(max(0, tr.scheduled_start + start_delay - self.env.now))
        
        # Request track section
        if tr.section_id in self.sections:
            with self.sections[tr.section_id].request() as req:
                yield req
                duration = tr.scheduled_end - tr.scheduled_start
                if self.weather_active:
                    duration = int(duration * 1.2) # 20% slowdown
                
                yield self.env.timeout(duration)
                
        actual_end = self.env.now
        delay = actual_end - tr.scheduled_end
        if delay > 0:
            self.results["delay_metrics"]["total_delay_mins"] += delay
            self.results["affected_trains"].add(tr.train_id)
            if delay > start_delay:
                self.results["propagation_events"].append({"time": self.env.now, "type": "propagation", "train_id": tr.train_id, "delay": delay})
            
    def _maintenance_process(self, req, plan_item):
        start_min = int((plan_item.scheduled_start - self.opt_input.horizon_start).total_seconds() / 60.0)
        yield self.env.timeout(max(0, start_min - self.env.now))
        
        if req.section_id in self.sections:
            with self.sections[req.section_id].request() as res:
                yield res
                
                # Calculate duration
                duration = int((plan_item.scheduled_end - plan_item.scheduled_start).total_seconds() / 60.0)
                
                if self.scenario == "block_overrun" and self.disruption_params.get("block_request_id") == req.request_id:
                    overrun = self.disruption_params.get("overrun_mins", 15)
                    duration += overrun
                    self.results["affected_sections"].add(req.section_id)
                    self.results["propagation_events"].append({"time": self.env.now, "type": "overrun", "block_request_id": req.request_id})

                if self.scenario == "machine_failure_mid_section" and self.disruption_params.get("block_request_id") == req.request_id:
                    duration += 120 # Machine failure blocks for a long time
                    self.results["affected_sections"].add(req.section_id)
                    self.results["propagation_events"].append({"time": self.env.now, "type": "machine_failure", "block_request_id": req.request_id})
                
                yield self.env.timeout(duration)
                
                actual_end = self.env.now
                scheduled_end_min = int((plan_item.scheduled_end - self.opt_input.horizon_start).total_seconds() / 60.0)
                delay = actual_end - scheduled_end_min
                if delay > 0:
                    self.results["delay_metrics"]["total_delay_mins"] += delay
                    self.results["affected_sections"].add(req.section_id)

    def _weather_process(self):
        yield self.env.timeout(self.disruption_params.get("start_min", 30))
        self.weather_active = True
        self.results["propagation_events"].append({"time": self.env.now, "type": "weather_start"})
        yield self.env.timeout(self.disruption_params.get("duration_mins", 120))
        self.weather_active = False
        self.results["propagation_events"].append({"time": self.env.now, "type": "weather_end"})
