# Gatidhara Demo Mode Guide

## Objective
The Demo Mode in Gatidhara provides a seamless, one-click end-to-end demonstration of the platform's core decision-support loop. It highlights the integration from data generation to human-in-the-loop approval.

## End-to-End Workflow

1. **Trigger Demo (`/api/v1/plans/demo`)**
   - The user clicks "Run Demo Flow" on the dashboard.
   - The backend seeds the synthetic data and invokes the Fusion Engine to consolidate live network state.
   - The CP-SAT Optimizer is invoked synchronously on the fused data to produce an initial Plan.

2. **Safety Validation & Explanation**
   - The generated Plan immediately passes through the deterministic Safety Validator (Phase 3).
   - The Phase 5 Explainability engine parses the solver's decisions and safety results to produce actionable counterfactuals and recommendations (Explainability).

3. **Audit Registration**
   - The generated plan and its explanation are recorded in the local Audit Trail database (Phase 5).

4. **Frontend Presentation**
   - The backend responds with the aggregated data model encompassing the Plan, Safety Results, Explanations, and Audit Logs.
   - The Controller Dashboard presents this to the user across categorized tabs (`Active Plans`, `Safety Validation`, `Audit Trail`).

5. **Human-in-the-Loop Action**
   - The Controller reviews the plan and explanation.
   - The Controller either Approves (`/api/v1/plans/{id}/approve`) or Rejects (`/api/v1/plans/{id}/reject`) the plan via the `ControllerActions` component.
   - This decision is appended to the Audit Trail.

## Important Note for Presenters
- The simulation of disruptions (Phase 4) is built in the backend but the demo mode endpoint prioritizes the core decision flow to remain fast and deterministic for immediate UI feedback.
- Ensure the FastAPI backend is running on `localhost:8000` to serve the API requests required by the dashboard.
