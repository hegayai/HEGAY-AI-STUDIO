// app/(dashboard)/engines/cross-realm/page.tsx

import React from "react";
import {
  Layers,
  Globe2,
  Network,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function CrossRealmEnginePage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Layers className="h-6 w-6 text-[#F5D48A]" />
          <span>Cross‑Realm Engine</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Model interactions, tensions, harmonics, and flows between realms and
          civilizations. This engine reveals how worlds influence each other.
        </p>
      </header>

      {/* Realm Selection */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Select Realms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <SelectBox label="Primary Realm" />
          <SelectBox label="Secondary Realm" />
        </div>

        <button className="px-4 py-2 rounded-full border border-[#F5D48A66] bg-[#F5D48A1A] text-[#F5D48A] text-sm hover:bg-[#F5D48A33] transition-all inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Analyze Interaction
        </button>
      </section>

      {/* Interaction Output */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Interaction Analysis
        </h2>

        <div className="space-y-4 text-sm text-slate-300">
          <OutputBlock title="Cultural Overlap" />
          <OutputBlock title="Mythic Resonance" />
          <OutputBlock title="Governance Tension" />
          <OutputBlock title="Economic Flow" />
          <OutputBlock title="Narrative Gravity" />
        </div>
      </section>

      {/* Visualization */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Realm Interaction Map
        </h2>

        <p className="text-sm text-slate-300 max-w-3xl">
          A visual representation of how the selected realms influence each
          other across mythic, cultural, and systemic dimensions.
        </p>

        <div className="relative h-80 rounded-xl bg-black/70 border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <InteractionDots />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <InteractionNodes />
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Clear
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Save Interaction
        </button>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function SelectBox({ label }: { label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
        {label}
      </div>
      <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-slate-200 focus:border-[#F5D48A66] outline-none">
        <option>Select a realm...</option>
        <option>Ancestral Echoes</option>
        <option>Mythic Constellations</option>
        <option>Hybrid City‑Verse</option>
        <option>Origin System</option>
        <option>Governance Nexus</option>
        <option>Cultural Harmonics</option>
      </select>
    </div>
  );
}

function OutputBlock({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 space-y-1">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
        {title}
      </div>
      <div className="text-sm text-slate-300">
        Generated analysis will appear here.
      </div>
    </div>
  );
}

/* ───────────────── VISUALIZATION ───────────────── */

function InteractionDots() {
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

function InteractionNodes() {
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
