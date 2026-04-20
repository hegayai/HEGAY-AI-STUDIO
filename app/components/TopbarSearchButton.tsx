"use client";

import { useState } from "react";

export default function TopbarSearchButton() {
  const [hover, setHover] = useState(false);

  const openSearch = () => {
    const event = new KeyboardEvent("keydown", {
      key: "k",
      metaKey: navigator.platform.toUpperCase().includes("MAC"),
      ctrlKey: !navigator.platform.toUpperCase().includes("MAC"),
    });
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={openSearch}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="
        h-9 px-4 rounded-xl
        glass-panel
        text-[13px]
        text-[var(--platinum)]
        shadow-[0_8px_30px_rgba(0,0,0,0.5)]
        transition-all duration-300
        flex items-center gap-2
      "
      style={{
        transform: hover ? "scale(1.05)" : "scale(1)",
        background:
          hover
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0.06)",
      }}
    >
      <span className="opacity-80">Search</span>
      <span
        className="
          text-[10px] px-2 py-0.5 rounded-md
          bg-[rgba(255,255,255,0.08)]
          text-[var(--diamond-white)]/70
        "
      >
        ⌘K
      </span>
    </button>
  );
}
