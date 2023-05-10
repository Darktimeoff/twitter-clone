from fastapi import FastAPI
from .urls import register_urls

def get_app() -> FastAPI:
    app = FastAPI(debug=True)

    return app

def init() -> FastAPI:
    app = get_app()
    
    register_urls(app)

    return app


