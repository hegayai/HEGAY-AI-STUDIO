"use client";

import { useApplyInfluence } from "./useApplyInfluence";

export default function InfluenceField({
  realm,
  children,
}: {
  realm: string;
  children: React.ReactNode;
}) {
  const influence = useApplyInfluence(realm);

  return (
    <div
      className={`
        ${influence.color || ""}
        ${influence.glow ? "shadow-[0_0_40px_rgba(255,200,150,0.3)]" : ""}
        ${
          influence.motion === "pulse"
            ? "animate-pulse-soft"
            : influence.motion === "vibrate"
            ? "animate-vibrate-soft"
            : influence.motion === "slow"
            ? "animate-fade-in-up-soft"
            : ""
        }
      `}
    >
      {children}
    </div>
  );
}
