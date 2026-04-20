"use client";

import { useState, useEffect } from "react";
import { useTabs } from "./TabManager";
import { useWindows } from "./WindowManager";
import { useDesktop } from "./DesktopRegistry";

export default function AppLauncher() {
  const [open, setOpen] = useState(false);
  const { openTab } = useTabs();
  const { openWindow } = useWindows();
  const { items } = useDesktop();

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
      if (e.ctrlKey && e.key.toLowerCase() === "space") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  function launch(item) {
    if (item.type === "realm") {
      openTab(item.label, item.path);
    }

    if (item.type === "ritual") {
      openWindow(
        <div className="text-sm opacity-80">
          Ritual triggered: {item.action}
        </div>,
        item.label
      );
    }

    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xl z-50 flex flex-col items-center pt-24">
      <h1 className="text-4xl font-bold mb-10 opacity-90">Hegay OS Launcher</h1>

      <div className="grid grid-cols-6 gap-10 px-20">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => launch(item)}
            className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 hover:bg-white/20 transition-all border border-white/10"
          >
            <div className="w-14 h-14 rounded bg-white/20" />
            <span className="text-sm opacity-90">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
