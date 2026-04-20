"use client";

import { createContext, useContext, useState } from "react";

type Realm = "origin" | "aesthetic" | "avatar" | "mood" | "dream";

interface RealmContextType {
  realm: Realm;
  setRealm: (r: Realm) => void;
}

const RealmContext = createContext<RealmContextType | null>(null);

export function RealmProvider({ children }: { children: React.ReactNode }) {
  const [realm, setRealm] = useState<Realm>("origin");

  return (
    <RealmContext.Provider value={{ realm, setRealm }}>
      {children}
    </RealmContext.Provider>
  );
}

export function useRealm() {
  const ctx = useContext(RealmContext);
  if (!ctx) throw new Error("useRealm must be used inside RealmProvider");
  return ctx;
}
