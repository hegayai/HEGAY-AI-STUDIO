"use client";

import { useState } from "react";

export default function TopbarProfileButton() {
  const [hover, setHover] = useState(false);

  const openProfileMenu = () => {
    const event = new KeyboardEvent("keydown", {
      key: "p",
      metaKey: navigator.platform.toUpperCase().includes("MAC"),
      ctrlKey: !navigator.platform.toUpperCase().includes("MAC"),
    });
    window.dispatchEvent(event);
  };

  return (
    <button
      onClick={openProfileMenu}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="
        h-9 w-9 rounded-full
        overflow-hidden
        shadow-[0_8px_30px_rgba(0,0,0,0.5)]
        transition-all duration-300
        flex items-center justify-center
        bg-[rgba(255,255,255,0.06)]
      "
      style={{
        transform: hover ? "scale(1.08)" : "scale(1)",
        background:
          hover
            ? "rgba(255,255,255,0.12)"
            : "rgba(255,255,255,0.06)",
      }}
    >
      {/* Avatar Placeholder */}
      <div
        className="
          h-full w-full
          bg-[linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05))]
          flex items-center justify-center
          text-[var(--platinum)]
          text-[14px]
        "
      >
        BI
      </div>
    </button>
  );
}
