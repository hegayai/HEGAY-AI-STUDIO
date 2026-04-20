export default function OriginMapPanel() {
  return (
    <div className="cosmic-card p-8 rounded-xl bg-cosmic-panel/95 border border-white/10 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30 bg-cosmic-gradient blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-cosmic-gold">Origin System</h3>
          <span className="cosmic-chip text-white/70">Civilization Map</span>
        </div>
        <p className="text-white/60 text-sm mb-4">
          A conceptual map of your creative civilization—how realms, creators,
          and archetypes connect across your universe.
        </p>
        <div className="mt-2 grid grid-cols-3 gap-3 text-xs">
          <div className="rounded-lg border border-white/12 bg-black/40 p-3">
            <div className="text-white/70">Realms</div>
            <div className="text-cosmic-gold mt-1 font-semibold">12 Nodes</div>
          </div>
          <div className="rounded-lg border border-white/12 bg-black/40 p-3">
            <div className="text-white/70">Creators</div>
            <div className="text-cosmic-gold mt-1 font-semibold">48 Signals</div>
          </div>
          <div className="rounded-lg border border-white/12 bg-black/40 p-3">
            <div className="text-white/70">Pantheon</div>
            <div className="text-cosmic-gold mt-1 font-semibold">4 Archetypes</div>
          </div>
        </div>
      </div>
    </div>
  );
}
