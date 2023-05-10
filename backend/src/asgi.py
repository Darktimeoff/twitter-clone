from .main import init
import asyncio
from .config import init_models


app = init()

if __name__ == '__main__':
    asyncio.run(init_models())