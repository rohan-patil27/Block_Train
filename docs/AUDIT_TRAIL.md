# Audit Trail and Provenance

## Overview
Phase 5 introduces an immutable audit trail designed for statutory compliance and tracing plan provenance. It captures the entire lifecycle of a plan from its generation context to its final validation.

## Audit Logging System
The `AuditLogger` service captures operations locally into PostgreSQL (simulated/managed in current models).

### Recorded Metadata
Each audit record captures:
- `plan_id`: Unique identifier tying the record to a specific plan.
- `action_type`: E.g., `PLAN_GENERATED`, `SAFETY_VALIDATION`, `EXPLANATION_GENERATED`, `FALLBACK_TRIGGERED`.
- `timestamp`: UTC timestamp of the action.
- `actor`: System module or user initiating the action (e.g., `optimizer`, `fallback_scheduler`).
- `metadata`: JSON payload of the action's specific context (e.g., validation violations, objective components).

## Plan Manager
The `PlanManager` service handles the lifecycle of plans:
- **Retrieval**: Fetches historical plans by `plan_id`.
- **Last Known Good Plan**: Recovers the most recent plan that successfully passed safety validation without hard violations, useful when the current optimizer yields an infeasible state or fallback fails safety rules.
- **Integrity**: Ensures immutable plan state post-generation.

## Regulatory Compliance
By enforcing strict metadata tracking and preventing uncontrolled overrides, this system fulfills preliminary requirements for a safety-critical railway system statutory audit trail without external telemetry dependencies.
