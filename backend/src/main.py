from fastapi import FastAPI
from .config import Base, engine
from .urls import register_urls

def create_table(engine):
    Base.metadata.create_all(bind=engine)

def get_app() -> FastAPI:
    app = FastAPI(debug=True)

    return app

def init() -> FastAPI:
    create_table(engine)

    app = get_app()
    
    register_urls(app)

    return app


