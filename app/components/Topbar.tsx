"use client";

import TopbarSearchButton from "./TopbarSearchButton";
import TopbarNotificationButton from "./TopbarNotificationButton";
import TopbarProfileButton from "./TopbarProfileButton";

export default function Topbar() {
  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-[9000]
        h-14
        glass-panel
        backdrop-blur-2xl
        border-b border-[rgba(255,255,255,0.06)]
        shadow-[0_8px_40px_rgba(0,0,0,0.6)]
        flex items-center justify-between
        px-6
      "
    >
      {/* LEFT — BRAND */}
      <div className="flex items-center gap-3">
        <div
          className="
            h-7 w-7 rounded-xl
            bg-[radial-gradient(circle_at_top,var(--glow-blue),transparent_60%)]
            shadow-[0_0_20px_var(--glow-blue)]
          "
        />
        <span className="text-[13px] tracking-wide text-[var(--platinum)]">
          Hegay OS Supreme
        </span>
      </div>

      {/* RIGHT — BUTTONS */}
      <div className="flex items-center gap-3">
        <TopbarSearchButton />
        <TopbarNotificationButton />
        <TopbarProfileButton />
      </div>
    </header>
  );
}
