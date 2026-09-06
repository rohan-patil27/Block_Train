'use client';

import React, { useMemo } from 'react';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';
import { MapView } from '@deck.gl/core';

interface NetworkMapProps {
  topology: any;
}

export default function NetworkMap({ topology }: NetworkMapProps) {
  const INITIAL_VIEW_STATE = {
    longitude: 80.9,
    latitude: 26.8,
    zoom: 10,
    pitch: 0,
    bearing: 0
  };

  const geoJsonData = useMemo(() => {
    if (!topology) return { type: 'FeatureCollection', features: [] };

    const features: any[] = [];

    // Nodes (Stations, Junctions)
    if (topology.nodes) {
      topology.nodes.forEach((n: any) => {
        if (n.geometry) {
          features.push({
            type: 'Feature',
            geometry: n.geometry,
            properties: { ...n, layer: 'node' }
          });
        }
      });
    }

    // Sections (Tracks)
    if (topology.sections) {
      topology.sections.forEach((s: any) => {
        if (s.geometry) {
          features.push({
            type: 'Feature',
            geometry: s.geometry,
            properties: { ...s, layer: 'section' }
          });
        }
      });
    }

    // Platforms
    if (topology.platforms) {
      topology.platforms.forEach((p: any) => {
        if (p.geometry) {
          features.push({
            type: 'Feature',
            geometry: p.geometry,
            properties: { ...p, layer: 'platform' }
          });
        }
      });
    }

    return {
      type: 'FeatureCollection',
      features
    };
  }, [topology]);

  const layers = [
    new GeoJsonLayer({
      id: 'railway-network',
      data: geoJsonData as any,
      pickable: true,
      stroked: true,
      filled: true,
      getLineColor: (f: any) => {
        if (f.properties.layer === 'section') return [99, 102, 241, 200]; // Indigo glow
        return [255, 255, 255, 50];
      },
      getFillColor: (f: any) => {
        if (f.properties.layer === 'node') return [244, 63, 94, 255]; // Rose
        if (f.properties.layer === 'platform') return [16, 185, 129, 255]; // Emerald
        return [148, 163, 184, 150];
      },
      getLineWidth: (f: any) => {
        if (f.properties.layer === 'section') return 4;
        return 1;
      },
      getPointRadius: (f: any) => {
        if (f.properties.layer === 'node') return 250;
        if (f.properties.layer === 'platform') return 120;
        return 100;
      },
      lineWidthMinPixels: 2,
      pointRadiusMinPixels: 4,
    })
  ];

  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', minHeight: 500,
      background: '#04070d', // Extremely dark background for the map
      backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      backgroundSize: '40px 40px', // Dark grid pattern
    }}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
        views={new MapView({ id: 'map', repeat: true })}
      >
        {/* Top Left: Title Widget */}
        <div style={{
          position: 'absolute', top: 20, left: 20,
          background: 'var(--gati-glass-bg)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--gati-border)', borderRadius: 12, padding: '12px 16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column', gap: 4
        }}>
          <h2 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#f1f5f9', display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
            Live Topology
          </h2>
          <span style={{ fontSize: 11, color: '#94a3b8' }}>Network rendering active</span>
        </div>

        {/* Top Right: System Metrics Widget */}
        <div style={{
          position: 'absolute', top: 20, right: 20,
          background: 'var(--gati-glass-bg)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--gati-border)', borderRadius: 12, padding: '16px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)', display: 'flex', gap: 24
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.05em' }}>ACTIVE TRAINS</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#e2e8f0', fontFamily: '"JetBrains Mono", monospace' }}>42</span>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.05em' }}>NETWORK LOAD</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#818cf8', fontFamily: '"JetBrains Mono", monospace' }}>78%</span>
          </div>
          <div style={{ width: 1, background: 'rgba(255,255,255,0.1)' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#94a3b8', letterSpacing: '0.05em' }}>ALERTS</span>
            <span style={{ fontSize: 20, fontWeight: 700, color: '#f59e0b', fontFamily: '"JetBrains Mono", monospace' }}>3</span>
          </div>
        </div>
      </DeckGL>
    </div>
  );
}
