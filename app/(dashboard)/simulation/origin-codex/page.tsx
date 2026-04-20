// app/(dashboard)/simulation/origin-codex/page.tsx

import React from "react";
import {
  Infinity,
  Scale,
  Atom,
  Layers,
  Network,
  Star,
  GitBranch,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function OriginCodexPage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Infinity className="h-6 w-6 text-[#F5D48A]" />
          <span>Origin System Codex</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          The complete matrix of all Origin Laws, their categories, hierarchy,
          resonance fields, and cross‑layer effects across realms, civilizations,
          pantheon archetypes, and universes.
        </p>
      </header>

      {/* Law Categories */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-8">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Law Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <CategoryCard
            icon={Atom}
            title="Fundamental Constants"
            description="Base rules defining cosmic physics, emotional gravity, and symbolic resonance."
          />
          <CategoryCard
            icon={Scale}
            title="Balance Laws"
            description="Rules maintaining harmony between realms, civilizations, and mythic forces."
          />
          <CategoryCard
            icon={Layers}
            title="Structural Laws"
            description="Rules defining how universes form, evolve, branch, and collapse."
          />
        </div>
      </section>

      {/* Law List */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-8">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          All Origin Laws
        </h2>

        <div className="space-y-4">
          <LawRow name="Law of Harmonic Memory" />
          <LawRow name="Law of Symbolic Gravity" />
          <LawRow name="Law of Emotional Physics" />
          <LawRow name="Law of Mythic Continuity" />
          <LawRow name="Law of Archetypal Flow" />
        </div>
      </section>

      {/* Relationship Map */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Law Relationship Map
        </h2>

        <p className="text-sm text-slate-300 max-w-3xl">
          A visual representation of how Origin Laws interact, reinforce, or
          counterbalance each other across cosmic layers.
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

      {/* Cross‑Layer Effects */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-8">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Cross‑Layer Effects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <EffectCard
            icon={Layers}
            label="Realm Effects"
            description="How laws shape dimensional structure and mythic resonance."
          />
          <EffectCard
            icon={Network}
            label="Civilization Effects"
            description="How laws influence cultural evolution and societal dynamics."
          />
          <EffectCard
            icon={Star}
            label="Pantheon Effects"
            description="How laws interact with archetypal forces and symbolic fields."
          />
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Back to Origin Laws
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Export Codex
        </button>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function CategoryCard({ icon: Icon, title, description }) {
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

function LawRow({ name }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/60 px-4 py-3">
      <div className="text-sm text-slate-100">{name}</div>
      <ArrowRight className="h-4 w-4 text-[#F5D48A]" />
    </div>
  );
}

function EffectCard({ icon: Icon, label, description }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-5 py-5 space-y-2">
      <div className="h-10 w-10 rounded-full border border-[#F5D48A55] bg-black/40 flex items-center justify-center">
        <Icon className="h-5 w-5 text-[#F5D48A]" />
      </div>
      <div className="text-sm font-semibold text-slate-100">{label}</div>
      <div className="text-[11px] text-slate-400">{description}</div>
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
