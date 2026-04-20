// app/(dashboard)/archive/page.tsx

import React from "react";
import { Archive, GitBranch, Clock, Layers, Sparkles } from "lucide-react";

export default function ArchivePage() {
  return (
    <main className="px-8 py-10 space-y-10">
      {/* Page Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Archive className="h-5 w-5 text-[#F5D48A]" />
          <span>Archive</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-xl">
          The memory vault of your creative universe. Every version, lineage,
          and world you’ve shaped lives here.
        </p>
      </header>

      {/* Archive Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ArchiveCard
          name="Hybrid City‑Verse"
          version="v12"
          updated="2 days ago"
          description="A mega‑city civilization shaped by diaspora futures and mythic law."
          color="from-[#C9A24F] to-[#FFB85C]"
        />
        <ArchiveCard
          name="Echo‑Spiral Dominion"
          version="v7"
          updated="5 days ago"
          description="A symbolic civilization governed by archetypal resonance."
          color="from-[#1A2A4F] to-[#243A6B]"
        />
        <ArchiveCard
          name="Harmonic Coastline"
          version="v4"
          updated="1 week ago"
          description="A ritual‑driven civilization shaped by emotional wave‑patterns."
          color="from-[#3A2A4F] to-[#5B3A7A]"
        />
        <ArchiveCard
          name="Origin‑Bound Assembly"
          version="v9"
          updated="3 weeks ago"
          description="A foundational civilization built on cosmic axioms and origin law."
          color="from-[#4A3A2A] to-[#6B4F3A]"
        />
        <ArchiveCard
          name="Flow‑Market Federation"
          version="v6"
          updated="1 month ago"
          description="A civilization balancing economic flow and mythic obligation."
          color="from-[#2A3A4F] to-[#3B4F6B]"
        />
        <ArchiveCard
          name="Sky‑Garden Continuum"
          version="v3"
          updated="2 months ago"
          description="A floating‑district civilization of ritual gardens and trade winds."
          color="from-[#5A3E2B] to-[#8C5F3A]"
        />
      </section>

      {/* Lineage Overview Panel */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Lineage Overview
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          Every civilization evolves through versions, branches, and mythic
          shifts. The lineage system preserves your creative history and allows
          you to restore or fork any moment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <StatCard label="Total Versions" value="112" icon={Layers} />
          <StatCard label="Active Threads" value="17" icon={GitBranch} />
          <StatCard label="Restorable Points" value="54" icon={Clock} />
        </div>
      </section>

      {/* Timeline Panel */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Recent Lineage Activity
        </h2>

        <div className="space-y-4">
          <TimelineRow
            label="Hybrid City‑Verse updated to v12"
            time="2 days ago"
          />
          <TimelineRow
            label="Echo‑Spiral Dominion forked into a new branch"
            time="5 days ago"
          />
          <TimelineRow
            label="Harmonic Coastline restored from v2 → v4"
            time="1 week ago"
          />
          <TimelineRow
            label="Origin‑Bound Assembly merged two lineage threads"
            time="3 weeks ago"
          />
        </div>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function ArchiveCard({
  name,
  version,
  updated,
  description,
  color,
}: {
  name: string;
  version: string;
  updated: string;
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
            {version}
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
          Updated: <span className="text-[#F5D48A]">{updated}</span>
        </span>
        <button className="text-[#F5D48A] hover:text-[#FFB85C] transition-colors">
          Open Version
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

function TimelineRow({
  label,
  time,
}: {
  label: string;
  time: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-[#111114] flex items-center justify-center border border-white/10">
          <GitBranch className="h-3 w-3 text-[#F5D48A]" />
        </div>
        <span className="text-[11px] text-slate-200">{label}</span>
      </div>
      <span className="text-[10px] text-slate-500">{time}</span>
    </div>
  );
}
