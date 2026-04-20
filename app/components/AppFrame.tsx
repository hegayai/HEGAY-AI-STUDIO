"use client";

import SystemShell from "./SystemShell";

export default function AppFrame({ children }: { children: React.ReactNode }) {
  return (
    <SystemShell>
      <div
        className="
          w-full h-full
          relative
          overflow-x-hidden
          overflow-y-auto
          bg-[var(--os-background)]
          text-[var(--platinum)]
          transition-colors duration-500
        "
      >
        {children}
      </div>
    </SystemShell>
  );
}
