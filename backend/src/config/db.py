from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.ext.asyncio import create_async_engine
from sqlalchemy.orm import sessionmaker
from .main import config

engine = create_async_engine(config.DATABASE_URL, echo=True)

Base = declarative_base()

SessionLocal = async_session = sessionmaker(
    engine, class_=AsyncSession, expire_on_commit=False
)

async def get_db():
    async with async_session() as session:
        yield session
 

async def init_models():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)