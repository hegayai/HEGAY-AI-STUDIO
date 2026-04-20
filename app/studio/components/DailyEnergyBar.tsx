"use client";

import { useDailyCoins } from "../hooks/useDailyCoins";
import { CURRENT_USER_SUBSCRIPTION } from "../subscriptionConfig";

export default function DailyEnergyBar() {
  const { coins, tier } = useDailyCoins();
  const isFree = tier === "creator";

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-2 flex items-center justify-between text-[11px] text-white/60">
      <div className="flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Daily Energy</span>
        {isFree ? (
          <span className="ml-2 text-white/80">
            Coins left today:{" "}
            <span className="text-cosmic-gold font-semibold">
              {coins === "unlimited" ? "∞" : coins}
            </span>
          </span>
        ) : (
          <span className="ml-2 text-white/80">
            Coins: <span className="text-cosmic-gold font-semibold">Unlimited</span>
          </span>
        )}
      </div>

      {isFree && (
        <span className="text-white/40">
          Upgrade to Pro or Studio for full power.
        </span>
      )}
    </div>
  );
}
