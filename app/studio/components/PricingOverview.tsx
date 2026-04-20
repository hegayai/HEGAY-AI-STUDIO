import WatermarkBadge from "./WatermarkBadge";

const plans = [
  {
    name: "Creator",
    priceUsd: 0,
    description: "Core tools with watermark.",
    plan: "free" as const,
  },
  {
    name: "Pro",
    priceUsd: 19,
    description: "HD outputs, watermark removed.",
    plan: "pro" as const,
  },
  {
    name: "Studio",
    priceUsd: 49,
    description: "Full Studio‑Integrated Universe.",
    plan: "studio" as const,
  },
];

export default function PricingOverview() {
  return (
    <section className="section-enter rounded-2xl bg-cosmic-panel/90 border border-white/10 p-8 backdrop-blur-md">
      <h2 className="text-xl font-bold text-cosmic-gold mb-1">Global Pricing</h2>
      <p className="text-xs text-white/60 mb-6">
        USD is the master currency. Displayed in local currency. Billed in USD.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-white/10 bg-black/40 p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white font-semibold">{p.name}</h3>
              <div className="text-2xl font-bold text-cosmic-gold mt-2">
                {p.priceUsd === 0 ? "Free" : `$${p.priceUsd}`}
              </div>
              <p className="text-xs text-white/60 mt-2">{p.description}</p>
            </div>

            <div className="mt-4">
              <WatermarkBadge plan={p.plan} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
