const creators = [
  {
    name: "Amina Okafor",
    role: "Story Architect",
    realm: "Temple of Memory",
    signal: "High",
  },
  {
    name: "Kwesi Mensah",
    role: "Sound Alchemist",
    realm: "Lagos Night Market",
    signal: "Rising",
  },
  {
    name: "Zuri Adeyemi",
    role: "Visual Oracle",
    realm: "Sunrise Origin",
    signal: "Legend",
  },
];

export default function CreatorsPanel() {
  return (
    <div className="cosmic-card p-8 rounded-xl bg-cosmic-panel/95 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-cosmic-gold">Creators</h3>
        <span className="cosmic-chip text-white/70">Signal Board</span>
      </div>
      <div className="space-y-4 text-sm">
        {creators.map((c, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
          >
            <div>
              <div className="font-semibold text-white">{c.name}</div>
              <div className="text-xs text-white/50">
                {c.role} · {c.realm}
              </div>
            </div>
            <div className="text-xs text-cosmic-accent font-semibold">
              Signal: {c.signal}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
