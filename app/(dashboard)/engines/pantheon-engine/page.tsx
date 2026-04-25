// app/(dashboard)/engines/pantheon-engine/page.tsx

import React from "react";
import {
  Star,
  Sparkles,
  Brain,
  Eye,
  Flame,
  Feather,
  ArrowRight,
} from "lucide-react";

export default function PantheonEnginePage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Star className="h-6 w-6 text-[#F5D48A]" />
          <span>Pantheon Engine</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Invoke archetypes, apply resonance fields, and shape mythic influence
          across realms and civilizations.
        </p>
      </header>

      {/* Archetype Selection */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Select Archetype
        </h2>

        <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-slate-200 focus:border-[#F5D48A66] outline-none">
          <option>Select an archetype...</option>
          <option>Weaver of Echoes</option>
          <option>Architect of Flow</option>
          <option>Keeper of Harmonies</option>
          <option>Oracle of Depth</option>
          <option>Bearer of Sparks</option>
          <option>Guardian of Thresholds</option>
        </select>

        <button className="px-4 py-2 rounded-full border border-[#F5D48A66] bg-[#F5D48A1A] text-[#F5D48A] text-sm hover:bg-[#F5D48A33] transition-all inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Invoke Archetype
        </button>
      </section>

      {/* Resonance Output */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Resonance Field
        </h2>

        <div className="space-y-4 text-sm text-slate-300">
          <OutputBlock title="Mythic Influence" />
          <OutputBlock title="Cultural Resonance" />
          <OutputBlock title="Emotional Physics" />
          <OutputBlock title="Symbolic Gravity" />
          <OutputBlock title="Cross‑Realm Impact" />
        </div>
      </section>

      {/* Visualization */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Archetype Resonance Map
        </h2>

        <p className="text-sm text-slate-300 max-w-3xl">
          A visual representation of how the invoked archetype radiates influence
          across realms, civilizations, and mythic layers.
        </p>

        <div className="relative h-80 rounded-xl bg-black/70 border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <ResonanceDots />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <ResonanceNodes />
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Clear
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Save Invocation
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
        Generated resonance will appear here.
      </div>
    </div>
  );
}

/* ───────────────── VISUALIZATION ───────────────── */

function ResonanceDots() {
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

function ResonanceNodes() {
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
