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
