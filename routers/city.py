from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from ..database import SessionLocal
from .. import crud, schemas

router = APIRouter()

async def get_db():
    async with SessionLocal() as session:
        yield session

@router.post("/buildings/")
async def add_building(building: schemas.BuildingCreate, db: AsyncSession = Depends(get_db)):
    return await crud.create_building(db, building)

@router.get("/buildings/", response_model=list[schemas.BuildingOut])
async def list_buildings(db: AsyncSession = Depends(get_db)):
    return await crud.get_buildings(db)
