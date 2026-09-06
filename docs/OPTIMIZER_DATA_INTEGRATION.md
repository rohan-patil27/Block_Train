# Phase 2 Step 3: Optimizer Data Integration Mapping

This document describes how the Phase 1 fused records map deterministically into the optimizer's `OptimizationInput` structures.

## 1. Track Sections and Topology

**Source Database Models:** `TrackSection`, `TractionState`
**Destination Schema:** `OptSection`

| Database Field | Optimization Input | Transformation / Notes |
| :--- | :--- | :--- |
| `TrackSection.id` | `section_id` | Direct 1:1 mapping |
| Default `100` | `capacity` | Constant for prototype |
| `TractionState.is_active` | `traction_state` | If `False`, mapped to `FAILED`, else `AVAILABLE` |

## 2. Maintenance Resources / Gangs

**Source Database Models:** `MaintenanceGang`
**Destination Schema:** `OptGang`

| Database Field | Optimization Input | Transformation / Notes |
| :--- | :--- | :--- |
| `MaintenanceGang.id` | `gang_id` | Direct 1:1 mapping |
| `MaintenanceGang.department_id`| `department_id` | Direct 1:1 mapping |
| `FusionIssue(Logistics)` | `available` | Evaluates Phase 1 fusion contradiction issues. If contradiction found, marks `False` |

## 3. Train Operations

**Source Database Models:** `TrainSchedule`, `Train`
**Destination Schema:** `OptTrain`

| Database Field | Optimization Input | Transformation / Notes |
| :--- | :--- | :--- |
| `TrainSchedule.train_id` | `train_id` | Direct 1:1 mapping |
| `Train.train_type` | `train_type` | Express, Freight, etc. |
| `TrainSchedule.arrival_time` / `departure_time` | `scheduled_start`, `scheduled_end` | Normalized to minutes relative to the `horizon_start` |
| `TrainSchedule.node_id` | `section_id` | Node mapped to corresponding section |
| `ProvenanceLog` | `confidence` | `HIGH` default, unless flagged in fusion |

## 4. Maintenance Requests

**Source Database Models:** `MaintenanceRequest`
**Destination Schema:** `OptMaintenanceRequest`

| Database Field | Optimization Input | Transformation / Notes |
| :--- | :--- | :--- |
| `MaintenanceRequest.id` | `request_id` | Direct 1:1 mapping |
| `MaintenanceRequest.department_id` | `department_id` | Direct 1:1 mapping |
| `MaintenanceRequest.asset_id` | `section_id` | Spatial lookup / approximation for section |
| `MaintenanceRequest.duration_mins`| `duration_mins` | Direct 1:1 mapping |
| `MaintenanceRequest.priority_score`| `priority_score` | Derived from Phase 1 calculation (e.g. 90.0) |
| `ProvenanceLog(TDMS)` | `confidence` | Set to `LOW` if Phase 1 replaced a missing priority score, else `HIGH` |
| Generated dynamically | `window_start`, `window_end`| Bounded to prototype defaults (e.g., [0, horizon_mins]) |
