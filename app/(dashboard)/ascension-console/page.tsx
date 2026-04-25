// app/(dashboard)/ascension-console/page.tsx

import React from "react";
import {
  Aperture,
  Sparkles,
  Network,
  Layers,
  Star,
  Infinity,
  ArrowRight,
  Globe2,
  GitBranch,
  Cpu,
} from "lucide-react";

/* ───────────────── TYPES ───────────────── */

type ConsoleCardProps = {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
};

type StatusCardProps = {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
};

type DirectiveRowProps = {
  label: string;
  description: string;
};

type NodeProps = {
  className?: string;
};

/* ───────────────── PAGE ───────────────── */

export default function AscensionConsolePage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Aperture className="h-6 w-6 text-[#F5D48A]" />
          <span>Ascension Console</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          The command chamber of the Ascension Layer. Issue cosmic directives,
          orchestrate engines, and shape universe‑scale evolution.
        </p>
      </header>

      {/* Meta Systems Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ConsoleCard
          title="World Builder Engine"
          description="Generate, expand, and evolve entire universes from a single seed."
          icon={Globe2}
          color="from-[#1A2A4F] to-[#243A6B]"
        />
        <ConsoleCard
          title="Civilization Engine"
          description="Simulate cultural, mythic, and economic evolution at scale."
          icon={Network}
          color="from-[#3A2A4F] to-[#5B3A7A]"
        />
        <ConsoleCard
          title="Cross‑Realm Engine"
          description="Model tensions, harmonics, and flows between realms."
          icon={Layers}
          color="from-[#4A3A2A] to-[#6B4F3A]"
        />
        <ConsoleCard
          title="Pantheon Engine"
          description="Invoke archetypes and apply resonance fields across worlds."
          icon={Star}
          color="from-[#2A3A4F] to-[#3B4F6B]"
        />
        <ConsoleCard
          title="Origin Law Engine"
          description="Define and apply foundational laws that govern all universes."
          icon={Infinity}
          color="from-[#5A3E2B] to-[#8C5F3A]"
        />
        <ConsoleCard
          title="System Intelligence"
          description="Analyze universe‑scale patterns and generate meta‑insights."
          icon={Cpu}
          color="from-[#C9A24F] to-[#FFB85C]"
        />
      </section>

      {/* Live System Status */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          System Status
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatusCard label="Active Engines" value="6" icon={Aperture} />
          <StatusCard label="Universe Threads" value="14" icon={GitBranch} />
          <StatusCard label="Origin Laws Loaded" value="27" icon={Infinity} />
        </div>
      </section>

      {/* Command Panel */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Cosmic Directives
        </h2>

        <div className="space-y-4">
          <DirectiveRow
            label="Generate New Universe"
            description="Seed a new realm‑aligned universe with origin presets."
          />
          <DirectiveRow
            label="Run Civilization Simulation"
            description="Execute multi‑layered evolution cycles across worlds."
          />
          <DirectiveRow
            label="Apply Pantheon Influence"
            description="Invoke archetypes and modulate mythic resonance."
          />
          <DirectiveRow
            label="Modify Origin Laws"
            description="Adjust foundational rules that govern all universes."
          />
        </div>
      </section>

      {/* Meta‑Layer Visualization */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Meta‑Layer Visualization
        </h2>

        <p className="text-sm text-slate-300 max-w-3xl">
          A high‑level visualization of universe‑scale interactions, engine
          activity, and mythic flows.
        </p>

        <div className="relative h-80 rounded-xl bg-black/70 border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <MetaDots />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <MetaNodes />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function ConsoleCard({ title, description, icon: Icon, color }: ConsoleCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/70 p-5 flex flex-col gap-3">
      <div className={`absolute inset-0 opacity-40 bg-gradient-to-br ${color} blur-3xl`} />
      <div className="relative flex items-center justify-between">
        <h3 className="text-sm font-semibold">{title}</h3>
        <div className="h-9 w-9 rounded-full border border-[#F5D48A55] bg-black/60 flex items-center justify-center">
          <Icon className="h-4 w-4 text-[#F5D48A]" />
        </div>
      </div>
      <p className="relative text-[11px] text-slate-300">{description}</p>
      <button className="relative text-[11px] text-[#F5D48A] hover:text-[#FFB85C] transition-colors flex items-center gap-1">
        <span>Open</span>
        <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  );
}

function StatusCard({ label, value, icon: Icon }: StatusCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/60 px-4 py-4 flex items-center gap-3">
      <div className="h-10 w-10 rounded-full border border-[#F5D48A55] bg-black/40 flex items-center justify-center">
        <Icon className="h-5 w-5 text-[#F5D48A]" />
      </div>
      <div>
        <div className="text-[11px] text-slate-400">{label}</div>
        <div className="text-sm font-semibold text-[#F5D48A]">{value}</div>
      </div>
    </div>
  );
}

function DirectiveRow({ label, description }: DirectiveRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/60 px-4 py-3">
      <div>
        <div className="text-xs font-medium text-slate-100">{label}</div>
        <div className="text-[11px] text-slate-400">{description}</div>
      </div>
      <ArrowRight className="h-4 w-4 text-[#F5D48A]" />
    </div>
  );
}

/* ───────────────── VISUALIZATION ───────────────── */

function MetaDots() {
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

function MetaNodes() {
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

function Node({ className }: NodeProps) {
  return (
    <div
      className={`absolute h-6 w-6 rounded-full bg-[#1A2A4F] border border-[#F5D48A88] shadow-[0_0_20px_rgba(36,58,107,0.8)] ${className}`}
    />
  );
}
