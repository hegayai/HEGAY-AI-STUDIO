"use client";

import { useEffect, useState } from "react";

export default function CommandCenterOverlay() {
  const [open, setOpen] = useState(false);

  /* ---------------------------------------------------------
     KEYBOARD SHORTCUT: ⌘ + Shift + C  (or Ctrl + Shift + C)
     --------------------------------------------------------- */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const mod = isMac ? e.metaKey : e.ctrlKey;

      if (mod && e.shiftKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9998]
        bg-black/70 backdrop-blur-2xl
        flex items-center justify-center
        transition-opacity duration-500
      "
      onClick={() => setOpen(false)}
    >
      <div
        className="
          glass-panel
          px-10 py-8 rounded-3xl
          shadow-[0_40px_140px_rgba(0,0,0,1)]
          text-center
          text-[var(--platinum)]
          max-w-lg
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-xs uppercase tracking-[0.35em] text-[var(--cosmic-blue)] mb-3">
          Command Center
        </div>

        <div className="text-[14px] leading-relaxed mb-6">
          The Command Center is active.  
          Use this portal to navigate, orchestrate, and command the creative OS.
        </div>

        <button
          onClick={() => setOpen(false)}
          className="
            px-5 py-2.5 rounded-xl
            bg-[rgba(255,255,255,0.08)]
            hover:bg-[rgba(255,255,255,0.12)]
            transition
            text-[13px]
          "
        >
          Close
        </button>
      </div>
    </div>
  );
}
