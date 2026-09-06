'use client';

import React, { useState } from 'react';
import useSWR from 'swr';
import NetworkMap from '../../components/NetworkMap';
import PlanView from '../../components/PlanView';
import SafetyExplanationPanel from '../../components/SafetyExplanationPanel';
import AuditTimeline from '../../components/AuditTimeline';
import ControllerActions from '../../components/ControllerActions';
import LiveExecutionView from '../../components/LiveExecutionView';
import {
  Activity, ShieldCheck, Map, Clock, AlertTriangle, Play,
  Train, Zap, RotateCcw, Loader2, ChevronRight, Radio
} from 'lucide-react';

const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';
const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || (isProduction ? '/api/v1' : 'http://localhost:8000/api/v1');
let cachedToken: string | null = null;

const RULE_METADATA: Record<string, { name: string; hard_or_soft: string }> = {
  'RULE-001': { name: 'Line-Clear / Block Logic',           hard_or_soft: 'HARD' },
  'RULE-002': { name: 'HOER Crew Working-Hour Constraint',  hard_or_soft: 'HARD' },
  'RULE-003': { name: 'Braking Distance vs Permitted Speed',hard_or_soft: 'HARD' },
  'RULE-004': { name: 'Loop/Berthing Length',               hard_or_soft: 'SOFT' },
  'RULE-005': { name: 'Level-Crossing Gate Allowance',      hard_or_soft: 'SOFT' },
  'RULE-006': { name: 'Low-Confidence Data Guard',          hard_or_soft: 'SOFT' },
};

async function fetcher(url: string, init?: RequestInit) {
  if (!cachedToken) {
    const fd = new URLSearchParams();
    fd.append('username', 'controller1');
    fd.append('password', 'pass');
    const authRes = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: fd.toString(),
    });
    if (!authRes.ok) throw new Error('Auth failed');
    const authData = await authRes.json();
    cachedToken = authData.access_token;
  }
  const res = await fetch(`${API_BASE}${url}`, {
    ...init,
    headers: { ...init?.headers, Authorization: `Bearer ${cachedToken}` },
  });
  if (!res.ok) throw new Error('Fetch failed');
  return res.json();
}

type Tab = 'map' | 'plans' | 'safety' | 'audit' | 'execution';

const NAV_ITEMS: { id: Tab; label: string; icon: React.ElementType; desc: string }[] = [
  { id: 'map',       label: 'Network Map',       icon: Map,           desc: 'Live topology view'     },
  { id: 'plans',     label: 'Active Plans',       icon: Clock,         desc: 'Schedule management'   },
  { id: 'safety',    label: 'Safety Validation',  icon: ShieldCheck,   desc: 'Rule compliance'       },
  { id: 'execution', label: 'Live Execution',     icon: Play,          desc: 'Simulation control'    },
  { id: 'audit',     label: 'Audit Trail',        icon: AlertTriangle, desc: 'Decision history'      },
];

const TAB_TITLES: Record<Tab, string> = {
  map:       'Network Topology',
  plans:     'Active Train Plans',
  safety:    'Safety Validation',
  execution: 'Live Execution',
  audit:     'Decision Audit Trail',
};

function EmptyState({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle: string }) {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-4 animate-fade-in">
      <div style={{
        width: 72, height: 72, borderRadius: '50%',
        background: 'rgba(99,102,241,0.08)',
        border: '1px solid rgba(99,102,241,0.2)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={30} color="rgba(99,102,241,0.6)" />
      </div>
      <div style={{ textAlign: 'center' }}>
        <p style={{ color: '#94a3b8', fontWeight: 500, fontSize: 15 }}>{title}</p>
        <p style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>{subtitle}</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const { data: topology, error: topError } = useSWR('/topology/', fetcher);
  const [activeTab, setActiveTab] = useState<Tab>('map');
  const [demoPlan, setDemoPlan]   = useState<any>(null);
  const [demoLoading, setDemoLoading] = useState(false);
  const [expandedRuleIdx, setExpandedRuleIdx] = useState<number | null>(null);

  const runDemoFlow = async () => {
    setDemoLoading(true);
    try {
      const data = await fetcher('/plans/demo', { method: 'GET' });
      setDemoPlan(data);
      setActiveTab('plans');
    } catch (err) {
      console.error(err);
    } finally {
      setDemoLoading(false);
    }
  };

  const handleApprove = async (planId: string) => {
    await fetcher(`/plans/${planId}/approve`, { method: 'POST' });
    setActiveTab('execution');
  };

  const handleReject = async (planId: string) => {
    await fetcher(`/plans/${planId}/reject`, { method: 'POST' });
    setDemoPlan(null);
    setActiveTab('map');
  };

  return (
    <div style={{
      display: 'flex', height: '100vh',
      background: 'var(--gati-bg)',
      color: '#e2e8f0',
      fontFamily: 'var(--gati-font)',
      overflow: 'hidden',
    }}>

      {/* ─── Sidebar ──────────────────────────────────────────── */}
      <aside style={{
        width: 240,
        background: 'rgba(13,17,23,0.65)',
        borderRight: '1px solid var(--gati-border)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        boxShadow: '4px 0 32px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        position: 'relative',
        zIndex: 10,
      }}>

        {/* Subtle top gradient accent */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: 'var(--gati-grad-primary)',
        }} />

        {/* Logo */}
        <div style={{
          padding: '24px 20px 20px',
          borderBottom: '1px solid var(--gati-border)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 10,
              background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 20px rgba(99,102,241,0.5)',
              flexShrink: 0,
            }}>
              <Train size={20} color="white" />
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px', color: '#f1f5f9' }}>
                Gatidhara
              </h1>
              <p style={{ margin: 0, fontSize: 10, color: '#818cf8', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Operations Control
              </p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav style={{ flex: 1, padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {NAV_ITEMS.map((item, i) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`animate-slide-left stagger-${i + 1}`}
                style={{
                  width: '100%',
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 14px',
                  borderRadius: 10,
                  border: '1px solid',
                  borderColor: isActive ? 'rgba(99,102,241,0.3)' : 'transparent',
                  borderLeft: isActive ? '3px solid #818cf8' : '3px solid transparent',
                  background: isActive
                    ? 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.05))'
                    : 'transparent',
                  color: isActive ? '#c7d2fe' : '#64748b',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? 'inset 0 0 20px rgba(99,102,241,0.05), 0 4px 12px rgba(0,0,0,0.1)' : 'none',
                }}
                onMouseEnter={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.03)';
                    (e.currentTarget as HTMLButtonElement).style.color = '#94a3b8';
                  }
                }}
                onMouseLeave={e => {
                  if (!isActive) {
                    (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
                    (e.currentTarget as HTMLButtonElement).style.color = '#64748b';
                  }
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 7,
                  background: isActive ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.04)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Icon size={15} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1.2 }}>{item.label}</div>
                  <div style={{ fontSize: 10, color: '#475569', marginTop: 1 }}>{item.desc}</div>
                </div>
                {isActive && <ChevronRight size={12} style={{ marginLeft: 'auto', color: '#6366f1', flexShrink: 0 }} />}
              </button>
            );
          })}
        </nav>

        {/* Bottom Actions */}
        <div style={{ padding: '12px 10px 16px', borderTop: '1px solid var(--gati-border)', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button
            onClick={runDemoFlow}
            disabled={demoLoading}
            className="btn-shimmer"
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 8,
              border: 'none',
              background: 'linear-gradient(135deg, #059669, #10b981)',
              color: 'white',
              fontWeight: 600,
              fontSize: 13,
              cursor: demoLoading ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
              boxShadow: '0 4px 16px rgba(16,185,129,0.3)',
              opacity: demoLoading ? 0.7 : 1,
              transition: 'all 0.2s ease',
              position: 'relative',
            }}
          >
            {demoLoading
              ? <><Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} /> Running…</>
              : <><Zap size={14} /> Run Demo Flow</>
            }
          </button>

          <button
            onClick={async () => {
              if (confirm('Reset demo to seed state?')) {
                await fetcher('/demo/reset', { method: 'POST' });
                setDemoPlan(null);
              }
            }}
            style={{
              width: '100%',
              padding: '9px 14px',
              borderRadius: 8,
              border: '1px solid rgba(255,255,255,0.06)',
              background: 'rgba(255,255,255,0.03)',
              color: '#64748b',
              fontWeight: 500,
              fontSize: 12,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(244,63,94,0.3)';
              (e.currentTarget as HTMLButtonElement).style.color = '#f87171';
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(244,63,94,0.05)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.06)';
              (e.currentTarget as HTMLButtonElement).style.color = '#64748b';
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.03)';
            }}
          >
            <RotateCcw size={12} /> Reset Demo
          </button>

          <p style={{ margin: '6px 4px 0', fontSize: 9.5, color: '#334155', lineHeight: 1.5, textAlign: 'center' }}>
            Synthetic simulation only. Not connected to real railway systems.
          </p>
        </div>
      </aside>

      {/* ─── Main Content ─────────────────────────────────────── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>

        {/* Header */}
        <header style={{
          height: 56,
          background: 'rgba(13,17,23,0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--gati-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 24px',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, color: '#475569' }}>Dashboard</span>
            <ChevronRight size={12} color="#334155" />
            <span style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>
              {TAB_TITLES[activeTab]}
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            {/* System status */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 20, padding: '4px 12px' }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#10b981', animation: 'pulse-dot 2s ease-in-out infinite' }} />
              <span style={{ fontSize: 11, fontWeight: 600, color: '#10b981', letterSpacing: '0.05em' }}>SYSTEM ONLINE</span>
            </div>
            {/* Broadcast icon */}
            <div style={{ color: '#6366f1', opacity: 0.7 }}>
              <Radio size={16} />
            </div>
          </div>
        </header>

        {/* Tab Content */}
        <main style={{ flex: 1, overflow: 'auto', padding: 20, minHeight: 0 }}>

          {/* MAP */}
          {activeTab === 'map' && (
            <div key="map" className="animate-fade-in" style={{ height: '100%', borderRadius: 12, overflow: 'hidden', border: '1px solid var(--gati-border)', boxShadow: '0 4px 32px rgba(0,0,0,0.4)', position: 'relative' }}>
              {!topology && !topError && (
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--gati-surface)', gap: 10 }}>
                  <Loader2 size={20} color="#6366f1" style={{ animation: 'spin 1s linear infinite' }} />
                  <span style={{ color: '#64748b', fontSize: 14 }}>Loading network topology…</span>
                </div>
              )}
              {topology && <NetworkMap topology={topology} />}
            </div>
          )}

          {/* PLANS */}
          {activeTab === 'plans' && demoPlan && (
            <div key="plans" className="animate-slide-up" style={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <PlanView plan={demoPlan.plan} onCreateNew={runDemoFlow} />
              <ControllerActions planId={demoPlan.plan.id} onApprove={handleApprove} onReject={handleReject} />
            </div>
          )}
          {activeTab === 'plans' && !demoPlan && (
            <div key="plans-empty" className="animate-fade-in" style={{ height: '100%' }}>
              <EmptyState icon={Clock} title="No active plan" subtitle='Click "Run Demo Flow" in the sidebar to generate a train plan.' />
            </div>
          )}

          {/* SAFETY */}
          {activeTab === 'safety' && demoPlan && (
            <div key="safety" className="animate-slide-up" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, height: '100%' }}>
              {/* Recent Safety Checks panel */}
              <div style={{ background: 'var(--gati-surface)', border: '1px solid var(--gati-border)', borderRadius: 12, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--gati-border)' }}>
                  <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: '#f1f5f9' }}>Recent Safety Checks</h3>
                </div>
                <div style={{ flex: 1, overflow: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {/* The active check (demoPlan) */}
                  <div style={{
                    background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.3)',
                    borderRadius: 8, padding: '14px 16px', cursor: 'pointer',
                    display: 'flex', flexDirection: 'column', gap: 8,
                    boxShadow: '0 0 12px rgba(99,102,241,0.1)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, color: '#e2e8f0', fontSize: 14 }}>SV-{demoPlan.plan.id?.split('-')[1] || '882'}</span>
                      <div style={{
                        padding: '2px 8px', borderRadius: 10, fontWeight: 700, fontSize: 10, letterSpacing: '0.05em',
                        ...(demoPlan.safety_result.status.includes('PASS')
                          ? { background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.25)' }
                          : { background: 'rgba(244,63,94,0.1)', color: '#f43f5e', border: '1px solid rgba(244,63,94,0.25)' }),
                      }}>
                        {demoPlan.safety_result.status}
                      </div>
                    </div>
                    <div style={{ fontSize: 12, color: '#94a3b8' }}>
                      {new Date(demoPlan.safety_result.validation_timestamp || Date.now()).toLocaleString()}
                    </div>
                    <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 500 }}>
                      Route: {demoPlan.plan.route || 'HUB-N to TRN-809'}
                    </div>
                  </div>

                  {/* Mock previous checks */}
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 8, padding: '14px 16px', opacity: 0.7 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ fontWeight: 700, color: '#e2e8f0', fontSize: 14 }}>SV-881</span>
                      <div style={{ padding: '2px 8px', borderRadius: 10, fontWeight: 700, fontSize: 10, letterSpacing: '0.05em', background: 'rgba(16,185,129,0.1)', color: '#10b981', border: '1px solid rgba(16,185,129,0.25)' }}>PASS</div>
                    </div>
                    <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 8 }}>Just now</div>
                    <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 500 }}>Route: Central to East Hub</div>
                  </div>
                  
                  <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 8, padding: '14px 16px', opacity: 0.7 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                      <span style={{ fontWeight: 700, color: '#e2e8f0', fontSize: 14 }}>SV-880</span>
                      <div style={{ padding: '2px 8px', borderRadius: 10, fontWeight: 700, fontSize: 10, letterSpacing: '0.05em', background: 'rgba(245,158,11,0.1)', color: '#fbbf24', border: '1px solid rgba(245,158,11,0.25)' }}>WARNING</div>
                    </div>
                    <div style={{ fontSize: 12, color: '#94a3b8', marginBottom: 8 }}>5 mins ago</div>
                    <div style={{ fontSize: 13, color: '#cbd5e1', fontWeight: 500 }}>Route: South Yard to North Main</div>
                  </div>
                </div>
              </div>

              <SafetyExplanationPanel explanation={demoPlan.explanation} safetyResult={demoPlan.safety_result} />
            </div>
          )}
          {activeTab === 'safety' && !demoPlan && (
            <div key="safety-empty" className="animate-fade-in" style={{ height: '100%' }}>
              <EmptyState icon={ShieldCheck} title="No safety data" subtitle='Run the demo flow to see safety validation results.' />
            </div>
          )}

          {/* AUDIT */}
          {activeTab === 'audit' && (
            <div key="audit" className="animate-fade-in" style={{ height: '100%' }}>
              <AuditTimeline fetcher={fetcher} />
            </div>
          )}

          {/* EXECUTION */}
          {activeTab === 'execution' && demoPlan && (
            <div key="execution" className="animate-slide-up" style={{ height: '100%' }}>
              <LiveExecutionView
                plan={demoPlan.plan}
                fetcher={fetcher}
                onApprovalRequested={(res: any, disruption: any) => {
                  setDemoPlan((prev: any) => ({
                    ...prev,
                    plan: res.result?.revised_plan || prev.plan,
                    safety_result: res.result?.safety_result || prev.safety_result,
                    explanation: res.result?.explanation || prev.explanation,
                    disruption,
                  }));
                }}
              />
            </div>
          )}
          {activeTab === 'execution' && !demoPlan && (
            <div key="execution-empty" className="animate-fade-in" style={{ height: '100%' }}>
              <EmptyState icon={Play} title="No plan loaded" subtitle='Approve a plan first, or click "Run Demo Flow" to get started.' />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
