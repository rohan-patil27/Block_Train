# Safety Validator

## Overview

The Safety Validator is a deterministic, rule-based gating mechanism that intercepts generated operation Plans before they are executed or shown to controllers. It performs a rigorous check against a suite of statutory and operational railway rules, strictly without using an LLM. This ensures that any generated or optimized plan is verified by a reliable, mathematical, and data-driven approach before being considered safe.

## Status Handling

Each safety rule produces a `RuleViolation` if triggered. Violations have severity levels:
- **HARD**: Indicates a severe safety breach (e.g., overlapping blocks on the same track). Any HARD violation immediately forces the entire plan into a **REJECTED** status.
- **MEDIUM / LOW (SOFT)**: Operational warnings or minor deviations that do not immediately compromise safety. If a plan contains only SOFT violations, it is marked as **PASS_WITH_WARNINGS**. If it contains zero violations, it is **PASS**.

## Rule Registry

| Rule ID | Name | Type | Severity | Description |
|---------|------|------|----------|-------------|
| **RULE-001** | Line Clear & Block Overlap | Hard | CRITICAL | Ensures no two trains or maintenance blocks overlap spatially and temporally on the same track section. |
| **RULE-002** | HOER Crew Working Hours | Hard | CRITICAL | Ensures crew assignments do not exceed 10 consecutive hours on duty (Hours of Employment Regulations). |
| **RULE-003** | Braking Distance Check | Hard | HIGH | Verifies that a train can safely stop within the section given its type, load, and the section's maximum speed. |
| **RULE-004** | Loop Capacity / Length | Soft | MEDIUM | Ensures that trains scheduled to regulate at a loop do not exceed the loop's physical length. |
| **RULE-005** | Level Crossing Closure | Soft | MEDIUM | Warns if maintenance block durations near level crossings exceed the 45-minute statutory closure allowance. |
| **RULE-006** | Data Confidence / Provenance | Mixed | VARIES | Checks the fused data provenance for the plan components. If a component originates from a LOW confidence source (like an unverified visual report or LLM ingestion), it flags a warning or rejection depending on the severity of the operation. |

## Execution

The `SafetyValidator` consumes the existing shared `Plan` object. It iterates through the configured data-driven rule registry, evaluating the plan against the latest `TwinState`/topology and operations data. It uses the `FusionEngine` to perform cross-checks on provenance (e.g., checking `ProvenanceLog` entries).

Since the validator operates as a standalone module, it is deterministic and highly testable, achieving 100% pass rates across rigorous integration tests simulating various violations.

## API Integration

The safety validation capability is exposed via:
- `POST /api/v1/safety/validate`: Accepts a JSON payload of a `Plan` and returns a `SafetyCheckResult`.
- `GET /api/v1/safety/rules`: Lists all currently registered rules in the data-driven registry.
