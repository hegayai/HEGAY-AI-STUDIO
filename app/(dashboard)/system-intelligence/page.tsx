"use client";

export default function SystemIntelligencePage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="absolute inset-0 pointer-events-none parallax-layer" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="cosmic-particles" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto space-y-8">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#020814] to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_55%)]" />
          <div className="relative z-10 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              System Intelligence
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Signals · Tensions · Predictions
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              A live map of emotional tensions, cultural shifts, and structural risks across all realms.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <IntelCard
            title="Tension Index"
            value="0.23"
            tone="text-emerald-400"
            desc="Overall systemic tension across all universes remains low and stable."
          />
          <IntelCard
            title="Signal Density"
            value="87%"
            tone="text-sky-400"
            desc="High volume of cultural and creative signals flowing through the network."
          />
          <IntelCard
            title="Risk Horizon"
            value="Soft"
            tone="text-amber-300"
            desc="No immediate existential threats detected. Monitor localized anomalies."
          />
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
          <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-2">
            Narrative Forecast
          </div>
          <p className="text-sm text-slate-300 max-w-3xl">
            The system anticipates a rise in collaborative myth‑building, cross‑realm cultural blending, 
            and new forms of creative governance. Watch for emergent hubs of emotional innovation.
          </p>
        </section>
      </div>
    </main>
  );
}

function IntelCard({
  title,
  value,
  tone,
  desc,
}: {
  title: string;
  value: string;
  tone: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
      <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-2">
        {title}
      </div>
      <div className={`text-2xl font-semibold ${tone}`}>{value}</div>
      <p className="text-sm text-slate-400 mt-2">{desc}</p>
    </div>
  );
}
