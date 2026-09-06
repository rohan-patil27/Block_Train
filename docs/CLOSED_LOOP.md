# Phase 7: Closed-Loop Re-Optimization

This document describes the workflow for handling disruptions during synthetic live execution.

## The Closed-Loop Workflow

The closed-loop re-optimization workflow is triggered when a critical disruption (e.g., block overrun > 10 mins, machine failure) is detected by the `EventDetector`.

1. **Telemetry**: The Execution Engine generates telemetry reflecting the delay or failure.
2. **Event Detector**: The detector identifies the disruption and categorizes its severity.
3. **Updated Operational State**: The `OptimizationAdapter` formulates a new optimization input, treating the disrupted state as the new baseline.
4. **CP-SAT Optimizer**: A revised plan is generated to mitigate the disruption.
5. **Safety Validator**: The revised plan is checked against all safety rules. It must achieve `PASS` or `PASS_WITH_WARNINGS` to proceed.
6. **Explanation**: An explanation for the revised plan is generated.
7. **Audit**: The entire event chain (Detection -> Trigger -> Plan Generation -> Safety Check) is logged in the Audit Trail.
8. **Controller Approval**: The Execution Session transitions to `AWAITING_APPROVAL`. 

## Human Approval Boundary

The system **MUST NOT** automatically execute the revised plan. The revised plan is presented to the human Controller via the Dashboard. The Controller reviews the safety results, explanation, and affected sections, and must explicitly click "Approve" or "Reject". 

While the system handles the heavy lifting of detection and re-calculation, the final decision-making authority remains strictly with the human operator, ensuring adherence to the core requirement of being a human-approved decision-support tool.
