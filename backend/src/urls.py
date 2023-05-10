from fastapi import FastAPI
from .views.index import router as index_router

def register_urls(app: FastAPI):
    app.include_router(index_router)
