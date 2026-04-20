const marketplace = [
  { name: "Storyworld Blueprint", type: "Realm Template", price: "₦45,000" },
  { name: "Diaspora Sound Pack", type: "Audio Kit", price: "₦18,000" },
  { name: "Cosmic Poster Set", type: "Visual Pack", price: "₦25,000" },
];

export default function MarketplacePanel() {
  return (
    <div className="cosmic-card p-8 rounded-xl bg-cosmic-panel/95 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-cosmic-gold">Marketplace</h3>
        <span className="cosmic-chip text-white/70">Featured Assets</span>
      </div>
      <div className="space-y-4 text-sm">
        {marketplace.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
          >
            <div>
              <div className="font-semibold text-white">{item.name}</div>
              <div className="text-xs text-white/50">{item.type}</div>
            </div>
            <div className="text-cosmic-gold font-semibold">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
