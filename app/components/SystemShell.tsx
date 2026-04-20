"use client";

import { useEffect } from "react";

import Topbar from "./Topbar";
import StatusBar from "./StatusBar";
import SystemBar from "./SystemBar";

import FocusModeProvider from "./FocusMode";
import ScreenDimmerProvider from "./ScreenDimmer";
import IdleFade from "./IdleFade";

import CommandCenterOverlay from "./CommandCenterOverlay";
import CommandCenterButton from "./CommandCenterButton";

import GlobalSearch from "./GlobalSearch";
import GlobalSearchButton from "./GlobalSearchButton";

import CommandPalette from "./CommandPalette";
import ProfileMenu from "./ProfileMenu";

export default function SystemShell({ children }: { children: React.ReactNode }) {
  /* ---------------------------------------------------------
     ROOT CLASS INITIALIZATION
     --------------------------------------------------------- */
  useEffect(() => {
    document.documentElement.classList.add("hegay-os");
  }, []);

  return (
    <FocusModeProvider>
      <ScreenDimmerProvider>
        {/* GLOBAL OVERLAYS */}
        <IdleFade />
        <CommandCenterOverlay />
        <GlobalSearch />
        <CommandPalette />
        <ProfileMenu />

        {/* SYSTEM STRUCTURE */}
        <Topbar />

        <main
          className="
            pt-14 pb-16
            min-h-screen
            relative
            z-[1]
          "
        >
          {children}
        </main>

        <SystemBar />
        <StatusBar />

        {/* FLOATING BUTTONS */}
        <CommandCenterButton />
        <GlobalSearchButton />
      </ScreenDimmerProvider>
    </FocusModeProvider>
  );
}
