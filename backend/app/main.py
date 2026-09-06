from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os
from app.api.v1.api import api_router
from app.core.config import settings
from app.core.errors import add_exception_handlers

app = FastAPI(title=settings.PROJECT_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

add_exception_handlers(app)

app.include_router(api_router, prefix=settings.API_V1_STR)
from fastapi.responses import FileResponse, JSONResponse
from app.db.session import engine, SessionLocal
from app.models import Base
from app.models.user import User

# We also need to seed basic users and topology
def init_db():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    # Check if we need to seed
    if not db.query(User).filter(User.username == "controller1").first():
        print("Seeding database...")
        # Import seed_data from data-gen/seed.py
        import sys
        seed_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "data-gen"))
        if seed_dir not in sys.path:
            sys.path.insert(0, seed_dir)
        try:
            import seed
            seed.seed_data(db)
        except Exception as e:
            print("Seeding failed:", e)
    db.close()

@app.on_event("startup")
def on_startup():
    init_db()

# Serve Frontend static files if they exist (built via `npm run build`)
frontend_out = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "out"))

@app.exception_handler(404)
async def custom_404_handler(request, exc):
    if request.url.path.startswith(settings.API_V1_STR):
        return JSONResponse({"detail": "Not found"}, status_code=404)
        
    path = request.url.path.strip("/")
    if not path:
        path = "index"
        
    html_file = os.path.join(frontend_out, f"{path}.html")
    if os.path.exists(html_file):
        return FileResponse(html_file)
        
    index_file = os.path.join(frontend_out, "index.html")
    if os.path.exists(index_file):
        return FileResponse(index_file)
        
    return JSONResponse({"detail": "Not found"}, status_code=404)

if os.path.exists(frontend_out):
    app.mount("/", StaticFiles(directory=frontend_out, html=True), name="frontend")
