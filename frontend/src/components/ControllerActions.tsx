'use client';
import React, { useState } from 'react';
import { Check, X, Loader2, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function ControllerActions({
  planId, onApprove, onReject,
}: {
  planId: string;
  onApprove: (id: string) => Promise<void>;
  onReject:  (id: string) => Promise<void>;
}) {
  const [loading, setLoading] = useState<string | null>(null);

  const handleApprove = async () => {
    setLoading('approve');
    try { await onApprove(planId); } finally { setLoading(null); }
  };

  const handleReject = async () => {
    setLoading('reject');
    try { await onReject(planId); } finally { setLoading(null); }
  };

  return (
    <div className="animate-slide-up" style={{
      borderRadius: 12,
      border: '1px solid rgba(245,158,11,0.25)',
      background: 'linear-gradient(135deg, rgba(245,158,11,0.05) 0%, rgba(13,17,23,0.9) 60%)',
      padding: '16px 20px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
      flexShrink: 0,
    }}>
      {/* Left: attention indicator + text */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <div style={{
          width: 40, height: 40, borderRadius: '50%',
          background: 'rgba(245,158,11,0.1)',
          border: '1px solid rgba(245,158,11,0.3)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          animation: 'pulse-dot 2s ease-in-out infinite',
        }}>
          <AlertTriangle size={18} color="#f59e0b" />
        </div>
        <div>
          <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: '#fcd34d', letterSpacing: '-0.1px' }}>
            Controller Decision Required
          </p>
          <p style={{ margin: '3px 0 0', fontSize: 12, color: '#64748b', lineHeight: 1.4 }}>
            Review plan, safety validation, and AI explanations before approving.
          </p>
        </div>
      </div>

      {/* Right: Action buttons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        {/* Reject */}
        <button
          onClick={handleReject}
          disabled={loading !== null}
          style={{
            padding: '9px 18px',
            borderRadius: 8,
            border: '1px solid rgba(244,63,94,0.35)',
            background: 'rgba(244,63,94,0.06)',
            color: '#f87171',
            fontWeight: 600,
            fontSize: 13,
            cursor: loading !== null ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', gap: 7,
            transition: 'all 0.2s ease',
            opacity: loading !== null ? 0.5 : 1,
          }}
          onMouseEnter={e => {
            if (loading !== null) return;
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(244,63,94,0.12)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(244,63,94,0.5)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 16px rgba(244,63,94,0.15)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(244,63,94,0.06)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(244,63,94,0.35)';
            (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
          }}
        >
          {loading === 'reject'
            ? <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} />
            : <X size={15} />}
          Reject
        </button>

        {/* Approve */}
        <button
          onClick={handleApprove}
          disabled={loading !== null}
          className="btn-shimmer"
          style={{
            padding: '9px 20px',
            borderRadius: 8,
            border: '1px solid rgba(16,185,129,0.4)',
            background: 'linear-gradient(135deg, #059669, #10b981)',
            color: 'white',
            fontWeight: 700,
            fontSize: 13,
            cursor: loading !== null ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', gap: 7,
            boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
            transition: 'all 0.2s ease',
            opacity: loading !== null ? 0.6 : 1,
            position: 'relative',
          }}
          onMouseEnter={e => {
            if (loading !== null) return;
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 28px rgba(16,185,129,0.45)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px rgba(16,185,129,0.3)';
            (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
          }}
        >
          {loading === 'approve'
            ? <Loader2 size={15} style={{ animation: 'spin 1s linear infinite' }} />
            : <ShieldCheck size={15} />}
          Approve & Execute
        </button>
      </div>
    </div>
  );
}
