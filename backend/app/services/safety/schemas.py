from pydantic import BaseModel
from typing import List, Optional, Any, Dict
from datetime import datetime

class SafetyRule(BaseModel):
    rule_id: str
    name: str
    description: str
    source_reference: str
    prototype_scope: str
    severity: str  # e.g. HIGH, MEDIUM, LOW
    hard_or_soft: str  # HARD or SOFT
    checker_reference: str
    enabled: bool = True
    version: str = "1.0"

from app.schemas.shared import RuleViolation, SafetyCheckResult
