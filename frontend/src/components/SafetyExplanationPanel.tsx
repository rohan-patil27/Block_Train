'use client';
import React from 'react';
import { Brain, FileText, AlertCircle } from 'lucide-react';

export default function SafetyExplanationPanel({ explanation, safetyResult }: { explanation: any; safetyResult?: any }) {
  if (!explanation) return (
    <div style={{
      background: 'var(--gati-surface)', border: '1px solid var(--gati-border)',
      borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#475569', fontSize: 13,
    }}>
      No explanation available
    </div>
  );

  return (
    <div className="animate-slide-up" style={{
      background: 'var(--gati-surface)', border: '1px solid var(--gati-border)',
      borderRadius: 12, padding: 24, height: '100%', display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, flexShrink: 0 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 16px rgba(99,102,241,0.15)'
        }}>
          <Brain size={18} color="#818cf8" />
        </div>
        <div>
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: '#f1f5f9' }}>Validation Detail</h3>
          <p style={{ margin: 0, fontSize: 12, color: '#64748b' }}>AI Analysis & Technical Payload</p>
        </div>
      </div>

      <div style={{ flex: 1, overflow: 'auto', display: 'flex', flexDirection: 'column', gap: 24, paddingRight: 4 }}>
        
        {/* AI Diagnostic Panel */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.03))',
          border: '1px solid rgba(99,102,241,0.2)',
          borderLeft: '4px solid #6366f1',
          borderRadius: 8, padding: 20,
          fontSize: 14, color: '#c7d2fe', lineHeight: 1.7,
          boxShadow: 'inset 0 0 20px rgba(99,102,241,0.05), 0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#818cf8', letterSpacing: '0.05em' }}>AI DIAGNOSTIC REASONING</span>
          </div>
          
          <div style={{ marginBottom: explanation.root_cause ? 16 : 0 }}>
            {explanation.decision_summary || 'No decision summary provided.'}
          </div>

          {explanation.root_cause && (
            <div style={{ 
              paddingLeft: 12, borderLeft: '2px solid rgba(99,102,241,0.3)', 
              color: '#a5b4fc', fontSize: 13, marginBottom: explanation.synergy ? 12 : 0
            }}>
              <strong>Root Cause:</strong> {explanation.root_cause}
            </div>
          )}
          
          {explanation.synergy && (
            <div style={{ 
              paddingLeft: 12, borderLeft: '2px solid rgba(16,185,129,0.3)', 
              color: '#6ee7b7', fontSize: 13 
            }}>
              <strong>Synergy:</strong> {explanation.synergy}
            </div>
          )}

          {explanation.safety_summary && (
            <div style={{ 
              marginTop: 16, padding: '10px 14px', background: 'rgba(16,185,129,0.08)', 
              borderRadius: 8, border: '1px solid rgba(16,185,129,0.2)',
              color: '#6ee7b7', fontSize: 13, display: 'flex', alignItems: 'flex-start', gap: 8
            }}>
              <AlertCircle size={16} color="#10b981" style={{ flexShrink: 0, marginTop: 2 }} />
              <span>{explanation.safety_summary}</span>
            </div>
          )}
        </div>

        {/* Validation Findings */}
        {safetyResult && safetyResult.violations && safetyResult.violations.length > 0 && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <FileText size={14} color="#94a3b8" />
              <span style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', letterSpacing: '0.05em' }}>TECHNICAL FINDINGS</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {safetyResult.violations.map((v: any, idx: number) => {
                const isHigh = v.severity === 'HIGH';
                return (
                  <div key={idx} style={{
                    background: isHigh ? 'rgba(244,63,94,0.05)' : 'rgba(245,158,11,0.05)',
                    border: `1px solid ${isHigh ? 'rgba(244,63,94,0.2)' : 'rgba(245,158,11,0.2)'}`,
                    borderRadius: 8, padding: '12px 14px',
                    display: 'flex', flexDirection: 'column', gap: 6
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <AlertCircle size={14} color={isHigh ? '#f87171' : '#fbbf24'} />
                        <span style={{ fontWeight: 600, color: '#e2e8f0', fontSize: 13 }}>{v.rule_id}</span>
                      </div>
                      <span style={{
                        fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 10,
                        background: isHigh ? 'rgba(244,63,94,0.15)' : 'rgba(245,158,11,0.15)',
                        color: isHigh ? '#f87171' : '#fbbf24', letterSpacing: '0.05em'
                      }}>
                        {v.severity}
                      </span>
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.5, paddingLeft: 22 }}>
                      {v.explanation}
                    </div>
                    {v.plan_item_id && (
                      <div style={{ fontSize: 11, color: '#64748b', paddingLeft: 22, marginTop: 4 }}>
                        Affected Item: <span style={{ color: '#a5b4fc' }}>{v.plan_item_id}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
