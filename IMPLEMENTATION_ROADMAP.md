# Implementation Roadmap

The implementation will follow a vertical-slice approach, ensuring we demonstrate end-to-end capabilities early.

## Milestone 1: Foundation & Data Layer (First Implementation Milestone)
**Goal**: Set up the environment, database, and foundational APIs.
- Initialize `docker-compose.yml` (PostgreSQL/PostGIS, Backend).
- Set up FastAPI project structure with SQLAlchemy and Alembic.
- Define initial DB models (User, Asset, MaintenanceRequest).
- Implement JWT Role-Based Authentication.
- Write a synthetic data seed script to populate mock assets and users.

**Validation Criteria**:
- `docker compose up` successfully starts the DB and API.
- Swagger UI (`/docs`) is accessible.
- A user can log in and retrieve a JWT token.
- `GET /api/v1/assets` returns a populated list of synthetic railway assets.

## Milestone 2: Data Ingestion & Priority Scoring
**Goal**: Implement maintenance requests and ML priority scoring.
- API endpoints for submitting and listing maintenance requests.
- Integrate a dummy (then scikit-learn trained) ML model to assign priority scores to incoming requests based on asset age/criticality.

## Milestone 3: Optimization Core
**Goal**: Block planning using OR-Tools.
- Formulate the CP-SAT model.
- Constraints: Train schedules, non-overlapping asset requirements, workforce limits.
- API endpoint to trigger generation of an optimized block window plan.

## Milestone 4: Simulation & Validation
**Goal**: SimPy digital twin and safety validation.
- Build the SimPy environment to simulate train movements and maintenance tasks.
- Implement what-if simulation to validate the block plan against disruption scenarios.

## Milestone 5: Frontend Visualization
**Goal**: Controller Dashboard.
- Setup Next.js, Tailwind CSS, and Recharts.
- Implement login page and layout.
- Integrate Deck.gl to render the digital twin (assets, corridors) and highlight block windows.

## Milestone 6: Closed-loop Real-time Integration (Phase 7)
**Goal**: Tie everything together via closed-loop execution.
- [x] Stream simulated telemetry from backend to frontend.
- [x] Implement UI for controller approval.
- [x] Demonstrate disruption handling (re-optimization trigger).
- [x] Integrate Execution Engine and Disruption Detector.
