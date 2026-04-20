"use client";

export default function LockScreen() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 flex items-center justify-center p-6 relative overflow-hidden">

      {/* PARALLAX DEPTH LAYER */}
      <div className="absolute inset-0 pointer-events-none parallax-layer"></div>

      {/* COSMIC PARTICLES */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="cosmic-particles"></div>
      </div>

      {/* ROTATING RINGS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="cosmic-ring cosmic-ring-1"></div>
        <div className="cosmic-ring cosmic-ring-2"></div>
        <div className="cosmic-ring cosmic-ring-3"></div>
      </div>

      {/* HOLOGRAM PULSE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="hologram-pulse"></div>
      </div>

      {/* HOLOGRAM GRID FLOOR */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none hologram-grid"></div>

      {/* HERO PANEL */}
      <div className="w-full max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#050712] to-black p-10 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden animate-hero-float">

        {/* Glow Layer */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(245,212,138,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(56,189,248,0.18),_transparent_55%)] animate-hero-glow" />

        {/* CONTENT */}
        <div className="relative z-10 space-y-8">

          {/* TITLE */}
          <div className="space-y-2">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Pole Dashboard 2.0
            </div>

            <h1 className="text-3xl font-semibold text-slate-50">
              Creative Civilization Control Surface
            </h1>

            <p className="text-sm text-slate-300 max-w-xl">
              A living cosmic interface powered by holographic pulses, drifting particles, rotating rings, parallax depth, and a premium unlock sequence.
            </p>
          </div>

          {/* UNLOCK FIELD */}
          <div className="space-y-3">
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span>🔒</span> Enter passphrase to unlock the Origin System
            </div>

            <input
              type="password"
              placeholder="••••••••••••"
              className="w-full rounded-xl bg-black/60 border border-white/15 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 outline-none focus:border-[#F5D48A80] focus:ring-1 focus:ring-[#F5D48A80] transition-all hologram-input"
            />

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#F5D48A] to-[#F59E0B] text-xs font-semibold text-black shadow-[0_14px_40px_rgba(245,212,138,0.6)] hover:brightness-110 transition-all hologram-button">
              Unlock Hegay OS
            </button>
          </div>

          {/* METRICS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <Metric label="Universes" value="12" color="text-[#F5D48A]" />
            <Metric label="Origin Laws" value="64" color="text-sky-400" />
            <Metric label="Culture Realms" value="27" color="text-rose-400" />
            <Metric label="Intelligence Threads" value="108" color="text-emerald-400" />
          </div>

        </div>
      </div>
    </main>
  );
}

function Metric({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[10px] text-slate-500">{label}</span>
      <span className={`text-sm font-semibold ${color}`}>{value}</span>
    </div>
  );
}
