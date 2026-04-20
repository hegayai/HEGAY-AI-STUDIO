"use client";

import { useEffect, useState } from "react";

export default function IdleFade() {
  const [idle, setIdle] = useState(false);
  const [lastMove, setLastMove] = useState(Date.now());

  /* ---------------------------------------------------------
     USER ACTIVITY TRACKING
     --------------------------------------------------------- */
  useEffect(() => {
    const update = () => {
      setLastMove(Date.now());
      setIdle(false);
    };

    window.addEventListener("mousemove", update);
    window.addEventListener("keydown", update);
    window.addEventListener("click", update);

    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("keydown", update);
      window.removeEventListener("click", update);
    };
  }, []);

  /* ---------------------------------------------------------
     IDLE DETECTION
     --------------------------------------------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      const diff = Date.now() - lastMove;
      if (diff > 20000) {
        setIdle(true);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [lastMove]);

  /* ---------------------------------------------------------
     IDLE OVERLAY
     --------------------------------------------------------- */
  if (!idle) return null;

  return (
    <div
      className="
        fixed inset-0 z-[8400]
        bg-black/40 backdrop-blur-md
        pointer-events-none
        transition-opacity duration-700
      "
    >
      <div
        className="
          absolute bottom-6 left-1/2 -translate-x-1/2
          text-[11px] px-3 py-1.5 rounded-xl
          bg-[rgba(255,255,255,0.06)]
          text-[var(--diamond-white)]/70
          tracking-wide
        "
      >
        Idle Fade · Active
      </div>
    </div>
  );
}
