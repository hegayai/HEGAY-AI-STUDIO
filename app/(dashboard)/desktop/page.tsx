"use client";

export default function DesktopPage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#050712] to-black p-6 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,212,138,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.16),_transparent_55%)]" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="space-y-2">
              <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
                Desktop · Universe Layer
              </div>
              <h1 className="text-2xl font-semibold text-slate-50">
                Multiverse Simulation Surface
              </h1>
              <p className="text-sm text-slate-300 max-w-xl">
                Quick access to universe branches, origin codex, culture realms, and intelligence flows.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-[11px]">
              <MiniMetric label="Active Universes" value="12" />
              <MiniMetric label="Open Threads" value="108" />
              <MiniMetric label="Culture Signals" value="27" />
              <MiniMetric label="Origin Laws" value="64" />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DesktopCard title="Universe Simulation" subtitle="Branches · States · Flows" />
          <DesktopCard title="Origin Codex" subtitle="Laws · Codes · Hierarchies" />
          <DesktopCard title="Culture Realm" subtitle="Language · Memory · Artifacts" />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DesktopCard title="System Intelligence" subtitle="Signals · Tensions · Predictions" />
          <DesktopCard title="Mission Control" subtitle="Operations · Governance · Justice" />
        </section>
      </div>
    </main>
  );
}

function MiniMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] text-slate-500">{label}</span>
      <span className="text-sm font-semibold text-slate-100">{value}</span>
    </div>
  );
}

function DesktopCard({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-4 shadow-[0_18px_45px_rgba(0,0,0,0.85)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(245,212,138,0.35)] transition-all duration-300">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-1">
        Module
      </div>
      <h2 className="text-sm font-semibold text-slate-50">{title}</h2>
      <p className="text-[11px] text-slate-400 mt-1">{subtitle}</p>
    </div>
  );
}
