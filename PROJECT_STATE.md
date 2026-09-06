# Project State: Gatidhara

## A. Current Repository State
The repository has been initialized with the Phase 0 foundational structure. It includes a FastAPI backend, Next.js frontend, Docker Compose infrastructure, deterministic seed generation, and test suites.

## B. Existing Implementation
- **Infrastructure**: `docker-compose.yml` for PostgreSQL/PostGIS, FastAPI backend, and Next.js frontend. (Version attribute removed to address warnings).
- **Backend**: FastAPI with Python 3.11, Pydantic v2, SQLAlchemy 2.0, Alembic, structured logging, centralized error handling, and JWT role-based authentication.
- **Database**: PostgreSQL with PostGIS extension. Initial schema for Users, Roles, Topology (Nodes, Sections, Loops), Assets, Maintenance, and Audit Logs. Validated Alembic migrations.
- **Data Gen**: Deterministic seed script (`data-gen/seed.py`) that populates the DB with users across 5 roles, a synthetic simple railway corridor, trains, maintenance assets, and pending maintenance requests (bcrypt dependencies fixed).
- **Frontend**: Scaffolding for a basic Next.js app (running on port 3000).
- **Tests**: Pytest setup validating startup, auth, role access, and endpoints. All tests PASS.

## Phase 0 Validation Results
All Phase 0 validation gates have achieved a **PASS** status. The foundation is stable and ready for Phase 1.

## C. Progress
- **Phase 0:** ✅ Foundation
- **Phase 1:** ✅ Synthetic Data & Fusion
- **Phase 2:** ✅ Optimization formulation, CP-SAT solver, Data integration
- **Phase 3:** ✅ Safety Validation & Rules Engine
- **Phase 4:** ✅ Probabilistic Simulation & Rescheduling
- **Phase 5:** ✅ Explainability, Fallback mechanisms, Audit Trail
- **Phase 6:** ✅ Controller Dashboard & Network Visualization
- **Phase 7:** ✅ Live Execution & Closed-Loop Feedback
- **Phase 8:** ⏳ Productionization & Refinement
## Local Setup & Commands

### Prerequisites
- Docker and Docker Compose installed.

### Environment Variables
The backend relies on the following environment variables (defaults provided in `backend/app/core/config.py`):
- `POSTGRES_SERVER`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`, `POSTGRES_PORT`
- `SECRET_KEY`

### Docker Commands
Start the entire stack (DB, Backend, Frontend):
```bash
docker compose up --build
```

### Database Migration Commands
The Alembic environment is configured to run automatically, but you can manually apply migrations inside the backend folder (or container):
```bash
cd backend
alembic revision --autogenerate -m "Initial schema"
alembic upgrade head
```

### Seed Commands
Populate the database with the deterministic synthetic corridor:
```bash
python data-gen/seed.py
```

### API Startup
If not using Docker, you can run the API locally:
```bash
cd backend
uvicorn app.main:app --reload --port 8000
```
Swagger docs are available at `http://localhost:8000/docs`.

### Testing Commands
Run the automated test suite against the running instance:
```bash
pytest tests/
```
