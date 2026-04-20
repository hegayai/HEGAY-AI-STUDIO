"use client";

import { createContext, useContext, useEffect, useState } from "react";

type MotionContextType = {
  minimal: boolean;
  toggleMinimal: () => void;
};

const MotionContext = createContext<MotionContextType>({
  minimal: false,
  toggleMinimal: () => {},
});

export function useMotion() {
  return useContext(MotionContext);
}

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  const [minimal, setMinimal] = useState(false);

  /* ---------------------------------------------------------
     LOAD USER MOTION PREFERENCE
     --------------------------------------------------------- */
  useEffect(() => {
    const stored = localStorage.getItem("hegay-motion");
    if (stored === "minimal") {
      setMinimal(true);
      document.documentElement.classList.add("minimal-motion");
    }
  }, []);

  /* ---------------------------------------------------------
     APPLY MOTION MODE
     --------------------------------------------------------- */
  const toggleMinimal = () => {
    const next = !minimal;
    setMinimal(next);

    if (next) {
      document.documentElement.classList.add("minimal-motion");
      localStorage.setItem("hegay-motion", "minimal");
    } else {
      document.documentElement.classList.remove("minimal-motion");
      localStorage.setItem("hegay-motion", "full");
    }
  };

  return (
    <MotionContext.Provider value={{ minimal, toggleMinimal }}>
      {children}
    </MotionContext.Provider>
  );
}
