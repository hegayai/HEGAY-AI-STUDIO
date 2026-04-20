export default function RealmGridPanel() {
  const realms = [
    { name: "Lagos Night Market", vibe: "Electric Lagos", status: "High Activity" },
    { name: "Temple of Memory", vibe: "Midnight Cosmic", status: "Steady" },
    { name: "Sunrise Origin", vibe: "Sunrise Origin", status: "Rising" },
    { name: "Diaspora Signal Hub", vibe: "Signal Network", status: "Emerging" },
  ];

  return (
    <div className="cosmic-card p-8 rounded-xl bg-cosmic-panel/95 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-cosmic-gold">Realms</h3>
        <span className="cosmic-chip text-white/70">World Grid</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        {realms.map((realm, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/12 bg-black/30 p-4 hover:border-cosmic-gold/70 transition"
          >
            <div className="font-semibold text-white">{realm.name}</div>
            <div className="text-xs text-white/50 mt-1">{realm.vibe}</div>
            <div className="text-xs text-cosmic-gold mt-2">{realm.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
