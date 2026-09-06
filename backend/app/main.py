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
frontend_out = os.path.join(os.path.dirname(__file__), "..", "..", "frontend", "out")
if os.path.exists(frontend_out):
    app.mount("/", StaticFiles(directory=frontend_out, html=True), name="frontend")
