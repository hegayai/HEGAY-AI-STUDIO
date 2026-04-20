// app/(dashboard)/ascension/page.tsx

import React from "react";
import {
  Sparkles,
  Layers,
  Globe2,
  Star,
  Network,
  Aperture,
  Infinity,
  ArrowRight,
} from "lucide-react";

export default function AscensionPage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Page Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Aperture className="h-6 w-6 text-[#F5D48A]" />
          <span>Ascension Layer</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          The meta‑layer of Hegay OS. This is where realms, civilizations,
          pantheon forces, and origin laws converge into a unified creative
          architecture.
        </p>
      </header>

      {/* Ascension Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <AscensionCard
          title="Ascension Console"
          description="The command chamber for meta‑operations, system‑wide orchestration, and cosmic directives."
          icon={Aperture}
          color="from-[#C9A24F] to-[#FFB85C]"
        />
        <AscensionCard
          title="World Builder"
          description="Shape, expand, and evolve entire universes from a single seed or mythic directive."
          icon={Globe2}
          color="from-[#1A2A4F] to-[#243A6B]"
        />
        <AscensionCard
          title="Civilization Engine"
          description="Generate, simulate, and refine civilizations across cultural, mythic, and economic dimensions."
          icon={Network}
          color="from-[#3A2A4F] to-[#5B3A7A]"
        />
        <AscensionCard
          title="Cross‑Realm Engine"
          description="Model interactions, tensions, and harmonics between realms and civilizations."
          icon={Layers}
          color="from-[#4A3A2A] to-[#6B4F3A]"
        />
        <AscensionCard
          title="Pantheon Engine"
          description="Invoke archetypes, apply resonance fields, and shape mythic influence across worlds."
          icon={Star}
          color="from-[#2A3A4F] to-[#3B4F6B]"
        />
        <AscensionCard
          title="Origin Presets"
          description="Foundational laws, axioms, and templates for universe creation and cosmic governance."
          icon={Infinity}
          color="from-[#5A3E2B] to-[#8C5F3A]"
        />
      </section>

      {/* Meta‑Layer Overview */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Meta‑Layer Overview
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          The Ascension Layer is the highest tier of Hegay OS. It governs the
          orchestration of realms, civilizations, pantheon forces, and origin
          laws. This is where creators operate at the scale of universes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <StatCard label="Meta Engines" value="6" icon={Aperture} />
          <StatCard label="Active Universes" value="14" icon={Globe2} />
          <StatCard label="Origin Laws" value="27" icon={Infinity} />
        </div>
      </section>

      {/* Ascension Pathways */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Ascension Pathways
        </h2>

        <div className="space-y-4">
          <PathwayRow
            label="Enter Ascension Console"
            description="Issue cosmic directives and orchestrate system‑wide evolution."
          />
          <PathwayRow
            label="Open Civilization Engine"
            description="Generate, simulate, and refine civilizations at scale."
          />
          <PathwayRow
            label="Invoke Pantheon Engine"
            description="Apply archetypal resonance and mythic influence."
          />
          <PathwayRow
            label="Access Origin Presets"
            description="Define foundational laws and universe templates."
          />
        </div>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function AscensionCard({
  title,
  description,
  icon: Icon,
  color,
}: {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/70 p-5 flex flex-col gap-3">
      <div
        className={`absolute inset-0 opacity-40 bg-gradient-to-br ${color} blur-3xl`}
      />
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

function PathwayRow({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
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
