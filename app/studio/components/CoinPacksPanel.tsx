const packs = [
  { coins: 100, priceUsd: 5 },
  { coins: 500, priceUsd: 20 },
  { coins: 1000, priceUsd: 35 },
  { coins: 5000, priceUsd: 150 },
];

export default function CoinPacksPanel() {
  return (
    <section className="section-enter rounded-2xl bg-cosmic-panel/90 border border-white/10 p-8 backdrop-blur-md">
      <h2 className="text-xl font-bold text-cosmic-gold mb-1">Coin Energy Packs</h2>
      <p className="text-xs text-white/60 mb-6">
        Coins are universal energy units. Prices auto‑convert per region.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {packs.map((p) => (
          <div
            key={p.coins}
            className="rounded-xl border border-white/10 bg-black/40 p-4 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white font-semibold">{p.coins} Coins</h3>
              <div className="text-cosmic-gold font-bold mt-2">${p.priceUsd}</div>
            </div>

            <button className="mt-4 w-full rounded-lg bg-cosmic-gold/90 text-black text-xs font-semibold py-2 hover:bg-cosmic-gold transition">
              Purchase
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
