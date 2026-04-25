"use client";

import React, { createContext, useContext, useState } from "react";

/* ───────────────── TYPES ───────────────── */

type DesktopItem = {
  id: string;
  label: string;
  type: "realm" | "ritual";
  path?: string;
  action?: string;
};

type DesktopContextType = {
  items: DesktopItem[];
  registerItem: (item: DesktopItem) => void;
};

/* ───────────────── CONTEXT ───────────────── */

const DesktopContext = createContext<DesktopContextType | null>(null);

/* ───────────────── PROVIDER ───────────────── */

export function DesktopProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<DesktopItem[]>([]);

  function registerItem(item: DesktopItem) {
    setItems((prev) => {
      if (prev.some((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  }

  return (
    <DesktopContext.Provider value={{ items, registerItem }}>
      {children}
    </DesktopContext.Provider>
  );
}

/* ───────────────── HOOK ───────────────── */

export function useDesktop() {
  const ctx = useContext(DesktopContext);
  if (!ctx) {
    throw new Error("useDesktop must be used inside a DesktopProvider");
  }
  return ctx;
}
