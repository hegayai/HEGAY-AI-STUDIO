// app/(dashboard)/simulation/multiverse-navigator/page.tsx

import React from "react";
import {
  Globe2,
  Network,
  Star,
  Infinity,
  GitBranch,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function MultiverseNavigatorPage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Infinity className="h-6 w-6 text-[#F5D48A]" />
          <span>Multiverse Navigator</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Explore all universes, branches, realms, and mythic trajectories in a
          single cosmic map. Navigate between dimensions and observe their
          relationships.
        </p>
      </header>

      {/* Navigation Filters */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Filters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FilterBlock label="Universe Type" options={["All", "Prime", "Variant", "Forked", "Collapsed"]} />
          <FilterBlock label="Realm Density" options={["All", "Low", "Medium", "High"]} />
          <FilterBlock label="Pantheon Influence" options={["All", "Weak", "Moderate", "Strong"]} />
        </div>
      </section>

      {/* Multiverse Map */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Multiverse Map
        </h2>

        <p className="text-sm text-slate-300 max-w-3xl">
          A visual representation of all universes and their interconnections.
          Each node represents a universe; each line represents a mythic,
          cultural, or structural link.
        </p>

        <div className="relative h-[500px] rounded-xl bg-black/70 border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <MapDots />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <MapNodes />
          </div>
        </div>
      </section>

      {/* Universe List */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Universes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <UniverseCard
            name="Prime Universe"
            type="Prime"
            realms="12"
            branches="4"
            color="from-[#C9A24F] to-[#FFB85C]"
          />
          <UniverseCard
            name="Echo‑Spiral Variant"
            type="Variant"
            realms="7"
            branches="2"
            color="from-[#1A2A4F] to-[#243A6B]"
          />
          <UniverseCard
            name="Harmonic Drift"
            type="Forked"
            realms="9"
            branches="6"
            color="from-[#3A2A4F] to-[#5B3A7A]"
          />
          <UniverseCard
            name="Origin Collapse"
            type="Collapsed"
            realms="3"
            branches="0"
            color="from-[#4A3A2A] to-[#6B4F3A]"
          />
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Reset Filters
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Export Multiverse Map
        </button>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function FilterBlock({ label, options }) {
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

function UniverseCard({ name, type, realms, branches, color }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/70 p-5 flex flex-col gap-3">
      <div className={`absolute inset-0 opacity-40 bg-gradient-to-br ${color} blur-3xl`} />

      <div className="relative flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            {type}
          </div>
          <h3 className="text-sm font-semibold">{name}</h3>
        </div>
        <div className="h-9 w-9 rounded-full border border-[#F5D48A55] bg-black/60 flex items-center justify-center">
          <Globe2 className="h-4 w-4 text-[#F5D48A]" />
        </div>
      </div>

      <div className="relative text-[11px] text-slate-300">
        Realms: <span className="text-[#F5D48A]">{realms}</span>
      </div>
      <div className="relative text-[11px] text-slate-300">
        Branches: <span className="text-[#F5D48A]">{branches}</span>
      </div>

      <div className="relative text-[11px] text-[#F5D48A] flex items-center gap-1 hover:text-[#FFB85C] transition-colors">
        <span>Open Universe</span>
        <ArrowRight className="h-3 w-3" />
      </div>
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

function Node({ className }) {
  return (
    <div
      className={`absolute h-7 w-7 rounded-full bg-[#1A2A4F] border border-[#F5D48A88] shadow-[0_0_30px_rgba(36,58,107,0.8)] ${className}`}
    />
  );
}
