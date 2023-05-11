from odmantic import AIOEngine
from motor.motor_asyncio import AsyncIOMotorClient
from bson.codec_options import TypeCodec, TypeRegistry
from .main import config
from decimal import Decimal
from odmantic.bson import Decimal128

class DecimalCodec(TypeCodec):
    python_type = Decimal
    bson_type = Decimal128

    def transform_python(self, value):
        return Decimal128(value)

    def transform_bson(self, value):
        return value.to_decimal()

decimal_codec = DecimalCodec()    
type_registry = TypeRegistry([decimal_codec])
    
client = AsyncIOMotorClient(config.MONGODB_URL, type_registry=type_registry)
db = AIOEngine(client=client, database=config.MONGODB_DBNAME)