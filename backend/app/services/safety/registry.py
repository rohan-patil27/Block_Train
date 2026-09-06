from typing import List
from app.services.safety.schemas import SafetyRule

RULE_REGISTRY: List[SafetyRule] = [
    SafetyRule(
        rule_id="RULE-001",
        name="Line-Clear / Block Logic",
        description="Ensures no two trains or maintenance blocks overlap unsafely on the same track section.",
        source_reference="G&SR Absolute Block System",
        prototype_scope="Prototype: checks simplistic time/space overlap",
        severity="HIGH",
        hard_or_soft="HARD",
        checker_reference="check_line_clear"
    ),
    SafetyRule(
        rule_id="RULE-002",
        name="HOER Crew Working-Hour Constraint",
        description="Ensures crew shift does not exceed statutory limits (10 hours for prototype).",
        source_reference="HOER Rules 2005",
        prototype_scope="Prototype: checks against synthetic crew shift start time.",
        severity="HIGH",
        hard_or_soft="HARD",
        checker_reference="check_hoer_crew_hours"
    ),
    SafetyRule(
        rule_id="RULE-003",
        name="Braking Distance vs Permitted Speed",
        description="Ensures train braking distance does not exceed available signaling overlap.",
        source_reference="IR Signal Manual / RDSO",
        prototype_scope="Prototype: Synthetic check based on train type and section max speed.",
        severity="HIGH",
        hard_or_soft="HARD",
        checker_reference="check_braking_distance"
    ),
    SafetyRule(
        rule_id="RULE-004",
        name="Loop/Berthing Length",
        description="Ensures loop capacity is sufficient for train length if berthing is planned.",
        source_reference="G&SR Station Working Rules",
        prototype_scope="Prototype: checks loop capacity against synthetic train length.",
        severity="MEDIUM",
        hard_or_soft="SOFT",
        checker_reference="check_loop_length"
    ),
    SafetyRule(
        rule_id="RULE-005",
        name="Level-Crossing Gate Allowance",
        description="Ensures maintenance near LC does not block road traffic excessively.",
        source_reference="IR P-Way Manual",
        prototype_scope="Prototype: Warns if maintenance duration > 45 mins near manned LC.",
        severity="MEDIUM",
        hard_or_soft="SOFT",
        checker_reference="check_level_crossing"
    ),
    SafetyRule(
        rule_id="RULE-006",
        name="Low-Confidence Data Guard",
        description="Flags plan items that rely on LOW confidence data from the fusion engine.",
        source_reference="Digital Twin Framework Safety Policy",
        prototype_scope="Prototype: Warns if maintenance block uses LOW confidence inputs.",
        severity="MEDIUM",
        hard_or_soft="SOFT",
        checker_reference="check_low_confidence"
    )
]

def get_registry() -> List[SafetyRule]:
    return [r for r in RULE_REGISTRY if r.enabled]
