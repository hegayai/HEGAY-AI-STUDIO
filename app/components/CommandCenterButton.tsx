"use client";

import { useState } from "react";

export default function CommandCenterButton() {
  const [hover, setHover] = useState(false);

  const openCommandCenter = () => {
    const event = new KeyboardEvent("keydown", {
      key: "c",
      shiftKey: true,
      metaKey: navigator.platform.toUpperCase().includes("MAC"),
      ctrlKey: !navigator.platform.toUpperCase().includes("MAC"),
    });
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={openCommandCenter}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="
        fixed bottom-6 left-6 z-[9999]
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
      ⌘ Command Center
    </button>
  );
}
