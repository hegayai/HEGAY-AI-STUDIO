"use client";

import { useState } from "react";
import {
  CURRENT_USER_SUBSCRIPTION,
  type SubscriptionTier,
} from "../subscriptionConfig";
import LockedNotice from "./LockedNotice";
import { useDailyCoins } from "../hooks/useDailyCoins";

type Props = {
  requiredTier?: SubscriptionTier;
  featureCostCoins?: number;
};

function tierRank(tier: SubscriptionTier): number {
  switch (tier) {
    case "creator":
      return 1;
    case "pro":
      return 2;
    case "studio":
      return 3;
    case "enterprise":
      return 4;
  }
}

export default function ModelTestPanel({
  requiredTier = "creator",
  featureCostCoins = 3,
}: Props) {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const userTier = CURRENT_USER_SUBSCRIPTION.tier;
  const hasAccess = tierRank(userTier) >= tierRank(requiredTier);

  const { coins, spend } = useDailyCoins();
  const isFreeTier = userTier === "creator";

  const notEnoughCoins =
    isFreeTier && coins !== "unlimited" && coins < featureCostCoins;

  const runTest = () => {
    if (!hasAccess) return;
    if (isFreeTier) {
      const ok = spend(featureCostCoins);
      if (!ok) return;
    }
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <section className="section-enter rounded-2xl bg-cosmic-panel/90 border border-white/10 p-8 backdrop-blur-md">
      <h2 className="text-xl font-bold text-cosmic-gold mb-1">Model Test Bench</h2>
      <p className="text-xs text-white/60 mb-4">
        Test high‑class generation quality across engines. Free tier uses daily coins.
      </p>

      {!hasAccess && (
        <div className="mb-4">
          <LockedNotice requiredTier={requiredTier} />
        </div>
      )}

      {isFreeTier && hasAccess && (
        <div className="mb-3 text-[11px] text-white/60">
          This test costs{" "}
          <span className="text-cosmic-gold font-semibold">
            {featureCostCoins} coins
          </span>
          . Coins left today:{" "}
          <span className="text-cosmic-gold font-semibold">
            {coins === "unlimited" ? "∞" : coins}
          </span>
          .
          {notEnoughCoins && (
            <span className="ml-2 text-amber-300">
              Not enough coins. Come back tomorrow or upgrade.
            </span>
          )}
        </div>
      )}

      <textarea
        className="w-full rounded-lg border border-white/10 bg-black/40 p-3 text-xs text-white outline-none focus:border-cosmic-gold"
        rows={4}
        placeholder={
          hasAccess
            ? "Describe what you want to generate..."
            : "Upgrade your subscription to use this test bench."
        }
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        disabled={!hasAccess || notEnoughCoins}
      />

      <button
        onClick={runTest}
        disabled={!prompt.trim() || loading || !hasAccess || notEnoughCoins}
        className="mt-4 rounded-lg bg-cosmic-gold/90 text-black text-xs font-semibold px-4 py-2 hover:bg-cosmic-gold transition disabled:opacity-40"
      >
        {loading
          ? "Generating…"
          : !hasAccess
          ? "Locked"
          : notEnoughCoins
          ? "No coins left"
          : "Run Test"}
      </button>

      <div className="mt-6 h-40 rounded-lg border border-white/10 bg-black/40 flex items-center justify-center text-white/40 text-xs">
        {loading
          ? "Running high‑class generation…"
          : hasAccess
          ? "Your output will appear here."
          : "Upgrade to Pro, Studio, or Enterprise to see outputs here."}
      </div>
    </section>
  );
}
