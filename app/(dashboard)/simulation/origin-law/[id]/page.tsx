// app/(dashboard)/simulation/origin-law/[id]/page.tsx

import React from "react";
import {
  Infinity,
  Scale,
  GitBranch,
  ArrowRight,
  Star,
  Layers,
  Network,
  Sparkles,
  Atom,
  Flame,
} from "lucide-react";

export default function OriginLawDetailPage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Infinity className="h-6 w-6 text-[#F5D48A]" />
          <span>Origin Law Detail</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Explore the definition, purpose, cosmic domain, and multi‑layered
          influence of this foundational law.
        </p>
      </header>

      {/* Law Summary */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Law Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard
            icon={Atom}
            label="Law Name"
            value="Law of Harmonic Memory"
            description="Primary identity"
          />
          <SummaryCard
            icon={Scale}
            label="Domain"
            value="Memory, Resonance"
            description="Cosmic area of effect"
          />
          <SummaryCard
            icon={Flame}
            label="Influence Level"
            value="High"
            description="System‑wide impact"
          />
        </div>
      </section>

      {/* Law Definition */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Law Definition
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed">
          This law governs the persistence, transmission, and resonance of
          memory across realms and civilizations. It defines how emotional
          imprints, symbolic patterns, and mythic echoes propagate through the
          cosmic structure.
        </p>
      </section>

      {/* Realm Impact */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Realm Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <ImpactCard name="Ancestral Echoes" effect="Deep memory resonance" />
          <ImpactCard name="Mythic Constellations" effect="Symbolic alignment" />
          <ImpactCard name="Hybrid City‑Verse" effect="Cultural imprint flow" />
        </div>
      </section>

      {/* Civilization Impact */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Civilization Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <CivImpactCard name="Harmonic Coastline" effect="Collective memory cycles" />
          <CivImpactCard name="Flow‑Market Federation" effect="Symbolic trade patterns" />
          <CivImpactCard name="Sky‑Garden Continuum" effect="Mythic growth loops" />
        </div>
      </section>

      {/* Pantheon Interaction */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Pantheon Interaction
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfluenceCard name="Weaver of Echoes" level="Primary Conduit" />
          <InfluenceCard name="Architect of Flow" level="Secondary Resonance" />
          <InfluenceCard name="Oracle of Depth" level="Symbolic Interpreter" />
        </div>
      </section>

      {/* Symbolic Attributes */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Symbolic Attributes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AttributeCard label="Symbol" value="Golden Spiral" />
          <AttributeCard label="Energy Type" value="Harmonic Fire" />
          <AttributeCard label="Cognitive Field" value="Echo‑Memory" />
        </div>
      </section>

      {/* Timeline Snapshot */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Timeline Snapshot
        </h2>

        <div className="space-y-6">
          <TimelineEvent title="Law Forged" time="Epoch 0.2" />
          <TimelineEvent title="First Realm Application" time="Epoch 0.9" />
          <TimelineEvent title="Civilization Alignment" time="Epoch 1.4" />
          <TimelineEvent title="Pantheon Integration" time="Epoch 2.0" />
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Back to Pantheon
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Export Law Profile
        </button>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function SummaryCard({ icon: Icon, label, value, description }) {
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

function ImpactCard({ name, effect }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 space-y-1">
      <div className="text-sm font-semibold text-slate-100">{name}</div>
      <div className="text-xs text-slate-400">Effect</div>
      <div className="text-sm font-semibold text-[#F5D48A]">{effect}</div>
    </div>
  );
}

function CivImpactCard({ name, effect }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 space-y-1">
      <div className="text-sm font-semibold text-slate-100">{name}</div>
      <div className="text-xs text-slate-400">Effect</div>
      <div className="text-sm font-semibold text-[#F5D48A]">{effect}</div>
    </div>
  );
}

function InfluenceCard({ name, level }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 space-y-1">
      <div className="text-sm font-semibold text-slate-100">{name}</div>
      <div className="text-xs text-slate-400">Interaction</div>
      <div className="text-sm font-semibold text-[#F5D48A]">{level}</div>
    </div>
  );
}

function AttributeCard({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 space-y-1">
      <div className="text-sm font-semibold text-slate-100">{label}</div>
      <div className="text-sm font-semibold text-[#F5D48A]">{value}</div>
    </div>
  );
}

function TimelineEvent({ title, time }) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F5D48A55] to-transparent" />
      <div className="absolute left-2 top-1 h-5 w-5 rounded-full bg-[#111114] border border-[#F5D48A88] flex items-center justify-center">
        <GitBranch className="h-3 w-3 text-[#F5D48A]" />
      </div>
      <div className="space-y-1">
        <div className="text-sm font-semibold text-slate-100">{title}</div>
        <div className="text-[11px] text-slate-500">{time}</div>
      </div>
    </div>
  );
}
