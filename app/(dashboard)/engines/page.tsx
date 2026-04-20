// app/(dashboard)/engines/page.tsx

import React from "react";
import {
  Globe2,
  Network,
  Layers,
  Star,
  Infinity,
  Cpu,
  Aperture,
  ArrowRight,
} from "lucide-react";

export default function EngineHubPage() {
  const engines = [
    {
      title: "World Builder Engine",
      description: "Generate and evolve entire universes from mythic seeds.",
      icon: Globe2,
      href: "/engines/world-builder",
      color: "from-[#1A2A4F] to-[#243A6B]",
    },
    {
      title: "Civilization Engine",
      description: "Simulate cultural, mythic, and economic evolution.",
      icon: Network,
      href: "/engines/civilization-engine",
      color: "from-[#3A2A4F] to-[#5B3A7A]",
    },
    {
      title: "Cross‑Realm Engine",
      description: "Model tensions and harmonics between realms.",
      icon: Layers,
      href: "/engines/cross-realm",
      color: "from-[#4A3A2A] to-[#6B4F3A]",
    },
    {
      title: "Pantheon Engine",
      description: "Invoke archetypes and apply resonance fields.",
      icon: Star,
      href: "/engines/pantheon-engine",
      color: "from-[#2A3A4F] to-[#3B4F6B]",
    },
    {
      title: "Origin Law Engine",
      description: "Define foundational laws that govern universes.",
      icon: Infinity,
      href: "/engines/origin-law-engine",
      color: "from-[#5A3E2B] to-[#8C5F3A]",
    },
    {
      title: "System Intelligence Engine",
      description: "Analyze universe‑scale patterns and mythic flows.",
      icon: Cpu,
      href: "/engines/system-intelligence",
      color: "from-[#C9A24F] to-[#FFB85C]",
    },
  ];

  return (
    <main className="px-8 py-10 space-y-12">
      {/* Header */}
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold tracking-wide flex items-center gap-2">
          <Aperture className="h-6 w-6 text-[#F5D48A]" />
          <span>Ascension Engines</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-2xl">
          The complete suite of universe‑scale engines. Each engine governs a
          fundamental layer of creation, evolution, or mythic influence.
        </p>
      </header>

      {/* Engine Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {engines.map((engine) => (
          <EngineCard key={engine.title} {...engine} />
        ))}
      </section>
    </main>
  );
}

/* ───────────────── COMPONENTS ───────────────── */

function EngineCard({ title, description, icon: Icon, href, color }) {
  return (
    <a
      href={href}
      className="relative overflow-hidden rounded-2xl border border-white/5 bg-black/70 p-5 flex flex-col gap-3 group"
    >
      <div
        className={`absolute inset-0 opacity-40 bg-gradient-to-br ${color} blur-3xl transition-all group-hover:opacity-60`}
      />

      <div className="relative flex items-center justify-between">
        <h3 className="text-sm font-semibold">{title}</h3>
        <div className="h-9 w-9 rounded-full border border-[#F5D48A55] bg-black/60 flex items-center justify-center">
          <Icon className="h-4 w-4 text-[#F5D48A]" />
        </div>
      </div>

      <p className="relative text-[11px] text-slate-300">{description}</p>

      <div className="relative text-[11px] text-[#F5D48A] flex items-center gap-1 group-hover:text-[#FFB85C] transition-colors">
        <span>Open Engine</span>
        <ArrowRight className="h-3 w-3" />
      </div>
    </a>
  );
}
