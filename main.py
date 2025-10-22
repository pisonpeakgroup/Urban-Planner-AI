from fastapi import FastAPI
from .routers import city

app = FastAPI(title="City Modeler API")
app.include_router(city.router, prefix="/api")
