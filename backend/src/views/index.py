from fastapi import APIRouter, FastAPI, Depends, Body
from src.config import get_db
from sqlalchemy.ext.asyncio import AsyncSession
from src.models.user import Person
from sqlalchemy import select
router = APIRouter()

@router.get("/")
async def index():
    return {"message": "Hello, world!"}

@router.get("/api/users")
async def get_people(db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Person).order_by(Person.id))
    
    response = [{
        "id": p.id,
        "name": p.name,
        "age": p.age
    } for p in result.scalars().all()]

    return response

@router.post("/api/users")
async def create_person(data  = Body(), db: AsyncSession = Depends(get_db)):
    person = Person(name=data["name"], age=data["age"])
    db.add(person)

    await db.commit()
    await db.refresh(person)

    return person



def init_app(app: FastAPI):
    app.include_router(router)