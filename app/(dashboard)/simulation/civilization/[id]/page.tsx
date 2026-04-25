// app/(dashboard)/simulation/civilization/[id]/page.tsx

import React from "react";
import {
  Network,
  Globe2,
  Star,
  Infinity,
  GitBranch,
  Sparkles,
  ArrowRight,
  Activity,
  Users,
  Landmark,
  Scale,
} from "lucide-react";

export default function CivilizationDetailPage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Network className="h-6 w-6 text-[#F5D48A]" />
          <span>Civilization Detail</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Explore the cultural structure, governance, economy, pantheon
          influence, societal dynamics, and origin laws shaping this
          civilization.
        </p>
      </header>

      {/* Civilization Summary */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Civilization Summary
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SummaryCard
            icon={Users}
            label="Population"
            value="4.2M"
            description="Active inhabitants"
          />
          <SummaryCard
            icon={Landmark}
            label="Governance"
            value="Harmonic Council"
            description="Primary ruling structure"
          />
          <SummaryCard
            icon={Scale}
            label="Economic Model"
            value="Flow‑Exchange"
            description="Resource distribution logic"
          />
        </div>
      </section>

      {/* Cultural Structure */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Cultural Structure
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed">
          This civilization is built on layered cultural memory, emotional
          physics, and symbolic resonance. Its people navigate life through
          ritual, flow‑based exchange, and mythic alignment with archetypal
          forces.
        </p>
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
          <InfluenceCard name="Bearer of Sparks" level="Low" />
        </div>
      </section>

      {/* Origin Laws Affecting Civilization */}
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

      {/* Societal Dynamics */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Societal Dynamics
        </h2>

        <p className="text-sm text-slate-300 leading-relaxed">
          Social behavior is shaped by emotional resonance, collective memory,
          and mythic alignment. Communities form around symbolic roles and
          harmonic responsibilities.
        </p>
      </section>

      {/* Timeline Snapshot */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Timeline Snapshot
        </h2>

        <div className="space-y-6">
          <TimelineEvent title="Civilization Founded" time="Epoch 1.0" />
          <TimelineEvent title="First Harmonic Council" time="Epoch 1.3" />
          <TimelineEvent title="Pantheon Alignment" time="Epoch 1.8" />
          <TimelineEvent title="Flow‑Exchange Economy Established" time="Epoch 2.1" />
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Back to Realm
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Export Civilization Profile
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

function SummaryCard({
  icon: Icon,
  label,
  value,
  description,
}: SummaryCardProps) {
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
