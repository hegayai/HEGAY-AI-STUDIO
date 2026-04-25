"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type RealmContextType = {
  activeRealm: string;
  setActiveRealm: (realm: string) => void;
};

const RealmContext = createContext<RealmContextType | null>(null);

type RealmProviderProps = {
  children: ReactNode;
};

export function RealmProvider({ children }: RealmProviderProps) {
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
    throw new Error("useRealm must be used inside a RealmProvider");
  }
  return ctx;
}
