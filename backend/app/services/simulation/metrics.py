from typing import Dict, Any, List

def calculate_plan_stability_index(total_delay_mins: float, total_scheduled_mins: float) -> float:
    if total_scheduled_mins <= 0:
        return 1.0
    val = 1.0 - (total_delay_mins / total_scheduled_mins)
    return max(0.0, val)

def calculate_network_recovery_resilience(planned_end: float, actual_end: float, total_delay: float) -> float:
    if total_delay <= 0:
        return 1.0
    return (planned_end - actual_end) / total_delay

def calculate_cost_sensitivity_index(reoptimized_cost: float, original_cost: float, severity: float) -> float:
    if severity <= 0:
        return 0.0
    return (reoptimized_cost - original_cost) / severity
