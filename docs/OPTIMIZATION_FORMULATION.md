# Operations Research Optimization Formulation (Phase 2)

This document formalizes the constraint programming (CP-SAT) optimization model for the Gatidhara Digital Twin, balancing railway maintenance requests and train operations.

## 1. Planning Horizon
The solver operates on a rolling horizon of **8 hours** ($H = 480$ minutes) from the current simulation time.

## 2. Time Discretization
Time is discretized into **1-minute integers**. Continuous operations are modeled using integer interval variables representing discrete minutes $[0, 480]$.

## 3. Decision Variables
- $V_{t, s}$: Interval variable for train $t$ occupying track section $s$ $[start, end]$.
- $M_{r, s}$: Interval variable for maintenance block request $r$ on section $s$.
- $G_{r, g} \in \{0, 1\}$: Boolean variable indicating if maintenance gang/machine $g$ is assigned to request $r$.
- $S_{r_1, r_2} \in \{0, 1\}$: Boolean variable indicating if requests $r_1$ and $r_2$ are consolidated into a shadow block.
- $Active_{r} \in \{0, 1\}$: Boolean variable indicating if maintenance request $r$ is scheduled in this horizon.

## 4. Variable Domains
- Start and end bounds for interval variables: $\in [0, 480]$.
- Train duration on section: fixed to expected transit time (or bounded by $[transit\_time, transit\_time + delay]$).
- Maintenance duration: fixed to $r.duration\_mins$.

## 5. Hard Constraints
- **Section Occupancy (No Overlap)**: For any track section $s$, no two intervals in $\{V_{t, s} \cup M_{r, s}\}$ can overlap unless they are compatible shadow blocks.
- **Train Routing**: A train $t$ entering section $s_2$ from $s_1$ must satisfy $start(V_{t, s_2}) \ge end(V_{t, s_1})$.
- **Resource Capacity**: A maintenance gang $g$ can only be assigned to one active request $r$ at a time.
- **Location & Skill Feasibility**: A gang $g$ must belong to a department capable of fulfilling request $r$.
- **Asset Availability**: Unavailable or failed maintenance machines/gangs cannot be assigned.
- **Window Validity**: If $Active_{r} = 1$, $M_{r, s}$ must fall within the requested time window bounds.

## 6. Soft Constraints
- **Schedule Adherence**: Minimize deviation between scheduled train departure and actual $start(V_{t, s})$.
- **Maintenance Fulfillment**: Maximize the number of $Active_{r} = 1$, heavily weighted by Priority Score.
- **Shadow Block Preference**: Maximize $S_{r_1, r_2}$ (consolidating blocks to save total track downtime).

## 7. Priority Scoring
Priority scoring governs the maintenance fulfillment weight. Six factors are evaluated, each normalized to $[0,1]$ and scaled by configurable weights:
- Safety criticality
- Maintenance urgency / deferral risk
- Train class priority (if a train is delayed by this maintenance)
- Punctuality / inter-divisional impact
- Shadow-block opportunity
- Cost-weighted deferral

The formula is:
`FinalPriority = Sum(factor_score * factor_weight)`

The system exposes the `factor_score`, `factor_weight`, `weighted_contribution`, `final_priority_score`, and `scoring_version` in the Plan output.

## 8. Traction-State Physics Abstraction
This is a synthetic-data prototype. Detailed electrical traction physics are omitted. We use a simplified operational constraint model for traction states on track sections:
- `AVAILABLE`: Normal operation.
- `LIMITED`: Operational penalty applied (e.g., trains must traverse slower, increasing transit time).
- `FAILED`: Affected section is unavailable. Trains and maintenance requiring traction power cannot traverse unless an explicitly configured recovery condition exists.

## 9. Shadow-Block Logic
A shadow-block is an optimization decision, not a mandatory rule. $r_1$ and $r_2$ are eligible for consolidation ($S_{r_1, r_2}=1$) only when:
- They request the same or compatible track section.
- Their requested time windows overlap or are nearby.
- Their department and resource requirements are compatible (e.g., OHE and Track can safely co-occur).
- Consolidation causes no hard safety conflict.

## 10. Low-Confidence Data Treatment
Fused data with `LOW` confidence (e.g., uncertain train location from conflicting sources) does NOT automatically make a request infeasible. Instead:
- The request is preserved.
- A configurable uncertainty/risk penalty is applied (e.g., inflating safety buffers by 15%).
- The confidence state is explicitly exposed in the generated Plan so the later Safety Validator can impose stronger restrictions if needed.

## 11. Objective Functions & Weights
The global objective is to maximize $Z$:
$Z = \text{Norm}(Obj_{maint\_priority}) + \text{Norm}(Obj_{shadow}) - \text{Norm}(Obj_{delay}) - \text{Norm}(Obj_{dead\_mileage}) - \text{Norm}(Obj_{risk\_penalty})$

Each sub-objective is min-max normalized to $[0, 1000]$. Configurable weights apply to each normalized term (e.g., `w_maintenance`, `w_delay`, `w_shadow`, `w_dead_mileage`, `w_risk`).

## 12. Infeasibility Handling
Deterministic multi-attempt handling is employed:
1. **Attempt 1**: Normal optimization.
2. **Attempt 2**: If Attempt 1 fails, relax selected SOFT constraints only (e.g., allow infinite train delay, drop low-priority maintenance). **Hard constraints are NEVER relaxed.**
3. **Fallback**: If still infeasible after Attempt 2, the solver returns a structured `INFEASIBLE` result object containing diagnostic details (which constraints failed).

## 13. Solver Timeout
CP-SAT uses a configurable `max_time_in_seconds` timeout (e.g., 60 seconds).
- If the timeout occurs and a feasible solution was found, the solver returns the **best feasible solution** discovered so far.
- If no feasible solution was found before timeout, it returns a structured `TIMEOUT` status. 
- (Deterministic fallback logic is handled by external orchestration outside the solver.)

## 14. Sample Scenario & Expected Solution
**Context**: Track Section `SEC-1` over a 3-hour window ($T=0$ to $T=180$).
- `Train-1` (Express): Scheduled transit $T=60$ to $T=70$.
- `Req-A` (OHE Dept): Needs 40 mins. Priority: 0.9. Window: $T=0$ to $T=120$.
- `Req-B` (Track Dept): Needs 30 mins. Priority: 0.7. Window: $T=20$ to $T=100$. (Compatible with OHE).
- `Req-C` (Signal Dept): Needs 60 mins. Priority: 0.3. Window: $T=0$ to $T=100$.
- `Machine-1` (Signal Dept): State is FAILED / Unavailable.

**Optimizer Decision Logic**:
- `Req-C` is immediately rejected (Machine-1 is unavailable, violating Asset Availability hard constraint).
- `Req-A` and `Req-B` are compatible for a shadow block. The combined block takes $\max(40, 30) = 40$ minutes.
- If the shadow block is scheduled from $T=20$ to $T=60$, it perfectly avoids `Train-1`.
- **Expected Solution**:
  - `Req-A` and `Req-B` are scheduled as a shadow block from $T=20$ to $T=60$.
  - `Req-C` is deferred.
  - `Train-1` passes on schedule at $T=60$ to $T=70$.
- **Trade-off Explanation**: Consolidating A and B earns the shadow block reward and fulfills high-priority maintenance. Scheduling it before $T=60$ avoids train delay penalties. Rejecting `Req-C` ensures hard constraint compliance.
