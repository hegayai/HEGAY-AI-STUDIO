"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Shortcuts() {
  const router = useRouter();

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      // Realm jumps
      if (e.altKey && e.key === "1") router.push("/dashboard");
      if (e.altKey && e.key === "2") router.push("/aesthetic");
      if (e.altKey && e.key === "3") router.push("/avatar");
      if (e.altKey && e.key === "4") router.push("/mood");
      if (e.altKey && e.key === "5") router.push("/dream");

      // Rituals
      if (e.altKey && e.key.toLowerCase() === "r") {
        router.push("/dashboard?run=1");
      }

      // Command Palette
      if (e.ctrlKey && e.key.toLowerCase() === "k") {
        document.dispatchEvent(new Event("open-cmd"));
      }

      // Global Search
      if (e.ctrlKey && e.key.toLowerCase() === "f") {
        document.dispatchEvent(new Event("open-search"));
      }

      // App Launcher
      if (e.ctrlKey && e.key.toLowerCase() === " ") {
        document.dispatchEvent(new Event("toggle-launcher"));
      }

      // Notification Center
      if (e.ctrlKey && e.key.toLowerCase() === "n") {
        document.dispatchEvent(new Event("toggle-notifications"));
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return null;
}
