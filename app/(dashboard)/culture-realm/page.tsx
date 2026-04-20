"use client";

export default function CultureRealmPage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="absolute inset-0 pointer-events-none parallax-layer" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="cosmic-particles" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#050712] to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,114,182,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.16),_transparent_55%)]" />
          <div className="relative z-10 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Culture Realm
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Memory · Language · Ancestral Signals
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              A living archive of stories, sounds, symbols, and emotional signatures from every connected culture.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <CultureCard
            title="Story Threads"
            desc="Narratives, myths, and lived experiences woven into persistent emotional timelines."
          />
          <CultureCard
            title="Language Matrix"
            desc="Dialects, proverbs, idioms, and semantic fields mapped across realms."
          />
          <CultureCard
            title="Ancestral Signals"
            desc="Patterns of resilience, resistance, joy, and grief encoded as cultural frequency."
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <CultureCard
            title="Music & Rhythm"
            desc="Beats, chants, and sonic signatures that define identity and movement."
          />
          <CultureCard
            title="Visual Motifs"
            desc="Patterns, textiles, symbols, and glyphs that carry generational meaning."
          />
        </section>
      </div>
    </main>
  );
}

function CultureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(244,114,182,0.35)] transition-all duration-300">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-2">
        Culture Node
      </div>
      <h2 className="text-lg font-semibold text-slate-50">{title}</h2>
      <p className="text-sm text-slate-400 mt-2">{desc}</p>
    </div>
  );
}
