# Gatidhara: SIH Demo Presentation Script

**Target Audience:** SIH Judges
**Duration:** 3 - 5 minutes
**Presenter Notes:** Speak clearly. Pause at the marked `[PAUSE]` sections to let the UI changes sink in.

---

## 1. The Problem (0:00 - 0:45)
"Good morning, Judges. 
Scheduling maintenance on one of the largest railway networks in the world is incredibly complex. Currently, block planning—finding safe windows to perform maintenance without disrupting train traffic—is highly manual, siloed, and prone to error. When a disruption occurs, like a machine breakdown or schedule overrun, controllers scramble to manually recalculate safety margins. This results in massive inefficiencies, delayed trains, and compromised safety. 

This is the problem **Gatidhara** solves."

## 2. Architecture & Synthetic Disclaimer (0:45 - 1:15)
"Gatidhara is an AI-driven, closed-loop block planning and execution system. 
*Disclaimer: What you are about to see is a fully functional prototype operating on synthetic data and a simulated railway corridor. It is currently not connected to the live railway control network.*

Our architecture integrates data fusion from disparate sources into a CP-SAT Optimization engine. We then use deterministic simulation to validate those plans before they ever reach the tracks."

## 3. The Demo: Optimization & Safety First (1:15 - 2:00)
"Let's look at the system in action. 
*[ACTION: Click 'Run Optimization']*

Here on the dashboard, Gatidhara has ingested imperfect data and generated an **Optimized Maintenance Plan**. You can see how it intelligently consolidates 'shadow-blocks'—grouping maintenance tasks to minimize track downtime. 

But optimization means nothing without safety. 
*[ACTION: Show Safety Status]*
Our deterministic Safety Validator acts as a hard gate. You can see this plan achieved a `PASS` status. It guarantees that no conflicting maintenance requests overlap in time and space."

## 4. Explainability & Human-in-the-Loop (2:00 - 2:45)
"A black-box AI is dangerous in critical infrastructure. 
*[ACTION: Click 'View Explanation']*

Gatidhara provides full **Explainability**. The controller can see exactly *why* a block was shifted or consolidated. But Gatidhara does not act alone. We strictly enforce a **Human-in-the-loop** architecture. The controller must explicitly approve this plan.
*[ACTION: Click 'Approve Plan' and then 'Start Execution']*

The plan is now live in our simulated digital twin."

## 5. Disruption & Re-optimization (2:45 - 3:45)
"Now, let's inject chaos. 
*[ACTION: Trigger Machine Failure/Overrun on the UI]*

A machine has just failed on the track. 
Immediately, Gatidhara's disruption detector catches the anomaly. Instead of the controller panicking, our system automatically triggers a **bounded re-optimization**. 

*[ACTION: Show Revised Plan and Safety Check]*
Within seconds, a revised plan is generated. It avoids the disrupted track, reallocates assets, and most importantly, undergoes a strict **Safety Re-validation**. 

*[ACTION: Show Awaiting Approval state]*
Notice that the system is currently `AWAITING_APPROVAL`. The revised plan is *never* automatically executed. The controller reviews the new explanation, checks the automatically generated **Audit Trail** for compliance, and then approves."

## 6. Measurable Impact (3:45 - 4:15)
"In our synthetic benchmarks, Gatidhara demonstrates:
- Up to 30% reduction in track downtime through shadow-block consolidation.
- 100% elimination of manual safety-constraint violations.
- Reduction of disruption recovery time from hours to mere seconds.

Gatidhara brings intelligence, explainability, and guaranteed safety to railway maintenance."
