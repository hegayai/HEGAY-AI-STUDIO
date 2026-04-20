"use client";

import { useEffect, useState } from "react";

export default function CosmicStatusBar() {
  const [time, setTime] = useState("");

  /* ---------------------------------------------------------
     LIVE CLOCK
     --------------------------------------------------------- */
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const h = now.getHours().toString().padStart(2, "0");
      const m = now.getMinutes().toString().padStart(2, "0");
      setTime(`${h}:${m}`);
    };

    update();
    const interval = setInterval(update, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="
        fixed top-0 left-0 right-0 z-[900]
        glass-panel
        h-10
        flex items-center justify-between
        px-4
        shadow-[0_20px_60px_rgba(0,0,0,0.9)]
        backdrop-blur-2xl
      "
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4">
        <span className="text-[11px] text-[var(--platinum)]">
          {time}
        </span>

        <span className="text-[11px] text-[var(--diamond-white)]/70">
          Hegay OS Supreme
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* WORLD-SOUL STATUS */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[var(--diamond-white)]/60">
            World‑Soul
          </span>
          <span className="h-2 w-8 rounded-full bg-[rgba(74,107,255,0.45)]" />
        </div>

        {/* PANTHEON STATUS */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[var(--diamond-white)]/60">
            Pantheon
          </span>
          <span className="h-2 w-5 rounded-full bg-[rgba(107,74,255,0.5)]" />
        </div>

        {/* SIGNAL STATUS */}
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-[var(--diamond-white)]/60">
            Signal
          </span>
          <span className="h-2 w-2 rounded-full bg-[var(--royal-gold)]" />
        </div>
      </div>
    </div>
  );
}
