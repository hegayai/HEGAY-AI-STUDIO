// app/(dashboard)/engines/origin-law-engine/page.tsx

import React from "react";
import {
  Infinity,
  Sparkles,
  Star,
  Layers,
  ArrowRight,
  Scale,
  Atom,
} from "lucide-react";

export default function OriginLawEnginePage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Infinity className="h-6 w-6 text-[#F5D48A]" />
          <span>Origin Law Engine</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Define foundational laws, axioms, constants, and cosmic rules that
          govern all universes, realms, civilizations, and mythic systems.
        </p>
      </header>

      {/* Law Creation Panel */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Create New Origin Law
        </h2>

        <input
          placeholder="Name of the law (e.g., Law of Harmonic Memory)"
          className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:border-[#F5D48A66] outline-none"
        />

        <textarea
          placeholder="Describe the law, its purpose, and how it shapes the universe..."
          className="w-full h-40 bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder-slate-500 focus:border-[#F5D48A66] outline-none"
        />

        <button className="px-4 py-2 rounded-full border border-[#F5D48A66] bg-[#F5D48A1A] text-[#F5D48A] text-sm hover:bg-[#F5D48A33] transition-all inline-flex items-center gap-2">
          <Sparkles className="h-4 w-4" />
          Forge Law
        </button>
      </section>

      {/* Law Output */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Forged Law
        </h2>

        <div className="space-y-4 text-sm text-slate-300">
          <OutputBlock title="Law Definition" />
          <OutputBlock title="Cosmic Purpose" />
          <OutputBlock title="Realm Impact" />
          <OutputBlock title="Civilization Impact" />
          <OutputBlock title="Pantheon Interaction" />
        </div>
      </section>

      {/* Law Categories */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Law Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CategoryCard
            icon={Atom}
            title="Fundamental Constants"
            description="Base rules that define cosmic physics, emotional gravity, and symbolic resonance."
          />
          <CategoryCard
            icon={Scale}
            title="Balance Laws"
            description="Rules that maintain harmony between realms, civilizations, and mythic forces."
          />
          <CategoryCard
            icon={Layers}
            title="Structural Laws"
            description="Rules that define how universes form, evolve, and collapse."
          />
        </div>
      </section>

      {/* Visualization */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Law Resonance Map
        </h2>

        <p className="text-sm text-slate-300 max-w-3xl">
          A visual representation of how the forged law radiates influence across
          realms, civilizations, and mythic layers.
        </p>

        <div className="relative h-80 rounded-xl bg-black/70 border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <LawDots />
          </div>
          <div className="relative h-full flex items-center justify-center">
            <LawNodes />
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Clear
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Save Law
        </button>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function OutputBlock({ title }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 space-y-1">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
        {title}
      </div>
      <div className="text-sm text-slate-300">Generated content will appear here.</div>
    </div>
  );
}

function CategoryCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 space-y-2">
      <div className="h-10 w-10 rounded-full border border-[#F5D48A55] bg-black/40 flex items-center justify-center">
        <Icon className="h-5 w-5 text-[#F5D48A]" />
      </div>
      <div className="text-sm font-semibold text-slate-100">{title}</div>
      <div className="text-[11px] text-slate-400">{description}</div>
    </div>
  );
}

/* ───────────────── VISUALIZATION ───────────────── */

function LawDots() {
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

function LawNodes() {
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

function Node({ className }) {
  return (
    <div
      className={`absolute h-6 w-6 rounded-full bg-[#1A2A4F] border border-[#F5D48A88] shadow-[0_0_20px_rgba(36,58,107,0.8)] ${className}`}
    />
  );
}
