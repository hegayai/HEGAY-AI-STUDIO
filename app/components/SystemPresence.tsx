"use client";

import { useEffect, useState } from "react";

export default function SystemPresence() {
  const [active, setActive] = useState(true);
  const [lastMove, setLastMove] = useState(Date.now());

  /* ---------------------------------------------------------
     USER ACTIVITY TRACKING
     --------------------------------------------------------- */
  useEffect(() => {
    const update = () => {
      setLastMove(Date.now());
      setActive(true);
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
      if (diff > 15000) {
        setActive(false);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [lastMove]);

  /* ---------------------------------------------------------
     PRESENCE AURA
     --------------------------------------------------------- */
  if (active) {
    return (
      <div
        className="
          fixed bottom-0 right-0 z-[50]
          h-3 w-3 rounded-full
          bg-[var(--cosmic-blue)]
          shadow-[0_0_12px_var(--cosmic-blue)]
          opacity-80
          pointer-events-none
          transition-all duration-500
        "
      />
    );
  }

  return (
    <div
      className="
        fixed bottom-0 right-0 z-[50]
        h-3 w-3 rounded-full
        bg-[var(--diamond-white)]/20
        shadow-[0_0_6px_rgba(255,255,255,0.2)]
        opacity-40
        pointer-events-none
        transition-all duration-700
      "
    />
  );
}
