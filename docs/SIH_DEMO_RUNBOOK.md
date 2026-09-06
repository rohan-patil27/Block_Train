# SIH Demo Runbook: Gatidhara

This runbook provides the exact deterministic steps required to execute the Gatidhara SIH demonstration.

## Preparation & Startup

**1. Start the Environment**
Open two terminal windows. 

**Terminal 1 (Backend):**
```bash
cd backend
python -m venv .venv
source .venv/Scripts/activate  # Or .venv/bin/activate on Linux/Mac
pip install -r requirements.txt
export DATABASE_URL="sqlite:///./gatidhara.db"  # (Or use Windows equivalent: $env:DATABASE_URL="sqlite:///./gatidhara.db")
python data-gen/seed.py
uvicorn app.main:app --reload --port 8000
```
*Expected: Backend runs on `http://localhost:8000` with Swagger UI at `/docs`.*

**Terminal 2 (Frontend):**
```bash
cd frontend
npm install
npm run dev
```
*Expected: Frontend runs on `http://localhost:3000`.*

---

## The Demo Flow

**Step 1: Open Localhost Dashboard**
- Navigate to `http://localhost:3000`
- **Expected Screen:** The main Gatidhara Controller Dashboard showing the digital twin (map/corridor) and unoptimized maintenance requests.

**Step 2: Show Imperfect/Fused Data**
- Click on the **"Data Sources"** or **"Incoming Requests"** tab/panel.
- Point out that these requests are raw and unoptimized.

**Step 3: Show Optimized Maintenance Plan**
- Click the **"Run Optimization"** button.
- **Expected Screen:** The dashboard updates with a Gantt chart or schedule view of the Optimized Plan.
- Highlight the **shadow-block consolidation** (tasks grouped together).

**Step 4: Show Safety PASS**
- Look at the **"Safety Status"** indicator panel.
- **Expected Screen:** A green `PASS` or `PASS_WITH_WARNINGS` badge next to the plan.
- *Talk Track:* "Our deterministic safety validator guarantees no conflicts."

**Step 5: Show Explainability**
- Click the **"View Explanation"** button on the optimized plan.
- **Expected Screen:** A modal/panel explaining the rationale for the plan (e.g., "Shifted task X to shadow block Y").

**Step 6: Controller Approves**
- Click the **"Approve Plan"** button.
- **Expected Screen:** The plan's status changes from `PENDING` to `APPROVED`.

**Step 7: Start Simulated Execution**
- Click the **"Start Execution"** button.
- **Expected Screen:** The dashboard switches to 'Live' mode. The telemetry timeline or map starts ticking/updating.

**Step 8: Trigger Disruption (Machine Failure / Overrun)**
- Click the **"Inject Disruption"** or **"Simulate Overrun"** button on a running block.
- **Expected Screen:** An alert pops up: "Disruption Detected".

**Step 9: Show Automatic Re-optimization**
- The system automatically triggers the solver.
- **Expected Screen:** A new "Revised Plan" appears, routing around the disruption.

**Step 10: Show Safety Re-validation**
- Point to the **Safety Status** of the newly revised plan.
- **Expected Screen:** A green `PASS` indicator for the revised plan.

**Step 11: Show Revised Explanation**
- Click **"View Explanation"** on the revised plan.
- **Expected Screen:** Explains *why* the changes were made (e.g., "Re-routed due to machine failure on Block 2").

**Step 12: Show Audit Trail**
- Navigate to the **"Audit Log"** tab.
- **Expected Screen:** A chronological list of automated decisions: `PLAN_GENERATED`, `PLAN_SAFETY_VALIDATED`, `REOPTIMIZATION_TRIGGERED`.

**Step 13: Controller Approval Required (CRITICAL)**
- Go back to the dashboard.
- **Expected Screen:** The revised plan explicitly states **`AWAITING_APPROVAL`**. It does *not* auto-execute.
- Click **"Approve Plan"** to allow the system to proceed.

---

## Troubleshooting & Reset

### Hard Reset Procedure
If the demo gets stuck or you need to restart for the next judge:
1. Stop the Backend (`Ctrl+C`).
2. Delete the SQLite database: `rm backend/gatidhara.db` (or `del backend\gatidhara.db` on Windows).
3. Run the seed script again: `python backend/data-gen/seed.py`.
4. Start the backend again.
5. Refresh the frontend browser (`F5`).

### Fallback Troubleshooting
- **Frontend not updating:** Check the browser console (F12) for WebSocket/Polling errors. Ensure backend is running.
- **Optimization fails/times out:** Restart backend. Ensure `ortools` is installed correctly in the venv.
- **Safety check fails on first run:** This is impossible with deterministic seeded data. If it occurs, you are using the wrong database. Follow the Hard Reset procedure.
