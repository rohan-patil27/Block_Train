# Explainability Prototype Formulation

## Overview
This document specifies the formulation for Gatidhara's template-based explainability module, implemented as a deterministic logic layer without LLM dependency. It bridges the gap between raw CP-SAT optimization outputs and human-readable reasoning for railway controllers.

## Core Properties
1. **Deterministic generation**: Explanation output relies purely on plan metadata, input context, and the CP-SAT objective breakdown.
2. **Metadata preservation**: All explanations explicitly track `plan_id` and tool versions.
3. **No Safety Overrides**: The explainability module does not alter the generated plan or safety validation status.

## Explanation Components
The explanation is structured into the following deterministic fields:

1. **Root Cause**: Identifies the primary objective mechanism (e.g., minimizing expected train delay, maximizing priority-weighted requests). If fallback was activated, it explicitly states that heuristic scheduling was used due to optimizer infeasibility.
2. **Synergy**: Explains block grouping and shadow-block consolidation logic. If overlapping compatible requests were identified and grouped, the exact count of grouped requests and output blocks is provided.
3. **Tradeoffs**: Formulates the objective tradeoff between maintenance reward and delay penalties using raw values provided by CP-SAT solver status (if available). 
4. **Safety Summary**: Provides a clear and concise summary of the safety validation result, listing the count of hard violations or soft warnings.
5. **Robustness Summary**: Highlights whether simulation was executed and summarizes bounds/results (currently not integrated tightly in Phase 5).
6. **Decision Summary**: The ultimate machine recommendation: "approved", "rejected", or "recommended with warnings".

## Prototype Limitations
- Currently relies on `objective_breakdown` from the solver, which if absent defaults to a static text.
- Fully rule-based templates rather than dynamic natural language.
