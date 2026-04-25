// app/(dashboard)/simulation/system-intelligence-codex/page.tsx

import React from "react";
import {
  Cpu,
  Network,
  Globe2,
  Star,
  Infinity,
  GitBranch,
  ArrowRight,
  Activity,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function SystemIntelligenceCodexPage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Cpu className="h-6 w-6 text-[#F5D48A]" />
          <span>System Intelligence Codex</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          The unified intelligence matrix showing patterns, flows, tensions,
          predictions, and cross‑universe analytics across all realms,
          civilizations, pantheon forces, and origin laws.
        </p>
      </header>

      {/* Intelligence Categories */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-8">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Intelligence Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            icon={Activity}
            title="System Activity"
            description="Macro‑level motion, energy, and structural shifts across universes."
          />
          <CategoryCard
            icon={Network}
            title="Realm Dynamics"
            description="Cross‑realm harmonics, tensions, and flow patterns."
          />
          <CategoryCard
            icon={Star}
            title="Pantheon Influence"
            description="Archetypal resonance fields and symbolic pressure zones."
          />
        </div>
      </section>

      {/* Intelligence Map */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Intelligence Map
        </h2>

        <p className="text-sm text-slate-300 max-w-3xl">
          A visual representation of system‑wide patterns, mythic flows,
          structural tensions, and predictive trajectories across all universes.
        </p>

        <div className="relative h-[450px] rounded-xl bg-black/70 border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <MapDots />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <MapNodes />
          </div>
        </div>
      </section>

      {/* Predictive Metrics */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-8">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Predictive Metrics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MetricCard
            icon={BarChart3}
            label="Stability Forecast"
            value="78%"
            description="Projected systemic stability across universes"
          />
          <MetricCard
            icon={Globe2}
            label="Expansion Probability"
            value="64%"
            description="Likelihood of new universe branches forming"
          />
          <MetricCard
            icon={Infinity}
            label="Law Resonance"
            value="82%"
            description="Strength of origin law influence across layers"
          />
        </div>
      </section>

      {/* Cross‑Layer Intelligence */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-8">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Cross‑Layer Intelligence
        </h2>

        <div className="space-y-4">
          <IntelligenceRow
            title="Realm Drift"
            description="Realms shifting symbolic alignment due to pantheon resonance."
          />
          <IntelligenceRow
            title="Civilization Trajectory"
            description="Cultural evolution patterns influenced by emotional physics."
          />
          <IntelligenceRow
            title="Pantheon Pressure Zones"
            description="Archetypal forces exerting symbolic gravity on universe clusters."
          />
          <IntelligenceRow
            title="Origin Law Interference"
            description="Laws overlapping or counterbalancing across cosmic layers."
          />
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Back to Intelligence
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Export Intelligence Codex
        </button>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

type CategoryCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
};

function CategoryCard({ icon: Icon, title, description }: CategoryCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-5 py-5 space-y-2">
      <div className="h-10 w-10 rounded-full border border-[#F5D48A55] bg-black/40 flex items-center justify-center">
        <Icon className="h-5 w-5 text-[#F5D48A]" />
      </div>
      <div className="text-sm font-semibold text-slate-100">{title}</div>
      <div className="text-[11px] text-slate-400">{description}</div>
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
    <div className="rounded-xl border border-white/10 bg-black/40 px-5 py-5 space-y-1">
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

type IntelligenceRowProps = {
  title: string;
  description: string;
};

function IntelligenceRow({ title, description }: IntelligenceRowProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/60 px-4 py-3 space-y-1">
      <div className="text-sm font-semibold text-slate-100">{title}</div>
      <div className="text-xs text-slate-400">{description}</div>
    </div>
  );
}

/* ───────────────── VISUALIZATION ───────────────── */

function MapDots() {
  const dots = Array.from({ length: 150 });
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

function MapNodes() {
  return (
    <div className="relative w-full h-full">
      <Node className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      <Node className="left-[20%] top-[25%]" />
      <Node className="left-[75%] top-[30%]" />
      <Node className="left-[25%] top-[75%]" />
      <Node className="left-[80%] top-[65%]" />
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
