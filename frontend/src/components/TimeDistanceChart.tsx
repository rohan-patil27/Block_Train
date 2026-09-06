'use client';
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TimeDistanceChart({ plan }: { plan: any }) {
  // A real implementation would parse the PlanItems into block sequences by train
  // For demo purposes, we will mock a simple chart data structure based on the plan items
  
  if (!plan || !plan.items) return <div>No plan data</div>;

  const data = [
    { time: '10:00', train1: 0, train2: 50 },
    { time: '10:15', train1: 15, train2: 45 },
    { time: '10:30', train1: 30, train2: 30 },
    { time: '10:45', train1: 45, train2: 15 },
    { time: '11:00', train1: 50, train2: 0 },
  ];

  return (
    <div className="w-full h-64 bg-slate-900 border border-slate-800 rounded-xl p-4">
      <h3 className="text-white text-sm font-semibold mb-4">Time-Distance Stringline</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="time" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" label={{ value: 'Distance (km)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
          <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none' }} />
          <Legend />
          <Line type="monotone" dataKey="train1" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="train2" stroke="#10b981" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
