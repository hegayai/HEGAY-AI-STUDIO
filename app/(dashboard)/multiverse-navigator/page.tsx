"use client";

export default function MultiverseNavigatorPage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="absolute inset-0 pointer-events-none parallax-layer" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="cosmic-particles" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#050712] to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)]" />
          <div className="relative z-10 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Multiverse Navigator
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Branches · Timelines · Parallel States
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Explore parallel universes, branching decisions, and alternate outcomes of the same creative origin.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <UniverseCard
            label="Universe A‑01"
            state="Primary"
            desc="Baseline timeline aligned with current Hegay OS state."
          />
          <UniverseCard
            label="Universe B‑07"
            state="Experimental"
            desc="High‑variance creative governance and radical culture blending."
          />
          <UniverseCard
            label="Universe C‑13"
            state="Dormant"
            desc="Archived branch awaiting reactivation and narrative restoration."
          />
        </section>
      </div>
    </main>
  );
}

function UniverseCard({
  label,
  state,
  desc,
}: {
  label: string;
  state: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)] hover:-translate-y-1 hover:shadow-[0_26px_70px_rgba(129,140,248,0.35)] transition-all duration-300">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
          {label}
        </span>
        <span className="text-[11px] px-2 py-1 rounded-full bg-white/5 text-slate-300">
          {state}
        </span>
      </div>
      <p className="text-sm text-slate-300">{desc}</p>
    </div>
  );
}
