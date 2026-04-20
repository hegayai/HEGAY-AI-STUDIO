"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

type WindowConfig = {
  id: string;
  title: string;
  content: ReactNode;
  x: number;
  y: number;
  width: number;
  height: number;
  z: number;
  isMinimized: boolean;
  isMaximized: boolean;
};

type WindowContextType = {
  windows: WindowConfig[];
  openWindow: (config: { title: string; content: ReactNode }) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  moveWindow: (id: string, x: number, y: number) => void;
  updateWindow: (id: string, partial: Partial<WindowConfig>) => void;
};

const WindowContext = createContext<WindowContextType | null>(null);

export function WindowProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<WindowConfig[]>([]);

  const getMaxZ = useCallback(
    () => (windows.length ? Math.max(...windows.map((w) => w.z)) : 10),
    [windows]
  );

  const openWindow = useCallback(
    ({ title, content }: { title: string; content: ReactNode }) => {
      const id = `win-${Date.now()}-${Math.floor(Math.random() * 9999)}`;
      const maxZ = getMaxZ();

      const newWindow: WindowConfig = {
        id,
        title,
        content,
        x: 160 + Math.random() * 120,
        y: 120 + Math.random() * 80,
        width: 460,
        height: 280,
        z: maxZ + 1,
        isMinimized: false,
        isMaximized: false,
      };

      setWindows((prev) => [...prev, newWindow]);
    },
    [getMaxZ]
  );

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const focusWindow = useCallback(
    (id: string) => {
      const maxZ = getMaxZ();
      setWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, z: maxZ + 1 } : w))
      );
    },
    [getMaxZ]
  );

  const moveWindow = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, x, y } : w))
    );
  }, []);

  const updateWindow = useCallback(
    (id: string, partial: Partial<WindowConfig>) => {
      setWindows((prev) =>
        prev.map((w) => (w.id === id ? { ...w, ...partial } : w))
      );
    },
    []
  );

  return (
    <WindowContext.Provider
      value={{
        windows,
        openWindow,
        closeWindow,
        focusWindow,
        moveWindow,
        updateWindow,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
}

export function useWindowContext() {
  const ctx = useContext(WindowContext);
  if (!ctx) {
    throw new Error("useWindowContext must be used within WindowProvider");
  }
  return ctx;
}
