"use client";

import { useEffect, useState } from "react";
import { DAILY_FREE_COINS, CURRENT_USER_SUBSCRIPTION } from "../subscriptionConfig";

type CoinsState = {
  date: string;
  coins: number;
};

const STORAGE_KEY = "hegay_daily_coins_v1";

function todayKey() {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export function useDailyCoins() {
  const [coins, setCoins] = useState<number | "unlimited">("unlimited");
  const tier = CURRENT_USER_SUBSCRIPTION.tier;

  useEffect(() => {
    if (tier !== "creator") {
      setCoins("unlimited");
      return;
    }

    if (typeof window === "undefined") return;

    const today = todayKey();
    const raw = window.localStorage.getItem(STORAGE_KEY);

    if (!raw) {
      const initial: CoinsState = { date: today, coins: DAILY_FREE_COINS };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      setCoins(initial.coins);
      return;
    }

    try {
      const parsed: CoinsState = JSON.parse(raw);
      if (parsed.date !== today) {
        const reset: CoinsState = { date: today, coins: DAILY_FREE_COINS };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reset));
        setCoins(reset.coins);
      } else {
        setCoins(parsed.coins);
      }
    } catch {
      const reset: CoinsState = { date: today, coins: DAILY_FREE_COINS };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(reset));
      setCoins(reset.coins);
    }
  }, [tier]);

  const spend = (amount: number) => {
    if (tier !== "creator") return true;
    if (coins === "unlimited") return true;
    if (coins < amount) return false;

    const next = coins - amount;
    setCoins(next);

    if (typeof window !== "undefined") {
      const state: CoinsState = { date: todayKey(), coins: next };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }

    return true;
  };

  return { coins, spend, tier };
}
