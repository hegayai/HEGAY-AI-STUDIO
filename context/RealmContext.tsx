// context/RealmContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

const RealmContext = createContext(null);

export function RealmProvider({ children }) {
  const [activeRealm, setActiveRealm] = useState("dashboard");

  return (
    <RealmContext.Provider value={{ activeRealm, setActiveRealm }}>
      {children}
    </RealmContext.Provider>
  );
}

export function useRealm() {
  const ctx = useContext(RealmContext);
  if (!ctx) {
    throw new Error("useRealm must be used inside RealmProvider");
  }
  return ctx;
}
