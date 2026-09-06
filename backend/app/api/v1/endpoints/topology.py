from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from sqlalchemy import func, text
import json, struct, binascii
from app.db.session import get_db
from app.models.topology import RailwayNode, TrackSection, Loop, Platform, LevelCrossing
from app.core.dependencies import get_current_user

router = APIRouter()


def _ewkb_to_geojson(raw) -> dict | None:
    """Convert a raw geometry value (PostGIS EWKB hex or bytes) to a GeoJSON dict.

    On SQLite the geometry column stores the EWKB blob that GeoAlchemy2 put in.
    We do a best-effort parse to extract lat/lon for Point and LineString types.
    Falls back to None if parsing fails.
    """
    if raw is None:
        return None

    # May already be a dict/string (PostGIS path returns GeoJSON string)
    if isinstance(raw, dict):
        return raw
    if isinstance(raw, str):
        try:
            return json.loads(raw)
        except Exception:
            pass

    # SQLite returns bytes or a string of hex
    if isinstance(raw, (bytes, memoryview)):
        hex_str = binascii.hexlify(bytes(raw)).decode()
    elif isinstance(raw, str):
        hex_str = raw
    else:
        return None

    try:
        data = bytes.fromhex(hex_str)
        # Minimal EWKB parse: byte order, type, optional SRID, coords
        byte_order = data[0]  # 1 = little-endian, 0 = big-endian
        le = byte_order == 1
        endian = '<' if le else '>'

        wkb_type = struct.unpack_from(f'{endian}I', data, 1)[0]
        has_srid = bool(wkb_type & 0x20000000)
        geom_type = wkb_type & 0xFF  # 1=Point, 2=LineString, 3=Polygon

        offset = 5
        if has_srid:
            offset += 4  # skip SRID

        if geom_type == 1:  # Point
            x, y = struct.unpack_from(f'{endian}dd', data, offset)
            return {"type": "Point", "coordinates": [x, y]}

        elif geom_type == 2:  # LineString
            n_pts = struct.unpack_from(f'{endian}I', data, offset)[0]
            offset += 4
            coords = []
            for _ in range(n_pts):
                x, y = struct.unpack_from(f'{endian}dd', data, offset)
                coords.append([x, y])
                offset += 16
            return {"type": "LineString", "coordinates": coords}

    except Exception:
        pass

    return None


@router.get("/")
def get_topology(db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    nodes = db.query(RailwayNode).all()
    sections = db.query(TrackSection).all()
    loops = db.query(Loop).all()
    platforms = db.query(Platform).all()
    level_crossings = db.query(LevelCrossing).all()

    return {
        "nodes": [
            {"id": n.id, "name": n.name, "geometry": _ewkb_to_geojson(n.geometry)}
            for n in nodes
        ],
        "sections": [
            {
                "id": s.id,
                "from": s.from_node_id,
                "to": s.to_node_id,
                "length": s.length,
                "geometry": _ewkb_to_geojson(s.geometry),
            }
            for s in sections
        ],
        "loops": [
            {"id": l.id, "node_id": l.node_id, "capacity": l.capacity}
            for l in loops
        ],
        "platforms": [
            {"id": p.id, "node_id": p.node_id, "name": p.name, "geometry": _ewkb_to_geojson(p.geometry)}
            for p in platforms
        ],
        "level_crossings": [
            {"id": lx.id, "track_section_id": lx.track_section_id, "name": lx.name, "geometry": _ewkb_to_geojson(lx.geometry)}
            for lx in level_crossings
        ],
    }
