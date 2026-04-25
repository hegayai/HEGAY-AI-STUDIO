"use client";

import React from "react";
import { TabsProvider } from "./components/TabManager";
import { WindowsProvider } from "./components/WindowManager";
import { DesktopProvider } from "./components/DesktopRegistry";

export function OSProviders({ children }: { children: React.ReactNode }) {
  return (
    <DesktopProvider>
      <TabsProvider>
        <WindowsProvider>{children}</WindowsProvider>
      </TabsProvider>
    </DesktopProvider>
  );
}
