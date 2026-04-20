"use client";

import { createContext, useContext, useEffect, useState } from "react";

type FocusContextType = {
  enabled: boolean;
  toggle: () => void;
};

const FocusContext = createContext<FocusContextType>({
  enabled: false,
  toggle: () => {},
});

export function useFocusMode() {
  return useContext(FocusContext);
}

export default function FocusModeProvider({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  /* ---------------------------------------------------------
     LOAD USER PREFERENCE
     --------------------------------------------------------- */
  useEffect(() => {
    const stored = localStorage.getItem("hegay-focus-mode");
    if (stored === "true") {
      setEnabled(true);
      document.documentElement.classList.add("focus-mode");
    }
  }, []);

  /* ---------------------------------------------------------
     APPLY MODE
     --------------------------------------------------------- */
  const toggle = () => {
    const next = !enabled;
    setEnabled(next);

    if (next) {
      document.documentElement.classList.add("focus-mode");
      localStorage.setItem("hegay-focus-mode", "true");
    } else {
      document.documentElement.classList.remove("focus-mode");
      localStorage.setItem("hegay-focus-mode", "false");
    }
  };

  return (
    <FocusContext.Provider value={{ enabled, toggle }}>
      {children}
      <FocusOverlay enabled={enabled} />
    </FocusContext.Provider>
  );
}

/* ---------------------------------------------------------
   FOCUS OVERLAY
   --------------------------------------------------------- */
function FocusOverlay({ enabled }: { enabled: boolean }) {
  if (!enabled) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9000]
        bg-black/70 backdrop-blur-2xl
        pointer-events-none
        transition-opacity duration-500
      "
    >
      <div
        className="
          absolute top-6 right-6
          text-[11px] px-3 py-1.5 rounded-xl
          bg-[rgba(255,255,255,0.06)]
          text-[var(--diamond-white)]/70
          tracking-wide
        "
      >
        Focus Mode · Active
      </div>
    </div>
  );
}
