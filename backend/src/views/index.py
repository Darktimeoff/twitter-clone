from fastapi import APIRouter, FastAPI, Depends, Body
from src.config import get_db
from sqlalchemy.orm import Session
from src.models.user import Person

router = APIRouter()

@router.get("/")
async def index():
    return {"message": "Hello, world!"}

@router.get("/api/users")
def get_people(db: Session = Depends(get_db)):
    return db.query(Person).all()

@router.post("/api/users")
def create_person(data  = Body(), db: Session = Depends(get_db)):
    person = Person(name=data["name"], age=data["age"])
    db.add(person)
    db.commit()
    db.refresh(person)
    return person



def init_app(app: FastAPI):
    app.include_router(router)