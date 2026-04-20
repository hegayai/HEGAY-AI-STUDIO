"use client";

import { createContext, useContext, useState } from "react";

const WindowContext = createContext(null);

export function WindowProvider({ children }) {
  const [windows, setWindows] = useState([]);

  function openWindow(component, title = "Window") {
    const id = Date.now();
    setWindows((prev) => [...prev, { id, component, title }]);
  }

  function closeWindow(id) {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }

  return (
    <WindowContext.Provider value={{ windows, openWindow, closeWindow }}>
      {children}

      {windows.map((win) => (
        <FloatingWindow
          key={win.id}
          id={win.id}
          title={win.title}
          onClose={() => closeWindow(win.id)}
        >
          {win.component}
        </FloatingWindow>
      ))}
    </WindowContext.Provider>
  );
}

export function useWindows() {
  return useContext(WindowContext);
}
