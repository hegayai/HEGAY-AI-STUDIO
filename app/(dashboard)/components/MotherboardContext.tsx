"use client";

import { createContext, useContext, useState } from "react";

type MotherboardSettings = {
  sidebar: boolean;
  taskbar: boolean;
  launcher: boolean;
  notifications: boolean;
  tabs: boolean;
  windows: boolean;
  desktop: boolean;
  search: boolean;
  commandPalette: boolean;
  systemBar: boolean;
  realms: {
    origin: boolean;
    aesthetic: boolean;
    avatar: boolean;
    mood: boolean;
    dream: boolean;
  };
};

type MotherboardContextType = {
  settings: MotherboardSettings;
  toggle: (key: keyof MotherboardSettings) => void;
  toggleRealm: (realm: keyof MotherboardSettings["realms"]) => void;
};

const MotherboardContext = createContext<MotherboardContextType | null>(null);

export function MotherboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, setSettings] = useState<MotherboardSettings>({
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

  function toggle(key: keyof MotherboardSettings) {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function toggleRealm(realm: keyof MotherboardSettings["realms"]) {
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
  const ctx = useContext(MotherboardContext);
  if (!ctx) throw new Error("useMotherboard must be used inside MotherboardProvider");
  return ctx;
}
