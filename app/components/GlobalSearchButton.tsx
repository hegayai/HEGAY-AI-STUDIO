"use client";

import { useState } from "react";

export default function GlobalSearchButton() {
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
        fixed bottom-6 right-6 z-[9999]
        px-5 py-3 rounded-2xl
        glass-panel
        text-[13px]
        text-[var(--platinum)]
        shadow-[0_20px_80px_rgba(0,0,0,0.9)]
        transition-all duration-300
      "
      style={{
        transform: hover ? "scale(1.06)" : "scale(1)",
        background:
          hover
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0.06)",
      }}
    >
      ⌘ Global Search
    </button>
  );
}
