from sqlalchemy.orm import Session
from datetime import datetime, timezone
import math

from app.models.topology import TrackSection, RailwayNode
from app.models.asset import MaintenanceGang, MaintenanceAsset
from app.models.operation import TrainSchedule, Train, MaintenanceRequest, TractionState
from app.models.fusion import ProvenanceLog, FusionIssue, IssueType, ConfidenceLevel

from app.services.optimization.schemas import (
    OptimizationInput, OptimizationConfig, OptTrain, OptMaintenanceRequest, OptSection, OptGang
)

class OptimizationAdapter:
    def __init__(self, db: Session):
        self.db = db
        
    def generate_input(self, horizon_start: datetime, config: OptimizationConfig) -> OptimizationInput:
        # 1. Sections
        db_sections = self.db.query(TrackSection).all()
        sections = []
        section_map = {}
        for s in db_sections:
            ts = self.db.query(TractionState).filter(TractionState.track_section_id == s.id).first()
            t_state = "AVAILABLE"
            if ts and not ts.is_active:
                t_state = "FAILED"
            
            # Simple capacity mapping
            sections.append(OptSection(
                section_id=s.id,
                capacity=100,
                traction_state=t_state
            ))
            section_map[s.id] = s
            
        # 2. Gangs
        db_gangs = self.db.query(MaintenanceGang).all()
        gangs = []
        for g in db_gangs:
            # Check for fusion issues. In seed.py, contradiction is logged for Logistics, gang Gang_Civil_0
            available = True
            
            # Very simplistic logic to detect contradiction for prototype
            # We search issues where description contains gang name or it's a CONTRADICTION
            issues = self.db.query(FusionIssue).filter(
                FusionIssue.issue_type == IssueType.CONTRADICTION
            ).all()
            
            for issue in issues:
                if issue.raw_record and issue.raw_record.payload and issue.raw_record.payload.get("gang_name") == g.name:
                    available = False
                    
            gangs.append(OptGang(
                gang_id=g.id,
                department_id=g.department_id,
                available=available
            ))
            
        # 3. Trains
        db_schedules = self.db.query(TrainSchedule).all()
        trains = []
        
        for sch in db_schedules:
            arr = sch.arrival_time or sch.departure_time
            dep = sch.departure_time or sch.arrival_time
            if arr and dep:
                # Ensure they are naive datetimes for subtraction if horizon_start is naive
                if arr.tzinfo and not horizon_start.tzinfo:
                    arr = arr.replace(tzinfo=None)
                if dep.tzinfo and not horizon_start.tzinfo:
                    dep = dep.replace(tzinfo=None)
                    
                start_min = int((arr - horizon_start).total_seconds() / 60)
                end_min = int((dep - horizon_start).total_seconds() / 60)
                
                # Check for train confidence in ProvenanceLog
                # In seed.py, train source is COA-FOIS
                # Train schedule doesn't have an ID connected to ProvenanceLog entity_id easily
                # Prototype: default HIGH
                confidence = "HIGH"
                
                # Force map to section 0 for demonstration of conflicts
                section_id = sections[0].section_id if sections else 1
                        
                # Only include trains that fall inside our horizon
                if end_min >= 0 and start_min <= config.horizon_mins:
                    train_type = sch.train.train_type if sch.train else "express"
                    trains.append(OptTrain(
                        train_id=sch.train_id,
                        train_type=train_type,
                        scheduled_start=max(0, start_min),
                        scheduled_end=min(config.horizon_mins, end_min + 10), # assume 10 min transit
                        section_id=section_id,
                        confidence=confidence
                    ))

        # 4. Maintenance Requests
        db_maint = self.db.query(MaintenanceRequest).all()
        maint_reqs = []
        
        for i, m in enumerate(db_maint):
            # Force map to section 0 for demonstration of conflicts
            section_id = sections[0].section_id if sections else 1
                
            confidence = "HIGH"
            # In Phase 1 seed, TDMS records might have missing priority score, causing LOW confidence
            # Check if there are any LOW confidence provenance logs
            has_low_confidence = self.db.query(ProvenanceLog).filter(
                ProvenanceLog.confidence == ConfidenceLevel.LOW
            ).first()
            if has_low_confidence and i == 0:
                confidence = "LOW"
            elif m.priority_score and m.priority_score > 80:
                confidence = "HIGH"
                
            # For the prototype, window start/end is [0, horizon_mins]
            maint_reqs.append(OptMaintenanceRequest(
                request_id=m.id,
                department_id=m.department_id,
                section_id=section_id,
                duration_mins=m.duration_mins,
                priority_score=m.priority_score or 0.5,
                window_start=0,
                window_end=config.horizon_mins,
                confidence=confidence
            ))
            
        return OptimizationInput(
            horizon_start=horizon_start,
            config=config,
            trains=trains,
            maintenance_requests=maint_reqs,
            sections=sections,
            gangs=gangs
        )
