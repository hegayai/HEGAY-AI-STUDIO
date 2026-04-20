"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type ResonanceLevel = 0 | 1 | 2 | 3; // 0 = calm, 3 = intense

type WorldSoulContextType = {
  level: ResonanceLevel;
  setLevel: (level: ResonanceLevel) => void;
};

const WorldSoulContext = createContext<WorldSoulContextType | null>(null);

export function useWorldSoul() {
  const ctx = useContext(WorldSoulContext);
  if (!ctx) throw new Error("useWorldSoul must be used inside <WorldSoulResonanceProvider>");
  return ctx;
}

export function WorldSoulResonanceProvider({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState<ResonanceLevel>(1);

  // Gentle autonomous oscillation
  useEffect(() => {
    let current: ResonanceLevel = 1;
    const interval = setInterval(() => {
      current = ((current + 1) % 4) as ResonanceLevel;
      setLevel(current);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <WorldSoulContext.Provider value={{ level, setLevel }}>
      {children}
    </WorldSoulContext.Provider>
  );
}
