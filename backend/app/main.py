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

# Serve Frontend static files if they exist (built via `npm run build`)
frontend_out = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "out"))

@app.get("/debug-path")
def debug_path():
    return {
        "__file__": __file__,
        "dirname": os.path.dirname(__file__),
        "frontend_out_path": frontend_out,
        "exists": os.path.exists(frontend_out),
        "cwd": os.getcwd(),
        "listdir_cwd": os.listdir(os.getcwd()) if os.path.exists(os.getcwd()) else [],
        "listdir_root": os.listdir(os.path.abspath(os.path.join(os.getcwd(), ".."))) if os.path.exists(os.path.abspath(os.path.join(os.getcwd(), ".."))) else []
    }

if os.path.exists(frontend_out):
    app.mount("/", StaticFiles(directory=frontend_out, html=True), name="frontend")
