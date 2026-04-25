"use client";

import React from "react";
import { useApplyInfluence } from "./useApplyInfluence";

export default function PantheonInfluenceEngine({
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
        w-full h-full rounded-xl transition-all duration-300
      `}
      style={{
        opacity: influence.intensity / 100,
      }}
    >
      {children}
    </div>
  );
}
