"use client";

export default function OriginCodexPage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">

      {/* PARALLAX DEPTH */}
      <div className="absolute inset-0 pointer-events-none parallax-layer"></div>

      {/* COSMIC PARTICLES */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="cosmic-particles"></div>
      </div>

      {/* ROTATING RINGS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="cosmic-ring cosmic-ring-1"></div>
        <div className="cosmic-ring cosmic-ring-2"></div>
      </div>

      {/* HOLOGRAM PULSE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="hologram-pulse"></div>
      </div>

      {/* GRID FLOOR */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none hologram-grid"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto space-y-10">

        {/* HEADER PANEL */}
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#050712] to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden animate-hero-float">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,212,138,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.16),_transparent_55%)] animate-hero-glow" />

          <div className="relative z-10 space-y-4">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Origin Codex
            </div>

            <h1 className="text-3xl font-semibold text-slate-50">
              Laws of Creation · Codes of Continuity
            </h1>

            <p className="text-sm text-slate-300 max-w-2xl">
              The Origin Codex preserves the foundational laws, mythic structures, 
              and cosmic principles that govern the Hegay Civilization. 
              These laws ensure continuity, harmony, and infinite expansion.
            </p>
          </div>
        </section>

        {/* GRID OF ORIGIN LAWS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <CodexCard
            title="Law of Emergence"
            desc="All creation begins from resonance. Nothing manifests without emotional frequency."
          />
          <CodexCard
            title="Law of Continuity"
            desc="Every realm must preserve its lineage, memory, and cultural identity."
          />
          <CodexCard
            title="Law of Expansion"
            desc="Systems evolve outward, never inward. Growth is the natural state."
          />
          <CodexCard
            title="Law of Harmony"
            desc="All tensions must resolve into balance. Chaos is a temporary teacher."
          />
          <CodexCard
            title="Law of Reflection"
            desc="Every creator mirrors the universe they build. Inner state = outer world."
          />
          <CodexCard
            title="Law of Return"
            desc="All cycles complete. All origins reconnect. Nothing is lost."
          />
        </section>

        {/* FOOTER PANEL */}
        <section className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
          <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-2">
            Codex Integrity
          </div>
          <p className="text-sm text-slate-300 max-w-xl">
            The Origin Codex is self‑preserving. Any modification triggers a 
            civilization‑wide resonance update, ensuring all realms remain aligned 
            with the foundational laws.
          </p>
        </section>

      </div>
    </main>
  );
}

function CodexCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(245,212,138,0.35)] transition-all duration-300">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-2">
        Origin Law
      </div>
      <h2 className="text-lg font-semibold text-slate-50">{title}</h2>
      <p className="text-sm text-slate-400 mt-2">{desc}</p>
    </div>
  );
}
