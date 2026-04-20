"use client";

import { useEffect, useState } from "react";

export default function StatusBar() {
  const [time, setTime] = useState("");

  /* ---------------------------------------------------------
     LIVE CLOCK
     --------------------------------------------------------- */
  useEffect(() => {
    const update = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      setTime(formatted);
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer
      className="
        fixed bottom-0 left-0 right-0 z-[9000]
        h-10
        glass-panel
        backdrop-blur-2xl
        border-t border-[rgba(255,255,255,0.06)]
        shadow-[0_-8px_40px_rgba(0,0,0,0.6)]
        flex items-center justify-between
        px-6
      "
    >
      {/* LEFT — SYSTEM STATES */}
      <div className="flex items-center gap-4 text-[11px] text-[var(--diamond-white)]/70">
        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[var(--cosmic-blue)] shadow-[0_0_6px_var(--cosmic-blue)]" />
          World‑Soul: Stable
        </span>

        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(0,255,0,0.6)]" />
          Pantheon: Online
        </span>

        <span className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_6px_rgba(255,255,0,0.6)]" />
          Signal: Clear
        </span>
      </div>

      {/* RIGHT — CLOCK */}
      <div className="text-[12px] text-[var(--platinum)] tracking-wide">
        {time}
      </div>
    </footer>
  );
}
