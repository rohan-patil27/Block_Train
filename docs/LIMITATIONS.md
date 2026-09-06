# Gatidhara Prototype — Known Limitations & Exclusions

This document explicitly outlines the technical, operational, and architectural limitations of the Gatidhara prototype.

## 1. Safety and Real-World Constraints

### **Prototype Nature**
* **Not for Production:** This prototype is explicitly built for demonstration and algorithmic validation. It **MUST NOT** be used to control real trains, issue physical track warrants, or manipulate actual interlocking systems.
* **No Direct Control:** The system is a **decision-support tool**. The CP-SAT solver and formal safety validators output *suggested* schedules. Human controllers must always vet and authorize decisions.
* **Open-Loop Reality:** While Phase 7 simulates closed-loop telemetry, the actual railway ecosystem is open-loop with numerous hidden variables (e.g., driver behavior, unpredictable micro-weather events) that are not modeled.

## 2. Technical Limitations

### **CP-SAT Solver Constraints**
* **Scale Limitations:** The CP-SAT solver uses a simplified Job-Shop formulation. While it easily handles the simulated 20-node, 5-train demo, scaling to the full Indian Railways network (thousands of nodes and trains) would require advanced decomposition techniques (e.g., Dantzig-Wolfe) which are beyond this prototype.
* **Continuous Dynamics:** The optimizer operates on discrete time buckets. Continuous kinematic equations (acceleration/deceleration curves based on train load and exact gradients) are approximated.

### **Data Fusion Accuracy**
* **Simulated Sensor Noise:** The data fusion engine resolves contradictions using hardcoded heuristic weights for specific sources (e.g., RBPMS > TDMS). In a real deployment, a probabilistic model (e.g., Kalman filters or Bayesian networks) would be required to handle sensor drift.
* **External APIs:** The system simulates weather and goods traffic rather than pulling live feeds from the IMD (Indian Meteorological Department) or FOIS APIs to prevent rate-limiting and demo instability.

### **Database & Security**
* **In-Memory/Local Storage:** Depending on the setup, the system may rely on local SQLite or a lightweight Postgres container. Real deployments require a distributed, high-availability database cluster (e.g., CockroachDB).
* **Mock Auth:** Authentication and RBAC (Role-Based Access Control) are implemented in logic, but production environments would require integration with corporate SSO or OAuth2.

## 3. Scope Exclusions

* **Hardware Integration:** No integration with real-world IoT sensors, signals, or SCADA systems.
* **Advanced Explainability NLP:** The explanation engine uses deterministic template-based generation (`app/services/explainability/generator.py`) rather than an LLM, guaranteeing speed, reliability, and deterministic output for the demo.
* **Crew Rostering:** Crew shift logic is mocked. Real constraints regarding rest hours and union rules are excluded.
