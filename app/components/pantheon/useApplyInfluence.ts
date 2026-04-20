"use client";

import { useInfluence } from "./PantheonInfluenceEngine";

export function useApplyInfluence(realm: string) {
  const { getInfluenceForRealm } = useInfluence();
  const influences = getInfluenceForRealm(realm);

  const combined = {
    color: influences.find((i) => i.effects.color)?.effects.color,
    glow: influences.some((i) => i.effects.glow),
    motion: influences.find((i) => i.effects.motion)?.effects.motion,
  };

  return combined;
}
