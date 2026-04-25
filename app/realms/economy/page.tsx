"use client";

import RealmIntro from "@/app/components/ui/RealmIntro";
import RealmToolPanel from "@/app/components/ui/RealmToolPanel";

export default function EconomyRealmPage() {
  return (
    <main className="space-y-8">
      <RealmIntro
        title="Economy Realm"
        description="The value‑flow engine of your Creative OS — currencies, markets, resources, and production systems."
        aura="from-green-500/40 to-emerald-500/40"
      />

      <RealmToolPanel
        title="Economy Tools"
        description="Tools for modeling currencies, markets, resource flows, and economic behavior."
        aura="from-green-500/20 to-emerald-500/20"
        tools={[
          {
            title: "Currency Engine",
            description: "Design currencies, tokens, and value systems.",
            aura: "from-green-500/20 to-emerald-500/20",
          },
          {
            title: "Market Engine",
            description: "Simulate trade, pricing, and supply‑demand dynamics.",
            aura: "from-emerald-500/20 to-teal-500/20",
          },
          {
            title: "Resource Engine",
            description: "Model resource extraction, distribution, and scarcity.",
            aura: "from-teal-500/20 to-cyan-500/20",
          },
        ]}
      />
    </main>
  );
}
