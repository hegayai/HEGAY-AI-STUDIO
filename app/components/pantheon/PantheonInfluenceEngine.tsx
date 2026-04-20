"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { PantheonInfluenceRegistry, InfluenceDefinition } from "./InfluenceRegistry";

type InfluenceContextType = {
  getInfluenceForRealm: (realm: string) => InfluenceDefinition[];
};

const InfluenceContext = createContext<InfluenceContextType | null>(null);

export function useInfluence() {
  const ctx = useContext(InfluenceContext);
  if (!ctx) throw new Error("useInfluence must be used inside <PantheonInfluenceProvider>");
  return ctx;
}

export function PantheonInfluenceProvider({ children }: { children: ReactNode }) {
  const getInfluenceForRealm = (realm: string) => {
    return PantheonInfluenceRegistry.filter((inf) =>
      inf.realms.includes(realm)
    );
  };

  return (
    <InfluenceContext.Provider value={{ getInfluenceForRealm }}>
      {children}
    </InfluenceContext.Provider>
  );
}
