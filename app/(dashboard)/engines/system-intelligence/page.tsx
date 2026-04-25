// app/(dashboard)/engines/system-intelligence/page.tsx

import React from "react";
import {
  Cpu,
  Network,
  Globe2,
  Star,
  Infinity,
  Sparkles,
  ArrowRight,
  Activity,
  BarChart3,
} from "lucide-react";

export default function SystemIntelligenceEnginePage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Cpu className="h-6 w-6 text-[#F5D48A]" />
          <span>System Intelligence Engine</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Analyze universe‑scale patterns, detect mythic flows, measure realm
          tensions, and generate high‑level insights across all layers of Hegay OS.
        </p>
      </header>

      {/* Analysis Input */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Intelligence Query
        </h2>

        <textarea
          placeholder="Describe what you want the system to analyze (e.g., realm tension, civilization drift, pantheon influence)..."
          className="w-full h-40 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-[#F5D48A66] outline-none"
        />

        <button className="px-4 py-2 rounded-full border border-[#F5D48A66] bg-[#F5D48A1A] text-[#F5D48A] text-sm hover:bg-[#F5D48A33] transition-all inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Run Analysis
        </button>
      </section>

      {/* Intelligence Output */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Intelligence Report
        </h2>

        <div className="space-y-4 text-sm text-slate-300">
          <OutputBlock title="Primary Insight" />
          <OutputBlock title="Realm Dynamics" />
          <OutputBlock title="Civilization Trajectories" />
          <OutputBlock title="Pantheon Influence" />
          <OutputBlock title="Origin Law Interactions" />
        </div>
      </section>

      {/* Metrics Grid */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          System Metrics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard
            icon={Activity}
            label="System Activity"
            value="87%"
            description="Overall universe‑scale activity"
          />
          <MetricCard
            icon={Network}
            label="Realm Connectivity"
            value="62%"
            description="Cross‑realm interaction density"
          />
          <MetricCard
            icon={Star}
            label="Pantheon Resonance"
            value="74%"
            description="Archetypal influence strength"
          />
        </div>
      </section>

      {/* Visualization */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Intelligence Map
        </h2>

        <p className="text-sm text-slate-300 max-w-3xl">
          A visual representation of system‑wide patterns, mythic flows, and
          cross‑layer interactions.
        </p>

        <div className="relative h-80 rounded-xl bg-black/70 border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <IntelligenceDots />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <IntelligenceNodes />
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Clear
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Save Report
        </button>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function OutputBlock({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 space-y-1">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
        {title}
      </div>
      <div className="text-sm text-slate-300">
        Generated insight will appear here.
      </div>
    </div>
  );
}

type MetricCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  description: string;
};

function MetricCard({ icon: Icon, label, value, description }: MetricCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 space-y-1">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full border border-[#F5D48A55] bg-black/40 flex items-center justify-center">
          <Icon className="h-5 w-5 text-[#F5D48A]" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-100">{label}</div>
          <div className="text-xs text-slate-400">{description}</div>
        </div>
      </div>
      <div className="text-sm font-semibold text-[#F5D48A] pl-14">{value}</div>
    </div>
  );
}

/* ───────────────── VISUALIZATION ───────────────── */

function IntelligenceDots() {
  const dots = Array.from({ length: 80 });
  return (
    <svg className="w-full h-full" preserveAspectRatio="none">
      {dots.map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 100 + "%"}
          cy={Math.random() * 100 + "%"}
          r={Math.random() * 1.2 + 0.3}
          fill="rgba(148,163,184,0.35)"
        />
      ))}
    </svg>
  );
}

function IntelligenceNodes() {
  return (
    <div className="relative w-full h-full">
      <Node className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Node className="left-[20%] top-[25%]" />
      <Node className="left-[70%] top-[30%]" />
      <Node className="left-[25%] top-[70%]" />
      <Node className="left-[75%] top-[65%]" />
    </div>
  );
}

function Node({ className }: { className: string }) {
  return (
    <div
      className={`absolute h-6 w-6 rounded-full bg-[#1A2A4F] border border-[#F5D48A88] shadow-[0_0_20px_rgba(36,58,107,0.8)] ${className}`}
    />
  );
}
