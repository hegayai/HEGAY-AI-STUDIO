"use client";

import { createContext, useContext, useEffect, useState } from "react";

type DimmerContextType = {
  dimmed: boolean;
  toggle: () => void;
};

const DimmerContext = createContext<DimmerContextType>({
  dimmed: false,
  toggle: () => {},
});

export function useScreenDimmer() {
  return useContext(DimmerContext);
}

export default function ScreenDimmerProvider({ children }: { children: React.ReactNode }) {
  const [dimmed, setDimmed] = useState(false);

  /* ---------------------------------------------------------
     LOAD USER PREFERENCE
     --------------------------------------------------------- */
  useEffect(() => {
    const stored = localStorage.getItem("hegay-screen-dimmer");
    if (stored === "true") {
      setDimmed(true);
      document.documentElement.classList.add("screen-dimmed");
    }
  }, []);

  /* ---------------------------------------------------------
     APPLY MODE
     --------------------------------------------------------- */
  const toggle = () => {
    const next = !dimmed;
    setDimmed(next);

    if (next) {
      document.documentElement.classList.add("screen-dimmed");
      localStorage.setItem("hegay-screen-dimmer", "true");
    } else {
      document.documentElement.classList.remove("screen-dimmed");
      localStorage.setItem("hegay-screen-dimmer", "false");
    }
  };

  return (
    <DimmerContext.Provider value={{ dimmed, toggle }}>
      {children}
      <DimmerOverlay dimmed={dimmed} />
    </DimmerContext.Provider>
  );
}

/* ---------------------------------------------------------
   DIMMER OVERLAY
   --------------------------------------------------------- */
function DimmerOverlay({ dimmed }: { dimmed: boolean }) {
  if (!dimmed) return null;

  return (
    <div
      className="
        fixed inset-0 z-[8500]
        bg-black/55 backdrop-blur-xl
        pointer-events-none
        transition-opacity duration-500
      "
    >
      <div
        className="
          absolute bottom-6 right-6
          text-[11px] px-3 py-1.5 rounded-xl
          bg-[rgba(255,255,255,0.06)]
          text-[var(--diamond-white)]/70
          tracking-wide
        "
      >
        Screen Dimmer · Active
      </div>
    </div>
  );
}
