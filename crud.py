from sqlalchemy.future import select
from sqlalchemy import text
from .models import Building
from .schemas import BuildingCreate
from .database import SessionLocal

async def create_building(db, building: BuildingCreate):
    geom = f"ST_GeomFromText('{building.footprint_wkt}', 4326)"
    query = text(f"""
        INSERT INTO buildings (name, height, footprint)
        VALUES (:name, :height, {geom})
        RETURNING id
    """)
    result = await db.execute(query, {"name": building.name, "height": building.height})
    await db.commit()
    return result.scalar()

async def get_buildings(db):
    result = await db.execute(select(Building))
    return result.scalars().all()
