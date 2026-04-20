"use client";

import { useEffect, useState } from "react";

export default function SystemBootRitual() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const alreadyBooted = sessionStorage.getItem("hegay-os-booted");
    if (alreadyBooted === "true") return;

    setVisible(true);
    sessionStorage.setItem("hegay-os-booted", "true");

    const timeout = setTimeout(() => {
      setVisible(false);
    }, 2200);

    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9997]
        flex items-center justify-center
        bg-black/90
        backdrop-blur-3xl
      "
    >
      <div className="flex flex-col items-center gap-3">
        <div
          className="
            h-14 w-14 rounded-3xl
            bg-[radial-gradient(circle_at_top,var(--glow-blue),transparent_60%)]
            shadow-[0_0_60px_rgba(0,0,0,1)]
          "
        />
        <div className="text-xs uppercase tracking-[0.35em] text-[var(--cosmic-blue)]">
          Hegay OS Supreme
        </div>
        <div className="text-[11px] text-[var(--diamond-white)]/70">
          Initializing creative civilization surface…
        </div>
      </div>
    </div>
  );
}
