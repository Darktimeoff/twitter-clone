from fastapi import APIRouter, FastAPI

router = APIRouter()

@router.get("/")
async def index():
    return {"message": "Hello, world!"}


def init_app(app: FastAPI):
    app.include_router(router)