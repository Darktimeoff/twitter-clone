import os
import enum
import inspect

from dotenv import dotenv_values

from dataclasses import dataclass

class Environment(str, enum.Enum):
    PROD = 'production'
    TEST = 'testing'
    DEV = 'development'

@dataclass
class Config:
    ENV: Environment
    DATABASE_URL: str

    @classmethod
    def from_dict(cls, env):
        return cls(**{
            k: v for k, v in env.items()
            if k in inspect.signature(cls).parameters
        })

config_dict = {
    **dotenv_values(".env")
}

config = Config.from_dict(config_dict)