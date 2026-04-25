// app/(dashboard)/simulation/universe/page.tsx

import React from "react";
import {
  Globe2,
  Network,
  Star,
  Infinity,
  Sparkles,
  Activity,
  ArrowRight,
} from "lucide-react";

export default function UniverseSimulationPage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Globe2 className="h-6 w-6 text-[#F5D48A]" />
          <span>Universe Simulation</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Observe universe‑scale interactions, realm dynamics, civilization
          evolution, pantheon influence, and origin law effects in real time.
        </p>
      </header>

      {/* Simulation Controls */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Simulation Controls
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <ControlBlock label="Speed" options={["0.5x", "1x", "2x", "4x"]} />
          <ControlBlock
            label="Focus Layer"
            options={["Realms", "Civilizations", "Pantheon", "Origin Laws"]}
          />
          <ControlBlock
            label="View Mode"
            options={["Map", "Graph", "Energy Field", "Timeline"]}
          />
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button className="px-4 py-2 rounded-full border border-[#F5D48A66] bg-[#F5D48A1A] text-[#F5D48A] text-sm hover:bg-[#F5D48A33] transition-all">
            Start Simulation
          </button>
          <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
            Pause
          </button>
        </div>
      </section>

      {/* Simulation Display */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Simulation View
        </h2>

        <p className="text-sm text-slate-300 max-w-3xl">
          A dynamic visualization of universe‑scale interactions across realms,
          civilizations, pantheon forces, and origin laws.
        </p>

        <div className="relative h-96 rounded-xl bg-black/70 border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <SimDots />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <SimNodes />
          </div>
        </div>
      </section>

      {/* Live Metrics */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Live Metrics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MetricCard
            icon={Activity}
            label="Universe Activity"
            value="92%"
            description="Overall systemic motion"
          />
          <MetricCard
            icon={Network}
            label="Realm Interactions"
            value="68%"
            description="Cross‑realm harmonics"
          />
          <MetricCard
            icon={Star}
            label="Pantheon Influence"
            value="81%"
            description="Archetypal resonance"
          />
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Clear
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Export Snapshot
        </button>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

type ControlBlockProps = {
  label: string;
  options: string[];
};

function ControlBlock({ label, options }: ControlBlockProps) {
  return (
    <div className="space-y-2">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
        {label}
      </div>
      <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-slate-200 focus:border-[#F5D48A66] outline-none">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
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

function SimDots() {
  const dots = Array.from({ length: 120 });
  return (
    <svg className="w-full h-full" preserveAspectRatio="none">
      {dots.map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 100 + "%"}
          cy={Math.random() * 100 + "%"}
          r={Math.random() * 1.4 + 0.3}
          fill="rgba(148,163,184,0.35)"
        />
      ))}
    </svg>
  );
}

type NodeProps = {
  className?: string;
};

function SimNodes() {
  return (
    <div className="relative w-full h-full">
      <Node className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Node className="left-[18%] top-[22%]" />
      <Node className="left-[72%] top-[28%]" />
      <Node className="left-[24%] top-[72%]" />
      <Node className="left-[78%] top-[66%]" />
    </div>
  );
}

function Node({ className }: NodeProps) {
  return (
    <div
      className={`absolute h-7 w-7 rounded-full bg-[#1A2A4F] border border-[#F5D48A88] shadow-[0_0_30px_rgba(36,58,107,0.8)] ${className}`}
    />
  );
}
