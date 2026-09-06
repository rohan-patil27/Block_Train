from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse

class GatidharaException(Exception):
    def __init__(self, message: str, status_code: int = 400):
        self.message = message
        self.status_code = status_code

def add_exception_handlers(app: FastAPI):
    @app.exception_handler(GatidharaException)
    async def custom_exception_handler(request: Request, exc: GatidharaException):
        return JSONResponse(
            status_code=exc.status_code,
            content={"detail": exc.message},
        )
