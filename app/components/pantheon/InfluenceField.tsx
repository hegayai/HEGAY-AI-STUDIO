"use client";

import React from "react";

export type InfluenceDefinition = {
  color?: string;
  glow?: boolean;
  motion?: boolean;
};

export default function InfluenceField({
  influence,
}: {
  influence: InfluenceDefinition;
}) {
  return (
    <div
      className={`
        ${influence.color || ""}
        ${influence.glow ? "shadow-[0_0_40px_rgba(255,200,150,0.3)]" : ""}
        ${influence.motion ? "animate-pulse" : ""}
        h-20 w-20 rounded-full transition-all duration-300
      `}
    />
  );
}
