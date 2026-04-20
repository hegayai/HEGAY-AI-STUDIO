"use client";

import { ReactNode } from "react";

export default function EngineOutput({ children }: { children: ReactNode }) {
  return (
    <div className="relative rounded-xl border border-white/10 bg-black/60 p-3 flex items-center justify-center min-h-[220px]">
      {children}
    </div>
  );
}
