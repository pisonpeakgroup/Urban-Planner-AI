from sqlalchemy import Column, Integer, String
from geoalchemy2 import Geometry
from .database import Base

class Building(Base):
    __tablename__ = "buildings"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    height = Column(Integer)
    footprint = Column(Geometry(geometry_type="POLYGON", srid=4326))
