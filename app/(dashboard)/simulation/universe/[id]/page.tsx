// app/(dashboard)/simulation/universe/[id]/page.tsx

import React from "react";
import {
  Globe2,
  Network,
  Star,
  Infinity,
  GitBranch,
  Layers,
  Sparkles,
  ArrowRight,
  Activity,
} from "lucide-react";

export default function UniverseDetailPage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Globe2 className="h-6 w-6 text-[#F5D48A]" />
          <span>Universe Detail</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Explore the structure, evolution, realms, civilizations, pantheon
          influence, and origin laws of this universe.
        </p>
      </header>

      {/* Universe Summary */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Universe Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard
            icon={Layers}
            label="Realms"
            value="12"
            description="Active dimensional layers"
          />
          <SummaryCard
            icon={Network}
            label="Civilizations"
            value="7"
            description="Cultural systems evolving"
          />
          <SummaryCard
            icon={Star}
            label="Pantheon Influence"
            value="Strong"
            description="Archetypal resonance level"
          />
        </div>
      </section>

      {/* Realm List */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Realms
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <RealmCard name="Ancestral Echoes" type="Cultural" color="from-[#C9A24F] to-[#FFB85C]" />
          <RealmCard name="Mythic Constellations" type="Mythic" color="from-[#1A2A4F] to-[#243A6B]" />
          <RealmCard name="Hybrid City‑Verse" type="Hybrid" color="from-[#3A2A4F] to-[#5B3A7A]" />
          <RealmCard name="Origin System" type="Foundational" color="from-[#4A3A2A] to-[#6B4F3A]" />
        </div>
      </section>

      {/* Civilization List */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Civilizations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <CivCard name="Harmonic Coastline" stage="Mature" color="from-[#5A3E2B] to-[#8C5F3A]" />
          <CivCard name="Flow‑Market Federation" stage="Developing" color="from-[#2A3A4F] to-[#3B4F6B]" />
          <CivCard name="Sky‑Garden Continuum" stage="Emergent" color="from-[#3A2A4F] to-[#5B3A7A]" />
        </div>
      </section>

      {/* Pantheon Influence */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Pantheon Influence
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfluenceCard name="Weaver of Echoes" level="High" />
          <InfluenceCard name="Architect of Flow" level="Moderate" />
          <InfluenceCard name="Oracle of Depth" level="Low" />
        </div>
      </section>

      {/* Origin Laws */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Origin Laws
        </h2>

        <div className="space-y-4">
          <LawRow name="Law of Harmonic Memory" />
          <LawRow name="Law of Symbolic Gravity" />
          <LawRow name="Law of Emotional Physics" />
        </div>
      </section>

      {/* Timeline Snapshot */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Timeline Snapshot
        </h2>

        <div className="space-y-6">
          <TimelineEvent title="Universe Seeded" time="Epoch 0" />
          <TimelineEvent title="Realm Divergence" time="Epoch 1.2" />
          <TimelineEvent title="Pantheon Awakens" time="Epoch 1.7" />
          <TimelineEvent title="Origin Laws Forged" time="Epoch 2.4" />
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Back to Multiverse
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Export Universe Profile
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

type RealmCardProps = {
  name: string;
  type: string;
  color: string;
};

function RealmCard({ name, type, color }: RealmCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/70 p-5 flex flex-col gap-3">
      <div className={`absolute inset-0 opacity-40 bg-gradient-to-br ${color} blur-3xl`} />

      <div className="relative">
        <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
          {type}
        </div>
        <h3 className="text-sm font-semibold">{name}</h3>
      </div>

      <button className="relative text-[11px] text-[#F5D48A] flex items-center gap-1 hover:text-[#FFB85C] transition-colors">
        <span>Open Realm</span>
        <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  );
}

type CivCardProps = {
  name: string;
  stage: string;
  color: string;
};

function CivCard({ name, stage, color }: CivCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/70 p-5 flex flex-col gap-3">
      <div className={`absolute inset-0 opacity-40 bg-gradient-to-br ${color} blur-3xl`} />

      <div className="relative">
        <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
          {stage}
        </div>
        <h3 className="text-sm font-semibold">{name}</h3>
      </div>

      <button className="relative text-[11px] text-[#F5D48A] flex items-center gap-1 hover:text-[#FFB85C] transition-colors">
        <span>Open Civilization</span>
        <ArrowRight className="h-3 w-3" />
      </button>
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
