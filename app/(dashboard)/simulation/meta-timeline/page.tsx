// app/(dashboard)/simulation/meta-timeline/page.tsx

import React from "react";
import {
  Clock,
  GitBranch,
  Star,
  Globe2,
  Network,
  Infinity,
  ArrowRight,
} from "lucide-react";

export default function MetaTimelinePage() {
  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Clock className="h-6 w-6 text-[#F5D48A]" />
          <span>Meta‑Timeline</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          Explore universe evolution, realm shifts, civilization branches,
          pantheon events, and origin law changes across cosmic time.
        </p>
      </header>

      {/* Timeline Filters */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-6 space-y-6">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Filters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FilterBlock
            label="Event Type"
            options={["All", "Realm", "Civilization", "Pantheon", "Origin Law"]}
          />
          <FilterBlock
            label="Time Range"
            options={["All Time", "Recent", "Epoch 1", "Epoch 2", "Epoch 3"]}
          />
          <FilterBlock
            label="View Mode"
            options={["Linear", "Branching", "Compact", "Expanded"]}
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="rounded-2xl border border-white/5 bg-black/60 p-8 space-y-10">
        <h2 className="text-sm font-semibold tracking-wide flex items-center gap-2 mb-4">
          <span className="h-1 w-6 rounded-full bg-gradient-to-r from-[#F5D48A] to-[#FFB85C]" />
          Timeline
        </h2>

        <div className="space-y-10">
          <TimelineEvent
            icon={Globe2}
            title="Universe Seeded"
            time="Epoch 0"
            description="The first origin spark ignites the foundational universe."
          />
          <TimelineEvent
            icon={Network}
            title="First Civilizations Form"
            time="Epoch 1"
            description="Cultural structures emerge and stabilize across early realms."
          />
          <TimelineEvent
            icon={Star}
            title="Pantheon Awakens"
            time="Epoch 1.4"
            description="Archetypes gain form and begin influencing cosmic evolution."
          />
          <TimelineEvent
            icon={GitBranch}
            title="Realm Divergence"
            time="Epoch 2"
            description="Multiple realms branch into distinct mythic trajectories."
          />
          <TimelineEvent
            icon={Infinity}
            title="Origin Laws Forged"
            time="Epoch 2.7"
            description="Foundational laws are established, shaping universal physics and mythic logic."
          />
        </div>
      </section>

      {/* Actions */}
      <section className="flex items-center justify-end gap-3">
        <button className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
          Clear Filters
        </button>
        <button className="px-4 py-2 rounded-full border border-white/10 text-slate-200 text-sm hover:border-[#F5D48A66] transition-all">
          Export Timeline
        </button>
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

type FilterBlockProps = {
  label: string;
  options: string[];
};

function FilterBlock({ label, options }: FilterBlockProps) {
  return (
    <div className="space-y-2">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
        {label}
      </div>
      <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm text-slate-200 focus:border-[#F5D48A66] outline-none">
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

type TimelineEventProps = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  time: string;
  description: string;
};

function TimelineEvent({ icon: Icon, title, time, description }: TimelineEventProps) {
  return (
    <div className="relative pl-10">
      {/* Line */}
      <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#F5D48A55] to-transparent" />

      {/* Dot */}
      <div className="absolute left-2 top-1 h-5 w-5 rounded-full bg-[#111114] border border-[#F5D48A88] flex items-center justify-center">
        <Icon className="h-3 w-3 text-[#F5D48A]" />
      </div>

      {/* Content */}
      <div className="space-y-1">
        <div className="text-sm font-semibold text-slate-100">{title}</div>
        <div className="text-[11px] text-slate-500">{time}</div>
        <div className="text-sm text-slate-300">{description}</div>
      </div>
    </div>
  );
}
