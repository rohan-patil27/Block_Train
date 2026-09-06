import logging
from sqlalchemy.orm import Session
from app.models.execution import ExecutionSession, DisruptionEvent

logger = logging.getLogger(__name__)

class EventDetector:
    def __init__(self, db: Session):
        self.db = db

    def check_for_disruptions(self, execution_id: int) -> list[DisruptionEvent]:
        """
        Scans recent events for critical disruptions that require re-optimization.
        Returns a list of unhandled critical events (for demo, just returns the events).
        """
        # In a real system, this would have a cursor or 'handled' flag.
        # For the synthetic execution, we can just look for events created in the current execution
        # that match the criteria for re-optimization.
        
        events = self.db.query(DisruptionEvent).filter(
            DisruptionEvent.execution_id == execution_id,
            DisruptionEvent.severity.in_(["HIGH", "CRITICAL"])
        ).all()
        
        # We need a way to track if we've already triggered a re-opt for this event.
        # For the prototype, we assume the caller handles this by checking the execution state
        # (e.g., transitioning it from RUNNING to AWAITING_APPROVAL).
        return events
