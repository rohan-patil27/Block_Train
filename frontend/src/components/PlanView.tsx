'use client';
import React from 'react';
import { Plus, Zap, Activity, Clock, MapPin, CheckCircle2, Calendar } from 'lucide-react';

// Mock sparkline SVG
const Sparkline = ({ color }: { color: string }) => (
  <svg width="100%" height="24" viewBox="0 0 100 24" preserveAspectRatio="none">
    <path
      d="M0 20 Q 10 10, 20 15 T 40 10 T 60 18 T 80 8 T 100 12"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0 20 Q 10 10, 20 15 T 40 10 T 60 18 T 80 8 T 100 12 L 100 24 L 0 24 Z"
      fill={`url(#gradient-${color.replace('#', '')})`}
      opacity="0.2"
    />
    <defs>
      <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={color} stopOpacity="1" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

function StatusPill({ status }: { status: string }) {
  let cfg = { bg: 'rgba(255,255,255,0.1)', border: 'rgba(255,255,255,0.2)', color: '#cbd5e1' };
  
  if (status.includes('ACTIVE') || status.includes('APPROVED')) {
    cfg = { bg: 'rgba(59,130,246,0.15)', border: 'rgba(59,130,246,0.3)', color: '#60a5fa' };
  } else if (status.includes('VALIDATING') || status.includes('SCHEDULED')) {
    cfg = { bg: 'rgba(245,158,11,0.15)', border: 'rgba(245,158,11,0.3)', color: '#fbbf24' };
  } else if (status.includes('LIVE')) {
    cfg = { bg: 'rgba(16,185,129,0.15)', border: 'rgba(16,185,129,0.3)', color: '#34d399' };
  }

  return (
    <span style={{
      fontSize: 10, fontWeight: 700, padding: '4px 10px', borderRadius: 12,
      background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.color,
      letterSpacing: '0.06em', textTransform: 'uppercase',
    }}>
      {status}
    </span>
  );
}

function PlanCard({ plan, isDemo = false }: { plan: any; isDemo?: boolean }) {
  return (
    <div className="animate-slide-up" style={{
      background: 'rgba(22,27,34,0.4)',
      backdropFilter: 'blur(16px)',
      border: isDemo ? '1px solid rgba(99,102,241,0.4)' : '1px solid rgba(255,255,255,0.08)',
      borderRadius: 12,
      padding: 20,
      display: 'flex', flexDirection: 'column', gap: 16,
      boxShadow: isDemo ? '0 0 24px rgba(99,102,241,0.15)' : 'none',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <Zap size={14} color={isDemo ? '#818cf8' : '#94a3b8'} style={{ flexShrink: 0 }} />
            <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#f1f5f9', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {plan.id?.length > 12 ? `PL-${plan.id.substring(0, 8)}` : plan.id}
            </h3>
          </div>
          <div style={{ fontSize: 11, color: '#64748b', letterSpacing: '0.05em' }}>
            {plan.items?.length || 0} SCHEDULED BLOCKS
          </div>
        </div>
        <StatusPill status={plan.status || 'SCHEDULED'} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, padding: '12px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div>
          <div style={{ fontSize: 10, color: '#475569', textTransform: 'uppercase', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={10} /> Maintenance Zone</div>
          <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 500 }}>
            {plan.route || 'North-West Corridor'}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 10, color: '#475569', textTransform: 'uppercase', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={10} /> Downtime Window</div>
          <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 500 }}>
            {plan.eta || '3.5 Hours'}
          </div>
        </div>
      </div>

      <div>
        <div style={{ fontSize: 10, color: '#475569', textTransform: 'uppercase', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 4 }}><Activity size={10} /> Asset Availability Impact</div>
        <Sparkline color={isDemo ? '#6366f1' : '#475569'} />
      </div>
    </div>
  );
}

export default function PlanView({ plan, onCreateNew }: { plan: any; onCreateNew?: () => void }) {
  if (!plan) return null;

  // Mock a few extra plans for the grid UI, placing the real demo plan first
  const activePlans = [
    { ...plan, status: 'VALIDATING', route: 'Eastern Mainline', eta: '4.0 Hours' },
    { id: 'PL-804', status: 'ACTIVE', items: [1, 2, 3, 4], route: 'South Hub Section', eta: '2.5 Hours' },
    { id: 'PL-801', status: 'APPROVED', items: [1, 2], route: 'Central Depot', eta: '6.0 Hours' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, height: '100%' }}>
      {/* Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexShrink: 0 }}>
        <div>
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#f1f5f9' }}>Maintenance Block Plans</h2>
          <p style={{ margin: '4px 0 12px', fontSize: 13, color: '#64748b' }}>AI-Optimized schedules integrating TMS, SMMS, and TDMS defects</p>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 10px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 12, width: 'fit-content' }}>
            <CheckCircle2 size={12} color="#10b981" />
            <span style={{ fontSize: 11, color: '#34d399', fontWeight: 700, letterSpacing: '0.04em' }}>LIVE DATA SYNCED</span>
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Horizon Toggle */}
          <div style={{ display: 'flex', background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8, padding: 4 }}>
             <button style={{ padding: '6px 12px', background: 'rgba(99,102,241,0.2)', color: '#818cf8', border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
               <Calendar size={12} /> Weekly Horizon
             </button>
             <button style={{ padding: '6px 12px', background: 'transparent', color: '#64748b', border: 'none', borderRadius: 6, fontSize: 12, fontWeight: 500, cursor: 'pointer', transition: 'all 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#f8fafc'} onMouseOut={e => e.currentTarget.style.color = '#64748b'}>
               Monthly Horizon
             </button>
          </div>

          <button
            onClick={onCreateNew}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '10px 16px', borderRadius: 8,
              background: 'rgba(99,102,241,0.15)',
              border: '1px solid rgba(99,102,241,0.3)',
              color: '#818cf8', fontWeight: 600, fontSize: 13,
              cursor: 'pointer', transition: 'all 0.2s ease',
              boxShadow: '0 4px 12px rgba(99,102,241,0.1)',
            }}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(99,102,241,0.25)'}
            onMouseOut={e => e.currentTarget.style.background = 'rgba(99,102,241,0.15)'}
          >
            <Plus size={16} /> Generate New Plan
          </button>
        </div>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 16, overflow: 'auto', paddingBottom: 16 }}>
        {activePlans.map((p, idx) => (
          <PlanCard key={p.id} plan={p} isDemo={idx === 0} />
        ))}
      </div>
    </div>
  );
}
