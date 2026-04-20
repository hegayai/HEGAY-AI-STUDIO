const pantheon = [
  { title: "Origin Keeper", status: "Awakened" },
  { title: "Signal Bearer", status: "Active" },
  { title: "Memory Guardian", status: "Dormant" },
  { title: "Market Spirit", status: "Emerging" },
];

export default function PantheonPanel() {
  return (
    <div className="cosmic-card p-8 rounded-xl bg-cosmic-panel/95 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-cosmic-gold">Pantheon</h3>
        <span className="cosmic-chip text-white/70">Archetype Status</span>
      </div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        {pantheon.map((p, i) => (
          <div
            key={i}
            className="rounded-lg border border-white/12 bg-black/30 p-4"
          >
            <div className="font-semibold text-white">{p.title}</div>
            <div className="text-xs text-cosmic-gold mt-1">{p.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
