# Phase 4: What-If Simulation & Re-optimization

The Gatidhara simulation engine evaluates the operational robustness of a CP-SAT generated schedule against a range of stochastic operational disruptions. It allows controllers and planners to ask "What If?" questions and automatically determines if a disrupted schedule requires re-optimization.

## Simulation Framework

Gatidhara utilizes **SimPy**, a discrete-event simulation framework, to model the operational railway network. The simulation proceeds by processing scheduled block movements and maintenance windows on top of capacity-constrained track sections (modeled as `simpy.Resource`). 

Unlike simple recalculations, the simulation processes continuous time logically, propagating the physical effects of delays into consecutive train schedules and resource occupancies.

### Implemented Disruption Scenarios

1. **Block Overrun (`block_overrun`)**: A maintenance block requires additional time beyond its scheduled window, blocking subsequent train paths.
2. **Machine Failure Mid-Section (`machine_failure_mid_section`)**: A Track Machine breaks down during operation, trapping it inside a block section and blocking adjacent capacity.
3. **Premium Train Path Deviation (`premium_train_path_deviation`)**: A high-priority train (e.g., Rajdhani/Shatabdi) falls behind schedule, necessitating overtaking and path reprioritization.
4. **Worsening Weather (`worsening_weather`)**: Temporary speed restrictions (TSR) are dynamically introduced due to heavy rain, fog, or low visibility, increasing all traversal times uniformly.
5. **Traction Power Trip (`traction_power_trip`)**: OHE fails in a specific block section, instantly reducing its available capacity to 0 and preventing electric traction movement.

## Metrics & Evaluation

The simulation outputs several deterministic evaluation metrics, which determine the need for Re-optimization:

*   **Plan Stability Index (PSI):** Measures the degree of difference between the original scheduled plan and the simulated outcome. 1.0 means perfect adherence.
*   **Total Delay Minutes:** Sum of all propagated delays.
*   **Network Recovery Resilience (NRR):** Measures how effectively the network returned to steady-state operations within the defined horizon.
*   **Cost Sensitivity Index (CSI):** Tracks penalty increases due to unplanned modifications or maintenance deferrals.

## Bounded Re-optimization Loop

If a simulation result indicates severe unrecoverable delay (e.g. `Plan Stability Index < 0.9` or explicit critical path blockage), Gatidhara engages the `BoundedReoptimizer`.

The Re-optimizer executes a controlled feedback loop:
1. Translates the current simulated system state (with disruptions applied) back into a modified `OptimizationInput`.
2. Engages CP-SAT to search for a new feasible schedule.
3. Automatically relaxes **soft constraints** (such as absolute delay penalties and soft maintenance preferences) if the solver returns `INFEASIBLE`.
4. Restricts execution to a **maximum of 3 attempts** to prevent infinite loops.
5. Passes the newly proposed plan through the deterministic **Safety Validator**. Only plans receiving a `PASS` or `PASS_WITH_WARNINGS` are persisted.

Status codes reflect the final state: `REOPTIMIZED`, `ROBUST` (no change needed), `INFEASIBLE` (unsolvable), `TIMEOUT`, or `FALLBACK_REQUIRED` (failed safety constraints).
