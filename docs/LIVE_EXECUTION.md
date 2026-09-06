# Phase 7: Live Execution Scope

This document details the synthetic live execution engine developed in Phase 7.

## Scope
The execution engine is a deterministic, synthetic prototype that simulates the execution of an approved plan. It tracks the progress of block requests over time and generates telemetry logs. 
It does NOT connect to any real railway signalling, physical trains, or infrastructure. 

## Telemetry Model
Telemetry records are generated for each active block request. Fields include:
- `timestamp`: Current simulated time.
- `plan_id` / `plan_version`: Associated plan identifiers.
- `block_request_id`: The ID of the block.
- `progress_percent`: Estimated percentage completion.
- `elapsed_minutes`: Minutes elapsed since the block started.
- `expected_remaining_minutes`: Projected remaining time.
- `actual_status`: Current status (`SCHEDULED`, `ACTIVE`, `OVERRUN`, `FAILED`, `COMPLETED`).

## Disruption Detection
The `EventDetector` scans telemetry for deviations from the plan. Currently, it detects:
- **Block Overrun**: Triggered when a block exceeds its allocated time by more than 10 minutes.
- **Machine Failure**: Triggered when a track machine fails during operation.

These events are categorized by severity (`HIGH`, `CRITICAL`) and trigger the closed-loop re-optimization process.

## Plan Versioning
When a disruption necessitates re-optimization, a revised plan is generated and assigned a new version number (e.g., from `1.0` to `2.0`). The `previous_plan_id` links the new plan back to the original, maintaining a complete history.

## Calibration Logging
Upon completion or failure of a block, a `PredictionCalibration` record is saved. This logs the predicted versus actual duration, prediction error, and model version. This data forms the basis for future offline model training and improvement, though online retraining is explicitly out of scope for this prototype.

## Limitations
- Time advances conceptually via an API call (`/tick`), not via a real-time clock.
- Disruptions are injected manually for demonstration purposes.
- Machine and gang movements are simplified.
