import React, { useState, useEffect } from 'react';
import { AlertTriangle, Play, RotateCcw, Loader2, Zap, Radio, Activity } from 'lucide-react';

function StatusBadge({ status }: { status: string }) {
  const cfg =
    status === 'RUNNING'           ? { bg: 'rgba(16,185,129,0.12)', border: 'rgba(16,185,129,0.3)', color: '#34d399', pulse: true } :
    status === 'AWAITING_APPROVAL' ? { bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)', color: '#fbbf24', pulse: true } :
                                     { bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.2)', color: '#94a3b8', pulse: false };
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      padding: '6px 14px', borderRadius: 20,
      background: cfg.bg, border: `1px solid ${cfg.border}`,
      color: cfg.color, fontWeight: 700, fontSize: 11,
      letterSpacing: '0.08em', boxShadow: `0 0 12px ${cfg.bg}`
    }}>
      <div style={{
        width: 8, height: 8, borderRadius: '50%', background: cfg.color,
        ...(cfg.pulse ? { animation: 'pulse-dot 1.5s ease-in-out infinite' } : {}),
      }} />
      {status}
    </div>
  );
}

function TelemetryCard({ t, onOverrun, onFail, disabled }: { t: any; onOverrun: () => void; onFail: () => void; disabled: boolean }) {
  const pct = Math.min(Math.max(t.progress_percent || 0, 0), 100);
  const isOverrun = t.actual_status === 'OVERRUN';
  const isFailed  = t.actual_status === 'FAILED';
  const barColor  = isFailed ? '#f43f5e' : isOverrun ? '#f59e0b' : '#10b981';

  return (
    <div style={{
      background: 'rgba(255,255,255,0.02)',
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      border: `1px solid ${isFailed ? 'rgba(244,63,94,0.3)' : isOverrun ? 'rgba(245,158,11,0.25)' : 'rgba(255,255,255,0.08)'}`,
      borderLeft: `4px solid ${barColor}`,
      borderRadius: 10, padding: '16px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      transition: 'border-color 0.3s',
      boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
    }}>
      {/* Left info */}
      <div style={{ minWidth: 0 }}>
        <p style={{ margin: 0, fontWeight: 700, fontSize: 14, color: '#f1f5f9', whiteSpace: 'nowrap', fontFamily: '"JetBrains Mono", monospace' }}>
          BLK_{t.block_request_id}
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 6, fontSize: 11, color: '#64748b' }}>
          <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            ELAPSED <span style={{ color: '#94a3b8', fontWeight: 600, fontFamily: '"JetBrains Mono", monospace' }}>{t.elapsed_minutes?.toFixed(1)}m</span>
          </span>
          <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            REMAINING <span style={{ color: '#94a3b8', fontWeight: 600, fontFamily: '"JetBrains Mono", monospace' }}>{t.expected_remaining_minutes?.toFixed(1)}m</span>
          </span>
        </div>
      </div>

      {/* Progress + status + buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
        {/* Progress bar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, alignItems: 'flex-end', width: 140 }}>
          <span style={{ fontSize: 10, fontWeight: 800, color: barColor, letterSpacing: '0.06em' }}>
            {t.actual_status}
          </span>
          <div style={{ width: '100%', height: 6, background: 'rgba(255,255,255,0.06)', borderRadius: 3, overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: `${pct}%`, borderRadius: 3,
              background: isFailed
                ? 'linear-gradient(90deg, #e11d48, #f43f5e)'
                : isOverrun
                ? 'linear-gradient(90deg, #d97706, #f59e0b)'
                : 'linear-gradient(90deg, #059669, #10b981)',
              transition: 'width 0.5s ease',
              boxShadow: `0 0 10px ${barColor}`,
            }} />
          </div>
          <span style={{ fontSize: 11, color: '#64748b', fontFamily: '"JetBrains Mono", monospace' }}>{pct.toFixed(0)}%</span>
        </div>

        {/* Trigger buttons */}
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            onClick={onOverrun}
            disabled={disabled}
            title="Simulate overrun"
            style={{
              padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
              border: '1px solid rgba(245,158,11,0.3)',
              background: 'rgba(245,158,11,0.1)',
              color: '#f59e0b',
              cursor: disabled ? 'not-allowed' : 'pointer',
              opacity: disabled ? 0.3 : 1,
              transition: 'all 0.2s',
            }}
          >
            OVERRUN
          </button>
          <button
            onClick={onFail}
            disabled={disabled}
            title="Simulate machine failure"
            style={{
              padding: '6px 12px', borderRadius: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.05em',
              border: '1px solid rgba(244,63,94,0.3)',
              background: 'rgba(244,63,94,0.1)',
              color: '#f43f5e',
              cursor: disabled ? 'not-allowed' : 'pointer',
              opacity: disabled ? 0.3 : 1,
              transition: 'all 0.2s',
            }}
          >
            FAIL
          </button>
        </div>
      </div>
    </div>
  );
}

export default function LiveExecutionView({ plan, fetcher, onApprovalRequested }: { plan: any; fetcher: any; onApprovalRequested: any }) {
  const [executionState, setExecutionState] = useState<any>(null);
  const [loading, setLoading]   = useState(false);
  const [polling, setPolling]   = useState(false);

  const startExecution = async () => {
    setLoading(true);
    try {
      const res = await fetcher(`/execution/start?plan_id=${plan.id}`, { method: 'POST' });
      setExecutionState({ execution_id: res.execution_id, status: 'RUNNING' });
      setPolling(true);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  const triggerOverrun = async (blockId: any) => {
    if (!executionState) return;
    await fetcher(`/execution/${executionState.execution_id}/trigger-overrun?block_request_id=${blockId}&delay_minutes=15`, { method: 'POST' });
  };

  const triggerMachineFailure = async (blockId: any, machineId: any) => {
    if (!executionState) return;
    await fetcher(`/execution/${executionState.execution_id}/trigger-machine-failure?block_request_id=${blockId}&machine_id=${machineId}`, { method: 'POST' });
  };

  const resetExecution = async () => {
    if (!executionState) return;
    await fetcher(`/execution/${executionState.execution_id}/reset`, { method: 'POST' });
    setExecutionState(null);
    setPolling(false);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (polling && executionState?.execution_id) {
      interval = setInterval(async () => {
        try {
          const res = await fetcher(`/execution/${executionState.execution_id}`);
          setExecutionState(res);
          if (res.status === 'AWAITING_APPROVAL') {
            setPolling(false);
            if (onApprovalRequested) {
              const disruption = res.events?.[res.events.length - 1];
              onApprovalRequested(res, disruption);
            }
          }
        } catch (e) { console.error(e); }
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [polling, executionState?.execution_id]);

  /* ── No session: launch screen ──────────────────────────── */
  if (!executionState) return (
    <div className="animate-fade-in" style={{
      height: '100%', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 24,
    }}>
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(16,185,129,0.05))',
        border: '1px solid rgba(99,102,241,0.4)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 0 40px rgba(99,102,241,0.2)',
      }}>
        <Activity size={36} color="#818cf8" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: 18, fontWeight: 700, color: '#f1f5f9', letterSpacing: '0.05em' }}>SYSTEM INITIALIZATION</p>
        <p style={{ margin: '8px 0 0', fontSize: 13, color: '#64748b' }}>
          Plan <span style={{ color: '#a5b4fc', fontFamily: '"JetBrains Mono", monospace' }}>{plan?.id}</span> is approved and awaiting execution.
        </p>
      </div>
      <button
        onClick={startExecution}
        disabled={loading}
        className="btn-shimmer"
        style={{
          padding: '14px 32px', borderRadius: 12,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          border: 'none', color: 'white', fontWeight: 800, fontSize: 14, letterSpacing: '0.05em',
          cursor: loading ? 'not-allowed' : 'pointer',
          display: 'flex', alignItems: 'center', gap: 10,
          boxShadow: '0 8px 32px rgba(99,102,241,0.4)',
          position: 'relative',
          opacity: loading ? 0.7 : 1,
        }}
      >
        {loading
          ? <><Loader2 size={18} style={{ animation: 'spin 1s linear infinite' }} /> INITIALIZING…</>
          : <><Play size={18} fill="currentColor" /> INITIATE SIMULATION</>
        }
      </button>
    </div>
  );

  /* ── Active session ─────────────────────────────────────── */
  const telemetryDeduped = Object.values(
    [...(executionState.telemetry || [])].slice(-30).reduce((acc: any, t: any) => {
      acc[t.block_request_id] = t;
      return acc;
    }, {})
  ).slice(0, 15) as any[];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 14, overflow: 'auto' }}>

      {/* Session header */}
      <div className="animate-slide-up" style={{
        background: 'var(--gati-surface)', border: '1px solid var(--gati-border)',
        borderRadius: 12, padding: '14px 18px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 10,
            background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(16,185,129,0.1))',
            border: '1px solid rgba(99,102,241,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Radio size={18} color="#6366f1" />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>
              Session #{executionState.execution_id}
            </h2>
            <p style={{ margin: 0, fontSize: 12, color: '#64748b' }}>
              Plan {executionState.plan_id} · v{executionState.plan_version}
            </p>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <StatusBadge status={executionState.status} />
          <button
            onClick={resetExecution}
            title="Reset session"
            style={{
              width: 34, height: 34, borderRadius: 8,
              background: 'rgba(255,255,255,0.04)', border: '1px solid var(--gati-border)',
              color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = '#e2e8f0'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = '#64748b'; }}
          >
            <RotateCcw size={15} />
          </button>
        </div>
      </div>

      {/* Event alerts */}
      {(executionState.events || []).map((ev: any, i: number) => (
        <div
          key={i}
          className="animate-slide-up"
          style={{
            padding: '12px 16px', borderRadius: 10,
            display: 'flex', alignItems: 'flex-start', gap: 12, flexShrink: 0,
            ...(ev.severity === 'CRITICAL'
              ? { background: 'rgba(244,63,94,0.08)', border: '1px solid rgba(244,63,94,0.35)', boxShadow: '0 0 16px rgba(244,63,94,0.1)' }
              : { background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.3)', boxShadow: '0 0 12px rgba(245,158,11,0.08)' }),
          }}
        >
          <AlertTriangle size={18} color={ev.severity === 'CRITICAL' ? '#f43f5e' : '#f59e0b'} style={{ flexShrink: 0, marginTop: 1 }} />
          <div>
            <h4 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: ev.severity === 'CRITICAL' ? '#fca5a5' : '#fde68a' }}>
              {ev.event_type?.replace(/_/g, ' ')} DETECTED
            </h4>
            <p style={{ margin: '4px 0 0', fontSize: 12, color: '#94a3b8', lineHeight: 1.5 }}>{ev.reason}</p>
          </div>
        </div>
      ))}

      {/* Re-optimization notice */}
      {executionState.status === 'AWAITING_APPROVAL' && (
        <div className="animate-slide-up" style={{
          padding: '12px 16px', borderRadius: 10,
          background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.3)',
          display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
        }}>
          <Zap size={18} color="#818cf8" style={{ flexShrink: 0 }} />
          <div>
            <h4 style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#a5b4fc' }}>Re-optimization Complete</h4>
            <p style={{ margin: '3px 0 0', fontSize: 12, color: '#64748b' }}>A revised plan is ready — navigate to Active Plans to review and approve.</p>
          </div>
        </div>
      )}

      {/* Live Telemetry */}
      <div className="animate-slide-up" style={{
        flex: 1, background: 'var(--gati-surface)', border: '1px solid var(--gati-border)',
        borderRadius: 12, overflow: 'hidden', display: 'flex', flexDirection: 'column', minHeight: 0,
      }}>
        <div style={{
          padding: '12px 16px', borderBottom: '1px solid var(--gati-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0,
        }}>
          <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#f1f5f9', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Activity size={15} color="#6366f1" /> Live Telemetry
          </h3>
          <span style={{ fontSize: 11, color: '#475569' }}>{telemetryDeduped.length} active block{telemetryDeduped.length !== 1 ? 's' : ''}</span>
        </div>
        <div style={{ flex: 1, overflow: 'auto', padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {telemetryDeduped.length === 0 ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#475569', fontSize: 13 }}>
              Waiting for telemetry data…
            </div>
          ) : telemetryDeduped.map((t: any, i: number) => (
            <TelemetryCard
              key={i}
              t={t}
              disabled={executionState.status !== 'RUNNING'}
              onOverrun={() => triggerOverrun(t.block_request_id)}
              onFail={() => triggerMachineFailure(t.block_request_id, t.machine_id || 1)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
