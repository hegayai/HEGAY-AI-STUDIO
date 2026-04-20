"use client";

export default function TimelineEnginePage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="absolute inset-0 pointer-events-none parallax-layer" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="cosmic-particles" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-8">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#020617] to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(245,158,11,0.18),_transparent_55%)]" />
          <div className="relative z-10 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Timeline Engine
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Past · Present · Potential Futures
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Visualize and reason about key events, turning points, and possible futures of the civilization.
            </p>
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
          <TimelineRow label="Origin Spark" era="Pre‑System" />
          <TimelineRow label="First Realm Alignment" era="Era I" />
          <TimelineRow label="Multiverse Expansion" era="Era II" />
          <TimelineRow label="Hegay OS Activation" era="Era III" />
        </section>
      </div>
    </main>
  );
}

function TimelineRow({ label, era }: { label: string; era: string }) {
  return (
    <div className="flex items-center justify-between text-sm text-slate-300">
      <span>{label}</span>
      <span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-slate-200">
        {era}
      </span>
    </div>
  );
}
