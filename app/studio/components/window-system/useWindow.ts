"use client";

import { ReactNode } from "react";
import { useWindowContext } from "./WindowProvider";

export function useWindow() {
  const { openWindow, closeWindow, focusWindow } = useWindowContext();

  const spawnWindow = (config: { title: string; content: ReactNode }) => {
    openWindow(config);
  };

  return {
    openWindow: spawnWindow,
    closeWindow,
    focusWindow,
  };
}
