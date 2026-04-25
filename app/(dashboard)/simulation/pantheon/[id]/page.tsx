// app/(dashboard)/simulation/pantheon/[id]/page.tsx

import React from "react";
import {
  Star,
  Sparkles,
  Infinity,
  GitBranch,
  ArrowRight,
  Activity,
  Eye,
  Flame,
  Feather,
  Brain,
} from "lucide-react";

export default function PantheonDetailPage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Star className="h-6 w-6 text-[#F5D48A]" />
          <span>Pantheon Archetype</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Explore the mythic identity, resonance field, symbolic attributes,
          influence patterns, and cosmic role of this archetype.
        </p>
      </header>

      {/* Archetype Summary */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Archetype Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard
            icon={Eye}
            label="Mythic Role"
            value="The Weaver of Echoes"
            description="Primary archetypal identity"
          />
          <SummaryCard
            icon={Flame}
            label="Resonance Level"
            value="High"
            description="Influence intensity"
          />
          <SummaryCard
            icon={Infinity}
            label="Domains"
            value="Memory, Flow, Symbolism"
            description="Cosmic areas of influence"
          />
        </div>
      </section>

      {/* Archetype Description */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Archetype Description
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed">
          This archetype governs memory, emotional resonance, and symbolic
          continuity. It shapes the flow of meaning across realms and
          civilizations, weaving connections between mythic events and cultural
          evolution.
        </p>
      </section>

      {/* Symbolic Attributes */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Symbolic Attributes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AttributeCard icon={Feather} label="Symbol" value="Golden Thread" />
          <AttributeCard icon={Brain} label="Cognitive Field" value="Echo‑Memory" />
          <AttributeCard icon={Flame} label="Energy Type" value="Harmonic Fire" />
        </div>
      </section>

      {/* Influence Across Realms */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Realm Influence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <InfluenceCard name="Ancestral Echoes" level="High" />
          <InfluenceCard name="Mythic Constellations" level="Moderate" />
          <InfluenceCard name="Hybrid City‑Verse" level="Low" />
        </div>
      </section>

      {/* Influence Across Civilizations */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Civilization Influence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <CivInfluenceCard name="Harmonic Coastline" effect="Cultural Memory" />
          <CivInfluenceCard name="Flow‑Market Federation" effect="Symbolic Trade" />
          <CivInfluenceCard name="Sky‑Garden Continuum" effect="Mythic Growth" />
        </div>
      </section>

      {/* Origin Laws Connected */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Connected Origin Laws
        </h2>

        <div className="space-y-4">
          <LawRow name="Law of Harmonic Memory" />
          <LawRow name="Law of Symbolic Gravity" />
        </div>
      </section>

      {/* Timeline Snapshot */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Timeline Snapshot
        </h2>

        <div className="space-y-6">
          <TimelineEvent title="Archetype Awakens" time="Epoch 0.8" />
          <TimelineEvent title="First Invocation" time="Epoch 1.2" />
          <TimelineEvent title="Realm Resonance Peak" time="Epoch 1.9" />
          <TimelineEvent title="Civilization Alignment" time="Epoch 2.3" />
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Back to Civilization
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Export Archetype Profile
        </button>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

type SummaryCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  description: string;
};

function SummaryCard({ icon: Icon, label, value, description }: SummaryCardProps) {
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

type AttributeCardProps = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

function AttributeCard({ icon: Icon, label, value }: AttributeCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 space-y-1">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full border border-[#F5D48A55] bg-black/40 flex items-center justify-center">
          <Icon className="h-5 w-5 text-[#F5D48A]" />
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-100">{label}</div>
          <div className="text-sm text-[#F5D48A]">{value}</div>
        </div>
      </div>
    </div>
  );
}

type InfluenceCardProps = {
  name: string;
  level: string;
};

function InfluenceCard({ name, level }: InfluenceCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 space-y-1">
      <div className="text-sm font-semibold text-slate-100">{name}</div>
      <div className="text-xs text-slate-400">Influence Level</div>
      <div className="text-sm font-semibold text-[#F5D48A]">{level}</div>
    </div>
  );
}

type CivInfluenceCardProps = {
  name: string;
  effect: string;
};

function CivInfluenceCard({ name, effect }: CivInfluenceCardProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-4 space-y-1">
      <div className="text-sm font-semibold text-slate-100">{name}</div>
      <div className="text-xs text-slate-400">Effect</div>
      <div className="text-sm font-semibold text-[#F5D48A]">{effect}</div>
    </div>
  );
}

type LawRowProps = {
  name: string;
};

function LawRow({ name }: LawRowProps) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/60 px-4 py-3">
      <div className="text-sm text-slate-100">{name}</div>
      <ArrowRight className="h-4 w-4 text-[#F5D48A]" />
    </div>
  );
}

type TimelineEventProps = {
  title: string;
  time: string;
};

function TimelineEvent({ title, time }: TimelineEventProps) {
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
