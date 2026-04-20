"use client";

import { createContext, useContext, useState } from "react";

const MotherboardContext = createContext(null);

export function MotherboardProvider({ children }) {
  const [settings, setSettings] = useState({
    sidebar: true,
    taskbar: true,
    launcher: true,
    notifications: true,
    tabs: true,
    windows: true,
    desktop: true,
    search: true,
    commandPalette: true,
    systemBar: true,
    realms: {
      origin: true,
      aesthetic: true,
      avatar: true,
      mood: true,
      dream: true,
    },
  });

  function toggle(key) {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function toggleRealm(realm) {
    setSettings((prev) => ({
      ...prev,
      realms: { ...prev.realms, [realm]: !prev.realms[realm] },
    }));
  }

  return (
    <MotherboardContext.Provider value={{ settings, toggle, toggleRealm }}>
      {children}
    </MotherboardContext.Provider>
  );
}

export function useMotherboard() {
  return useContext(MotherboardContext);
}
