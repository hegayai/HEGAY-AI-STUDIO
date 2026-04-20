"use client";

export default function HologramTerminalPage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="absolute inset-0 pointer-events-none parallax-layer" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="cosmic-particles" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#020617] to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.2),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.2),_transparent_55%)]" />
          <div className="relative z-10 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Hologram Terminal
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Command · Query · Invocation
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              A focused interface for issuing high‑level commands and receiving structured holographic responses.
            </p>
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)] space-y-3">
          <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">
            Terminal Input
          </div>
          <textarea
            rows={4}
            placeholder="Describe the operation, realm, or transformation you want to invoke..."
            className="w-full rounded-xl bg-black/70 border border-white/15 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-[#22c55e80] focus:ring-1 focus:ring-[#22c55e80] hologram-input"
          />
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#22c55e] to-[#16a34a] text-xs font-semibold text-black shadow-[0_14px_40px_rgba(34,197,94,0.6)] hover:brightness-110 transition-all hologram-button">
            Execute Hologram Command
          </button>
        </section>
      </div>
    </main>
  );
}
