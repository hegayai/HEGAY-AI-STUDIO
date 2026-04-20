"use client";

export default function MissionControlPage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#050712] to-black p-6 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.16),_transparent_55%)]" />
          <div className="relative z-10 space-y-2">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Mission Control
            </div>
            <h1 className="text-2xl font-semibold text-slate-50">
              Governance · Justice · Operations
            </h1>
            <p className="text-sm text-slate-300 max-w-xl">
              Oversee origin‑aligned governance, justice frameworks, and operational flows across all realms.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MCBlock title="Governance Frameworks" value="19" />
          <MCBlock title="Active Operations" value="42" />
          <MCBlock title="Justice Cases" value="7" />
        </section>
      </div>
    </main>
  );
}

function MCBlock({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-4 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-1">
        {title}
      </div>
      <div className="text-xl font-semibold text-sky-400">{value}</div>
    </div>
  );
}
