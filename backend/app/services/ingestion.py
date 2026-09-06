import json
from sqlalchemy.orm import Session
from app.models.fusion import RawIngestionRecord, DataSource
from app.schemas.sources import (
    BlockRequestSource, TrainAndCrewSource, MaintenanceSource,
    SignallingTractionSource, LogisticsResourceSource, WeatherSource,
    CostResourceLedgerSource, GoodsTrafficForecastSource
)
from datetime import datetime

class IngestionAdapter:
    def __init__(self, db: Session):
        self.db = db

    def _get_source_id(self, source_name: str) -> int:
        source = self.db.query(DataSource).filter(DataSource.name == source_name).first()
        if not source:
            source = DataSource(name=source_name)
            self.db.add(source)
            self.db.commit()
            self.db.refresh(source)
        return source.id

    def ingest_record(self, source_name: str, payload_dict: dict, schema_version: str = "v1") -> RawIngestionRecord:
        source_id = self._get_source_id(source_name)
        ts = payload_dict.get('ingestion_timestamp')
        if isinstance(ts, str):
            ts = datetime.fromisoformat(ts.replace("Z", "+00:00"))
        
        record = RawIngestionRecord(
            source_id=source_id,
            source_record_id=payload_dict.get('source_record_id', ''),
            ingestion_timestamp=ts,
            schema_version=schema_version,
            payload=payload_dict
        )
        self.db.add(record)
        self.db.commit()
        self.db.refresh(record)
        return record

    def ingest_block_request(self, data: BlockRequestSource) -> RawIngestionRecord:
        return self.ingest_record("RBPMS", json.loads(data.model_dump_json()))

    def ingest_train_and_crew(self, data: TrainAndCrewSource) -> RawIngestionRecord:
        return self.ingest_record("COA-FOIS", json.loads(data.model_dump_json()))

    def ingest_maintenance(self, data: MaintenanceSource) -> RawIngestionRecord:
        return self.ingest_record("TDMS", json.loads(data.model_dump_json()))

    def ingest_signalling_traction(self, data: SignallingTractionSource) -> RawIngestionRecord:
        return self.ingest_record("Signalling", json.loads(data.model_dump_json()))

    def ingest_logistics_resource(self, data: LogisticsResourceSource) -> RawIngestionRecord:
        return self.ingest_record("Logistics", json.loads(data.model_dump_json()))

    def ingest_weather(self, data: WeatherSource) -> RawIngestionRecord:
        return self.ingest_record("Weather", json.loads(data.model_dump_json()))

    def ingest_cost_resource_ledger(self, data: CostResourceLedgerSource) -> RawIngestionRecord:
        return self.ingest_record("CostLedger", json.loads(data.model_dump_json()))

    def ingest_goods_traffic_forecast(self, data: GoodsTrafficForecastSource) -> RawIngestionRecord:
        return self.ingest_record("GoodsForecast", json.loads(data.model_dump_json()))
