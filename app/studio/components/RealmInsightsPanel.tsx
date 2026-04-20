export default function RealmInsightsPanel() {
  return (
    <div className="cosmic-card p-8 rounded-xl bg-cosmic-panel/95 border border-white/10">
      <h3 className="text-xl font-bold text-cosmic-gold mb-3">
        Realm Insights
      </h3>
      <p className="text-white/60 text-sm mb-4">
        Track the pulse of your universe. See which realms are most active,
        which archetypes are awakening, and where new stories are emerging.
      </p>
      <div className="space-y-3 text-xs">
        <div className="flex justify-between">
          <span className="text-white/60">Lagos Night Market</span>
          <span className="text-cosmic-gold">High Activity</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Temple of Memory</span>
          <span className="text-cosmic-gold">Steady</span>
        </div>
        <div className="flex justify-between">
          <span className="text-white/60">Sunrise Origin</span>
          <span className="text-cosmic-gold">Rising</span>
        </div>
      </div>
    </div>
  );
}
