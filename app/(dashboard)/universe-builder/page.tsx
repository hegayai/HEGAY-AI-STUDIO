"use client";

export default function UniverseBuilderPage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="absolute inset-0 pointer-events-none parallax-layer" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="cosmic-particles" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#050712] to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,212,138,0.2),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.2),_transparent_55%)]" />
          <div className="relative z-10 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Universe Builder
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Seed · Shape · Deploy Universes
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Define parameters for new universes aligned with Origin Laws and Culture Realm constraints.
            </p>
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
          <BuilderRow label="Universe Name" value="Untitled Universe" />
          <BuilderRow label="Primary Law" value="Law of Emergence" />
          <BuilderRow label="Dominant Culture Signal" value="Diaspora · Resilience" />
          <BuilderRow label="Governance Mode" value="Origin‑Aligned Council" />
        </section>
      </div>
    </main>
  );
}

function BuilderRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm text-slate-300">
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-100">{value}</span>
    </div>
  );
}
