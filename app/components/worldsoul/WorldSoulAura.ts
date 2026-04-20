"use client";

import { useWorldSoul } from "./WorldSoulResonanceEngine";

export default function WorldSoulAura() {
  const { level } = useWorldSoul();

  const opacity =
    level === 0 ? "opacity-10" :
    level === 1 ? "opacity-20" :
    level === 2 ? "opacity-35" :
    "opacity-50";

  const blur =
    level === 0 ? "backdrop-blur-sm" :
    level === 1 ? "backdrop-blur-md" :
    level === 2 ? "backdrop-blur-lg" :
    "backdrop-blur-2xl";

  return (
    <div
      className={`
        pointer-events-none fixed inset-0 -z-[5]
        ${opacity} ${blur}
        bg-[radial-gradient(circle_at_center,rgba(244,196,94,0.35),transparent_65%)]
        transition-all duration-1000
      `}
    />
  );
}
