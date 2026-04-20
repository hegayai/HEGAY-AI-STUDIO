// app/(dashboard)/pantheon/page.tsx

import React from "react";
import { Star, Sparkles, Brain, Flame, Feather, Eye } from "lucide-react";

export default function PantheonPage() {
  return (
    <main className="px-8 py-10 space-y-10">
      {/* Page Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Star className="h-5 w-5 text-[#F5D48A]" />
          <span>Pantheon</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-xl">
          Archetypal forces that shape your creative civilizations. Each
          archetype carries resonance, law, and mythic influence.
        </p>
      </header>

      {/* Pantheon Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <ArchetypeCard
          name="Weaver of Echoes"
          domain="Memory · Lineage"
          resonance="Soft, reflective, intergenerational"
          icon={Feather}
          color="from-[#5A3E2B] to-[#8C5F3A]"
        />
        <ArchetypeCard
          name="Architect of Flow"
          domain="Economy · Movement"
          resonance="Dynamic, fluid, connective"
          icon={Flame}
          color="from-[#1A2A4F] to-[#243A6B]"
        />
        <ArchetypeCard
          name="Keeper of Harmonies"
          domain="Culture · Ritual"
          resonance="Balanced, ceremonial, emotive"
          icon={Sparkles}
          color="from-[#3A2A4F] to-[#5B3A7A]"
        />
        <ArchetypeCard
          name="Oracle of Depth"
          domain="Insight · Shadow"
          resonance="Introspective, revealing, transformative"
          icon={Eye}
          color="from-[#2A3A4F] to-[#3B4F6B]"
        />
        <ArchetypeCard
          name="Bearer of Sparks"
          domain="Creation · Imagination"
          resonance="Explosive, radiant, generative"
          icon={Brain}
          color="from-[#C9A24F] to-[#FFB85C]"
        />
        <ArchetypeCard
          name="Guardian of Thresholds"
          domain="Transition · Passage"
          resonance="Protective, liminal, guiding"
          icon={Star}
          color="from-[#4A3A2A] to-[#6B4F3A]"
        />
      </section>

      {/* Pantheon Overview Panel */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Pantheon Overview
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          The Pantheon represents the mythic architecture of your creative
          universe. Each archetype influences civilizations through resonance,
          law, and symbolic gravity. Together, they form the emotional and
          metaphysical backbone of Hegay OS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <StatCard label="Active Archetypes" value="9" icon={Star} />
          <StatCard label="Realm Connections" value="6" icon={Sparkles} />
          <StatCard label="Influence Threads" value="72" icon={Brain} />
        </div>
      </section>

      {/* Resonance Field */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-4">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Resonance Field
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl">
          A visualization of how archetypes influence each other. Resonance
          fields reveal harmony, tension, and mythic flow.
        </p>

        <div className="mt-4 rounded-xl bg-black/70 border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-60">
            <ResonanceDots />
          </div>
          <div className="relative h-72 flex items-center justify-center">
            <ResonanceNodes />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function ArchetypeCard({
  name,
  domain,
  resonance,
  icon: Icon,
  color,
}: {
  name: string;
  domain: string;
  resonance: string;
  icon: React.ComponentType<{ className?: string }>;
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
            {domain}
          </div>
          <h3 className="text-sm font-semibold">{name}</h3>
        </div>
        <div className="h-9 w-9 rounded-full border border-[#F5D48A55] bg-black/60 flex items-center justify-center">
          <Icon className="h-4 w-4 text-[#F5D48A]" />
        </div>
      </div>
      <p className="relative text-[11px] text-slate-300">{resonance}</p>
      <div className="relative flex items-center justify-between pt-1 text-[11px] text-slate-400">
        <span>
          Influence: <span className="text-[#F5D48A]">Active</span>
        </span>
        <button className="text-[#F5D48A] hover:text-[#FFB85C] transition-colors">
          Open Archetype
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

/* ───────────────── RESONANCE VISUALS ───────────────── */

function ResonanceDots() {
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

function ResonanceNodes() {
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

function Node({ className }: { className?: string }) {
  return (
    <div
      className={`absolute h-6 w-6 rounded-full bg-[#1A2A4F] border border-[#F5D48A88] shadow-[0_0_20px_rgba(36,58,107,0.8)] ${className}`}
    />
  );
}
