"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

type RitualContextType = {
  startRitual: (name: string) => void;
  activeRitual: string | null;
};

const RitualContext = createContext<RitualContextType>({
  startRitual: () => {},
  activeRitual: null,
});

export function useRitual() {
  return useContext(RitualContext);
}

export function RitualProvider({ children }: { children: ReactNode }) {
  const [activeRitual, setActiveRitual] = useState<string | null>(null);

  /* ---------------------------------------------------------
     START A RITUAL
     --------------------------------------------------------- */
  const startRitual = useCallback((name: string) => {
    setActiveRitual(name);

    setTimeout(() => {
      setActiveRitual(null);
    }, 2000);
  }, []);

  return (
    <RitualContext.Provider value={{ startRitual, activeRitual }}>
      {children}
      <RitualOverlay active={activeRitual} />
    </RitualContext.Provider>
  );
}

/* ---------------------------------------------------------
   RITUAL OVERLAY
   --------------------------------------------------------- */
function RitualOverlay({ active }: { active: string | null }) {
  if (!active) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9998]
        flex items-center justify-center
        bg-black/60 backdrop-blur-xl
        pointer-events-none
        animate-fade-in
      "
    >
      <div
        className="
          px-6 py-4 rounded-2xl glass-panel
          text-[var(--platinum)]
          shadow-[0_40px_120px_rgba(0,0,0,0.9)]
          text-center text-sm
        "
      >
        <div className="text-xs uppercase tracking-[0.3em] text-[var(--cosmic-blue)] mb-2">
          Ritual Active
        </div>
        <div className="text-[13px]">{active}</div>
      </div>
    </div>
  );
}
