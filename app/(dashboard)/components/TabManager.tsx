"use client";

import { createContext, useContext, useState } from "react";
import { useRouter } from "next/navigation";

const TabContext = createContext(null);

export function TabProvider({ children }) {
  const [tabs, setTabs] = useState([
    { title: "Origin", path: "/dashboard" }
  ]);
  const [active, setActive] = useState("/dashboard");
  const router = useRouter();

  function openTab(title, path) {
    setTabs((prev) => {
      if (prev.some((t) => t.path === path)) return prev;
      return [...prev, { title, path }];
    });
    setActive(path);
    router.push(path);
  }

  function closeTab(path) {
    setTabs((prev) => prev.filter((t) => t.path !== path));

    if (active === path) {
      const remaining = tabs.filter((t) => t.path !== path);
      if (remaining.length > 0) {
        setActive(remaining[0].path);
        router.push(remaining[0].path);
      }
    }
  }

  function switchTab(path) {
    setActive(path);
    router.push(path);
  }

  return (
    <TabContext.Provider value={{ tabs, active, openTab, closeTab, switchTab }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTabs() {
  return useContext(TabContext);
}
