"use client";

import { createContext, useContext, useState } from "react";

export type Tab = {
  id: string;
  title: string;
  path: string;
};

export type TabsContextType = {
  tabs: Tab[];
  active: string | null;
  openTab: (title: string, path: string) => void;
  switchTab: (path: string) => void;
  closeTab: (path: string) => void;
};

const TabsContext = createContext<TabsContextType | null>(null);

export function TabsProvider({ children }: { children: React.ReactNode }) {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [active, setActive] = useState<string | null>(null);

  function openTab(title: string, path: string) {
    setTabs((prev) => {
      if (!prev.find((t) => t.path === path)) {
        return [...prev, { id: path, title, path }];
      }
      return prev;
    });
    setActive(path);
  }

  function switchTab(path: string) {
    setActive(path);
  }

  function closeTab(path: string) {
    setTabs((prev) => prev.filter((t) => t.path !== path));
    if (active === path) {
      const remaining = tabs.filter((t) => t.path !== path);
      setActive(remaining.length ? remaining[0].path : null);
    }
  }

  return (
    <TabsContext.Provider
      value={{ tabs, active, openTab, switchTab, closeTab }}
    >
      {children}
    </TabsContext.Provider>
  );
}

export function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("useTabs must be used inside TabsProvider");
  return ctx;
}
