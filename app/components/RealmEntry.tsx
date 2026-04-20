"use client";

import type { ReactNode } from "react";

export default function RealmEntry({ children }: { children: ReactNode }) {
  return (
    <div className="animate-fade-in-up-soft">
      {children}
    </div>
  );
}
