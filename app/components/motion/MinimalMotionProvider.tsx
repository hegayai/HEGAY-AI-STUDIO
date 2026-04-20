"use client";

import { createContext, useContext, useEffect, useState } from "react";

type MinimalMotionContextType = {
  minimal: boolean;
  setMinimal: (value: boolean) => void;
};

const MinimalMotionContext = createContext<MinimalMotionContextType>({
  minimal: false,
  setMinimal: () => {},
});

export function useMinimalMotion() {
  return useContext(MinimalMotionContext);
}

export function MinimalMotionProvider({ children }: { children: React.ReactNode }) {
  const [minimal, setMinimalState] = useState(false);

  /* ---------------------------------------------------------
     LOAD USER PREFERENCE
     --------------------------------------------------------- */
  useEffect(() => {
    const stored = localStorage.getItem("hegay-minimal-motion");
    if (stored === "true") {
      setMinimalState(true);
      document.documentElement.classList.add("minimal-motion");
    }
  }, []);

  /* ---------------------------------------------------------
     APPLY MODE
     --------------------------------------------------------- */
  const setMinimal = (value: boolean) => {
    setMinimalState(value);

    if (value) {
      document.documentElement.classList.add("minimal-motion");
      localStorage.setItem("hegay-minimal-motion", "true");
    } else {
      document.documentElement.classList.remove("minimal-motion");
      localStorage.setItem("hegay-minimal-motion", "false");
    }
  };

  return (
    <MinimalMotionContext.Provider value={{ minimal, setMinimal }}>
      {children}
    </MinimalMotionContext.Provider>
  );
}
