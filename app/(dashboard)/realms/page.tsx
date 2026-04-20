// app/(dashboard)/realms/page.tsx

import React from "react";
import { Sparkles, Globe2, Star, Network } from "lucide-react";

export default function RealmsPage() {
  return (
    <main className="px-8 py-10 space-y-10">
      {/* Page Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Globe2 className="h-5 w-5 text-[#F5D48A]" />
          <span>Realms</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-xl">
          The universes that make up your creative civilization. Each realm is a
          world with its own laws, stories, and mythic resonance.
        </p>
      </header>

      {/* Realms Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <RealmCard
          name="Ancestral Echoes"
          type="Culture Realm"
          description="A realm dedicated to lineage, memory, and diaspora storytelling."
          color="from-[#5A3E2B] to-[#8C5F3A]"
        />
        <RealmCard
          name="Mythic Constellations"
          type="Myth Realm"
          description="A myth‑first realm where archetypes and symbols take center stage."
          color="from-[#1A2A4F] to-[#243A6B]"
        />
        <RealmCard
          name="Hybrid City‑Verse"
          type="Hybrid Realm"
          description="A fusion of urban futures, culture, and speculative governance."
          color="from-[#C9A24F] to-[#FFB85C]"
        />
        <RealmCard
          name="Origin System"
          type="Foundational Realm"
          description="The laws, axioms, and cosmic principles that govern all realms."
          color="from-[#4A3A2A] to-[#6B4F3A]"
        />
        <RealmCard
          name="Governance Nexus"
          type="Governance Realm"
          description="A realm where political, economic, and mythic forces negotiate balance."
          color="from-[#2A3A4F] to-[#3B4F6B]"
        />
        <RealmCard
          name="Cultural Harmonics"
          type="Resonance Realm"
          description="A realm focused on ritual, sound, rhythm, and emotional physics."
          color="from-[#3A2A4F] to-[#5B3A7A]"
        />
      </section>

      {/* Realm Summary Panel */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Realm System Overview
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          Realms are the foundational worlds of your creative civilization. Each
          realm contains its own mythic laws, cultural logic, and narrative
          gravity. Together, they form the multi‑layered universe of Hegay OS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <StatCard label="Active Realms" value="6" icon={Globe2} />
          <StatCard label="Pantheon Links" value="9" icon={Star} />
          <StatCard label="Civilization Threads" value="24" icon={Network} />
        </div>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function RealmCard({
  name,
  type,
  description,
  color,
}: {
  name: string;
  type: string;
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
            {type}
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
          Stability: <span className="text-[#F5D48A]">Harmonic</span>
        </span>
        <button className="text-[#F5D48A] hover:text-[#FFB85C] transition-colors">
          Open Realm
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
