"use client";

import { createContext, useContext, useState } from "react";

const DesktopContext = createContext(null);

export function DesktopProvider({ children }) {
  const [items, setItems] = useState([
    {
      id: "origin",
      label: "Origin Realm",
      type: "realm",
      path: "/dashboard",
    },
    {
      id: "aesthetic",
      label: "Aesthetic Realm",
      type: "realm",
      path: "/aesthetic",
    },
    {
      id: "avatar",
      label: "Avatar Realm",
      type: "realm",
      path: "/avatar",
    },
    {
      id: "mood",
      label: "Mood Realm",
      type: "realm",
      path: "/mood",
    },
    {
      id: "dream",
      label: "Dream Realm",
      type: "realm",
      path: "/dream",
    },
    {
      id: "origin-ritual",
      label: "Run Origin Ritual",
      type: "ritual",
      action: "origin-creation",
    },
  ]);

  return (
    <DesktopContext.Provider value={{ items }}>
      {children}
    </DesktopContext.Provider>
  );
}

export function useDesktop() {
  return useContext(DesktopContext);
}
