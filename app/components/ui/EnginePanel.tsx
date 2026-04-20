"use client";

import { ReactNode } from "react";

export default function EnginePanel({ children }: { children: ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}
