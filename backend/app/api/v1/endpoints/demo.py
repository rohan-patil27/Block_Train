from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import text
from app.db.session import get_db
from app.db.base import Base
from app.db.session import engine
import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../../data-gen")))
import seed
import logging

router = APIRouter()
logger = logging.getLogger(__name__)

@router.post("/reset")
def reset_demo(db: Session = Depends(get_db)):
    """
    Resets the database to a clean state and deterministically seeds it.
    Used for the SIH demo to guarantee repeatability.
    """
    logger.info("Starting Demo Reset...")
    try:
        # Drop all tables managed by Base
        Base.metadata.drop_all(bind=engine)
        logger.info("Dropped all tables.")
        
        # Create all tables
        Base.metadata.create_all(bind=engine)
        logger.info("Created all tables.")
        
        # Run the deterministic seed
        seed.seed_data(db)
        logger.info("Seeded demo data successfully.")
        
        return {"status": "success", "message": "Demo reset to deterministic seed state."}
    except Exception as e:
        logger.error(f"Error during demo reset: {e}")
        return {"status": "error", "message": str(e)}
