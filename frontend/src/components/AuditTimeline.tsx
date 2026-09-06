'use client';
import React from 'react';
import useSWR from 'swr';
import { Zap, Shield, CheckCircle2, XCircle, RefreshCw, ClipboardList, Clock, PlayCircle, AlertOctagon, RotateCcw } from 'lucide-react';

const ACTION_CONFIG: Record<string, { icon: React.ElementType; color: string; bg: string; border: string; label: string }> = {
  PLAN_GENERATED:           { icon: Zap,           color: '#60a5fa', bg: 'rgba(96,165,250,0.08)',  border: 'rgba(96,165,250,0.25)',  label: 'Plan Generated'         },
  PLAN_SAFETY_VALIDATED:    { icon: Shield,         color: '#34d399', bg: 'rgba(52,211,153,0.08)', border: 'rgba(52,211,153,0.25)',  label: 'Safety Validated'       },
  PLAN_APPROVED:            { icon: CheckCircle2,   color: '#10b981', bg: 'rgba(16,185,129,0.08)', border: 'rgba(16,185,129,0.30)',  label: 'Plan Approved'          },
  PLAN_REJECTED:            { icon: XCircle,        color: '#f87171', bg: 'rgba(248,113,113,0.08)',border: 'rgba(248,113,113,0.25)', label: 'Plan Rejected'          },
  REOPTIMIZATION_TRIGGERED: { icon: RefreshCw,      color: '#fbbf24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.25)', label: 'Re-optimization Triggered' },
  EXECUTION_STARTED:        { icon: PlayCircle,     color: '#818cf8', bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.25)', label: 'Execution Started'      },
  OVERRUN_TRIGGERED:        { icon: AlertOctagon,   color: '#f97316', bg: 'rgba(249,115,22,0.08)', border: 'rgba(249,115,22,0.25)', label: 'Overrun Injected'       },
  MACHINE_FAILURE_TRIGGERED:{ icon: AlertOctagon,   color: '#ef4444', bg: 'rgba(239,68,68,0.08)', border: 'rgba(239,68,68,0.25)', label: 'Machine Failure Injected' },
  EXECUTION_RESET:          { icon: RotateCcw,      color: '#94a3b8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.25)', label: 'Execution Reset'        },
};

const FALLBACK_CONFIG = { icon: ClipboardList, color: '#94a3b8', bg: 'rgba(148,163,184,0.06)', border: 'rgba(148,163,184,0.15)', label: 'Event' };

function formatDateTime(ts: string | null) {
  if (!ts) return { date: '—', time: '—' };
  const d = new Date(ts);
  if (isNaN(d.getTime())) return { date: '—', time: '—' };
  return {
    date: d.toLocaleDateString([], { month: 'short', day: 'numeric' }),
    time: d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
  };
}

function SkeletonRow() {
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', animation: 'pulse-dot 1.5s ease-in-out infinite' }} />
      </div>
      <div style={{ flex: 1, background: 'rgba(255,255,255,0.03)', borderRadius: 10, height: 64, animation: 'pulse-dot 1.5s ease-in-out infinite' }} />
    </div>
  );
}

export default function AuditTimeline({ fetcher }: { fetcher: any }) {
  const { data: auditLogs, error, isLoading: loading } = useSWR('/audit/', fetcher, {
    refreshInterval: 3000
  });

  if (loading) return (
    <div style={{
      background: 'var(--gati-surface)', border: '1px solid var(--gati-border)',
      borderRadius: 12, padding: '24px 24px', height: '100%', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 160, height: 20, background: 'rgba(255,255,255,0.05)', borderRadius: 6 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        {[...Array(4)].map((_, i) => <SkeletonRow key={i} />)}
      </div>
    </div>
  );

  if (!auditLogs || auditLogs.length === 0) return (
    <div style={{
      background: 'var(--gati-surface)', border: '1px solid var(--gati-border)',
      borderRadius: 12, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column', gap: 12,
    }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ClipboardList size={24} color="rgba(99,102,241,0.5)" />
      </div>
      <p style={{ margin: 0, color: '#64748b', fontSize: 14 }}>No audit events yet</p>
      <p style={{ margin: 0, color: '#475569', fontSize: 12 }}>Run the demo flow to generate audit logs</p>
    </div>
  );

  return (
    <div style={{
      background: 'var(--gati-surface)', border: '1px solid var(--gati-border)',
      borderRadius: 12, padding: 24, height: '100%', display: 'flex', flexDirection: 'column',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>
          Decision Audit Trail
        </h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Clock size={12} color="#64748b" />
          <span style={{ fontSize: 11, fontWeight: 600, color: '#94a3b8', background: 'rgba(255,255,255,0.04)', padding: '4px 12px', borderRadius: 12, border: '1px solid var(--gati-border)' }}>
            {auditLogs.length} EVENT{auditLogs.length !== 1 ? 'S' : ''}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div style={{ flex: 1, overflow: 'auto', paddingRight: 8 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {auditLogs.map((log: any, idx: number) => {
            const cfg = ACTION_CONFIG[log.action] || FALLBACK_CONFIG;
            const Icon = cfg.icon;
            const { date, time } = formatDateTime(log.timestamp);
            const isLast = idx === auditLogs.length - 1;
            return (
              <div
                key={idx}
                className={`animate-slide-left stagger-${Math.min(idx + 1, 5)}`}
                style={{ display: 'flex', gap: 16, alignItems: 'flex-start', position: 'relative' }}
              >
                {/* Timeline connector + dot */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, paddingTop: 2 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: cfg.bg,
                    border: `1px solid ${cfg.border}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 16px ${cfg.bg}, inset 0 0 8px rgba(255,255,255,0.1)`,
                  }}>
                    <Icon size={16} color={cfg.color} />
                  </div>
                  {!isLast && (
                    <div style={{
                      width: 2, flex: 1, minHeight: 32, marginTop: 4, marginBottom: 4,
                      background: 'linear-gradient(to bottom, rgba(99,102,241,0.4), rgba(99,102,241,0.05))',
                    }} />
                  )}
                </div>

                {/* Event Card */}
                <div style={{
                  flex: 1, marginBottom: isLast ? 0 : 16,
                  background: 'rgba(255,255,255,0.02)',
                  border: `1px solid rgba(255,255,255,0.06)`,
                  borderLeft: `3px solid ${cfg.color}`,
                  borderRadius: 10, padding: '14px 18px',
                  transition: 'border-color 0.2s',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 14, fontWeight: 700, color: cfg.color, letterSpacing: '0.03em' }}>{cfg.label}</span>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 11, color: '#64748b' }}>{date}</div>
                      <div style={{ fontSize: 11, color: '#94a3b8', fontVariantNumeric: 'tabular-nums', fontFamily: '"JetBrains Mono", monospace' }}>{time}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', fontSize: 12 }}>
                    {log.actor && (
                      <span style={{ color: '#64748b' }}>
                        Actor: <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{log.actor}</span>
                      </span>
                    )}
                    {log.result && (
                      <span style={{ color: '#64748b' }}>
                        Result: <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{log.result}</span>
                      </span>
                    )}
                  </div>

                  {log.reason && (
                    <div style={{
                      marginTop: 10, padding: '8px 12px',
                      background: 'rgba(255,255,255,0.03)',
                      borderLeft: '2px solid rgba(255,255,255,0.1)',
                      borderRadius: '0 8px 8px 0',
                      fontSize: 12, color: '#cbd5e1', lineHeight: 1.6,
                    }}>
                      {log.reason}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
