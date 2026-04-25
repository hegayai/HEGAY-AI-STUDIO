"use client";

import React, { createContext, useContext, useState } from "react";

/* ───────────────── TYPES ───────────────── */

type WindowItem = {
  id: string;
  title: string;
  content: React.ReactNode;
};

type WindowsContextType = {
  windows: WindowItem[];
  openWindow: (content: React.ReactNode, title: string) => void;
  closeWindow: (id: string) => void;
};

/* ───────────────── CONTEXT ───────────────── */

const WindowsContext = createContext<WindowsContextType | null>(null);

/* ───────────────── PROVIDER ───────────────── */

export function WindowsProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<WindowItem[]>([]);

  function openWindow(content: React.ReactNode, title: string) {
    const id = `${title}-${Date.now()}`;

    setWindows((prev) => [...prev, { id, title, content }]);
  }

  function closeWindow(id: string) {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <WindowsContext.Provider value={{ windows, openWindow, closeWindow }}>
      {children}
    </WindowsContext.Provider>
  );
}

/* ───────────────── HOOK ───────────────── */

export function useWindows() {
  const ctx = useContext(WindowsContext);
  if (!ctx) {
    throw new Error("useWindows must be used inside a WindowsProvider");
  }
  return ctx;
}
