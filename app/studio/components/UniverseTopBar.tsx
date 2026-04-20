export default function UniverseTopBar() {
  return (
    <div className="section-enter mb-8 flex items-center justify-between rounded-xl bg-cosmic-panel/90 border border-white/10 px-6 py-4 backdrop-blur-md">
      <div>
        <div className="text-[10px] uppercase tracking-[0.3em] text-white/40">
          Universe Status
        </div>
        <div className="text-sm font-semibold text-cosmic-gold">
          Stable · Expanding · Studio‑Integrated
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs text-white/60">
        <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10">
          Watchword: <span className="text-cosmic-gold">Creation Without Limits</span>
        </span>
      </div>
    </div>
  );
}
