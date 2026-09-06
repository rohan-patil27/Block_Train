# Final Setup: Clean Start Instructions

This document provides instructions for starting the Gatidhara prototype from a completely clean state. 
This is critical for ensuring a deterministic, repeatable demonstration environment for the Smart India Hackathon.

## Prerequisites
- Docker & Docker Compose
- Node.js (for frontend local development only, otherwise handled via Docker)
- Python 3.11+ (for backend local development)

## Clean Start via Docker (Recommended)

1. **Tear down existing volumes and containers**
   Ensure no lingering data remains from previous sessions:
   ```bash
   docker compose down -v
   ```

2. **Rebuild and launch the stack**
   ```bash
   docker compose up --build -d
   ```

3. **Verify Services**
   - **Database**: Port 5432 (PostgreSQL + PostGIS)
   - **Backend**: Port 8000 (FastAPI) - Check `http://localhost:8000/api/v1/health/`
   - **Frontend**: Port 3000 (Next.js) - Check `http://localhost:3000/dashboard`

## Database Migrations & Seeding

The Docker backend container handles migrations and database startup automatically via its entrypoint or command sequence.
However, for the SIH deterministic demo, you can forcibly wipe and re-seed the database at any time using the new Demo Reset API.

**Reset the Demo State**
- Click **RESET DEMO** on the frontend Dashboard (bottom left).
- OR run via cURL:
  ```bash
  curl -X POST http://localhost:8000/api/v1/demo/reset
  ```

This drops all tables, recreates them, and runs the deterministic `seed_data(db)` script to inject the predefined SIH maintenance requests and synthetic topology.
