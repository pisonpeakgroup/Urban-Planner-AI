from pydantic import BaseModel
from typing import Optional

class BuildingCreate(BaseModel):
    name: str
    height: int
    footprint_wkt: str  # WKT format for geometry

class BuildingOut(BaseModel):
    id: int
    name: str
    height: int

    class Config:
        orm_mode = True
