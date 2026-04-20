"use client";

export default function SettingsPage() {
  return (
    <main className="min-h-screen w-full bg-black text-slate-100 relative overflow-hidden p-6">
      <div className="absolute inset-0 pointer-events-none parallax-layer" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="cosmic-particles" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-black via-[#050712] to-black p-8 shadow-[0_30px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(15,118,110,0.18),_transparent_55%)]" />
          <div className="relative z-10 space-y-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              System Settings
            </div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-50">
              Cosmic Preferences · OS Behavior
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Configure how Hegay OS responds, animates, and presents information across all realms.
            </p>
          </div>
        </section>

        <section className="space-y-4 rounded-2xl border border-white/10 bg-black/70 backdrop-blur-2xl p-6 shadow-[0_18px_45px_rgba(0,0,0,0.85)]">
          <SettingRow label="Motion Intensity" value="Cinematic" />
          <SettingRow label="Visual Theme" value="Cosmic Minimal · Gold Accent" />
          <SettingRow label="Signal Verbosity" value="Premium · High Context" />
          <SettingRow label="Safety Layer" value="Strict · Origin‑Aligned" />
        </section>
      </div>
    </main>
  );
}

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-sm text-slate-300">
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-100">{value}</span>
    </div>
  );
}
