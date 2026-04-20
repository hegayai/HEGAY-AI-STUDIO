// app/(dashboard)/civilizations/page.tsx

import React from "react";
import { Network, Sparkles, Globe2, Star } from "lucide-react";

export default function CivilizationsPage() {
  return (
    <main className="px-8 py-10 space-y-10">
      {/* Page Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Network className="h-5 w-5 text-[#F5D48A]" />
          <span>Civilizations</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-xl">
          The living worlds shaped from your realms. Each civilization is a
          dynamic network of culture, myth, governance, and emotional physics.
        </p>
      </header>

      {/* Civilization Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <CivilizationCard
          name="Hybrid City‑Verse"
          realm="Ancestral Echoes"
          description="A mega‑city civilization where diaspora futures, mythic law, and cultural flux collide."
          color="from-[#C9A24F] to-[#FFB85C]"
        />
        <CivilizationCard
          name="Echo‑Spiral Dominion"
          realm="Mythic Constellations"
          description="A civilization governed by archetypal resonance and symbolic negotiation."
          color="from-[#1A2A4F] to-[#243A6B]"
        />
        <CivilizationCard
          name="Harmonic Coastline"
          realm="Cultural Harmonics"
          description="A civilization shaped by ritual, rhythm, and emotional wave‑patterns."
          color="from-[#3A2A4F] to-[#5B3A7A]"
        />
        <CivilizationCard
          name="Origin‑Bound Assembly"
          realm="Origin System"
          description="A civilization built on foundational laws, axioms, and cosmic governance."
          color="from-[#4A3A2A] to-[#6B4F3A]"
        />
        <CivilizationCard
          name="Flow‑Market Federation"
          realm="Governance Nexus"
          description="A civilization balancing economic flow, mythic obligation, and political tension."
          color="from-[#2A3A4F] to-[#3B4F6B]"
        />
        <CivilizationCard
          name="Sky‑Garden Continuum"
          realm="Cultural Harmonics"
          description="A civilization of floating districts, ritual gardens, and inter‑realm trade winds."
          color="from-[#5A3E2B] to-[#8C5F3A]"
        />
      </section>

      {/* Civilization Graph Preview */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Civilization Graph Overview
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          A high‑level view of how your civilizations connect, influence, and
          evolve. This graph reveals alliances, tensions, and mythic flows.
        </p>

        <div className="mt-4 rounded-xl bg-black/70 border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <GraphDots />
          </div>
          <div className="relative h-72 flex items-center justify-center">
            <GraphNodes />
          </div>
          <div className="relative border-t border-white/5 px-4 py-3 flex items-center justify-between text-[11px] text-slate-400">
            <span>
              Network Stability: <span className="text-[#F5D48A]">Balanced</span>
            </span>
            <button className="inline-flex items-center gap-1 text-[11px] text-[#F5D48A] hover:text-[#FFB85C] transition-colors">
              <Network className="h-3 w-3" />
              <span>Open Full Graph</span>
            </button>
          </div>
        </div>
      </section>

      {/* Civilization Stats */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Civilization Metrics
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <StatCard label="Active Civilizations" value="24" icon={Network} />
          <StatCard label="Pantheon Influence" value="9" icon={Star} />
          <StatCard label="Realm Connections" value="6" icon={Globe2} />
        </div>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function CivilizationCard({
  name,
  realm,
  description,
  color,
}: {
  name: string;
  realm: string;
  description: string;
  color: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/70 p-5 flex flex-col gap-3">
      <div
        className={`absolute inset-0 opacity-40 bg-gradient-to-br ${color} blur-3xl`}
      />
      <div className="relative flex items-center justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
            {realm}
          </div>
          <h3 className="text-sm font-semibold">{name}</h3>
        </div>
        <div className="h-9 w-9 rounded-full border border-[#F5D48A55] bg-black/60 flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-[#F5D48A]" />
        </div>
      </div>
      <p className="relative text-[11px] text-slate-300">{description}</p>
      <div className="relative flex items-center justify-between pt-1 text-[11px] text-slate-400">
        <span>
          Status: <span className="text-[#F5D48A]">Active</span>
        </span>
        <button className="text-[#F5D48A] hover:text-[#FFB85C] transition-colors">
          Open Civilization
        </button>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
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

/* ───────────────── GRAPH VISUALS ───────────────── */

function GraphDots() {
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

function GraphNodes() {
  return (
    <div className="relative w-full h-full">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-[#F5D48A33] border border-[#F5D48A88] shadow-[0_0_40px_rgba(245,212,138,0.6)]" />
      <NodeBubble className="left-[20%] top-[25%]" />
      <NodeBubble className="left-[70%] top-[30%]" />
      <NodeBubble className="left-[25%] top-[70%]" />
      <NodeBubble className="left-[75%] top-[65%]" />
    </div>
  );
}

function NodeBubble({ className }: { className?: string }) {
  return (
    <div
      className={`absolute h-5 w-5 rounded-full bg-[#1A2A4F] border border-[#F5D48A88] shadow-[0_0_20px_rgba(36,58,107,0.8)] ${className}`}
    />
  );
}
