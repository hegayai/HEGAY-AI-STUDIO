"use client";

import { useDesktop } from "./DesktopRegistry";
import { useTabs } from "./TabManager";
import { useWindows } from "./WindowManager";

export default function Desktop() {
  const { items } = useDesktop();
  const { openTab } = useTabs();
  const { openWindow } = useWindows();

  function handleClick(item) {
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
  }

  return (
    <div className="grid grid-cols-6 gap-6 p-10">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item)}
          className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all border border-white/10"
        >
          <div className="w-10 h-10 rounded bg-white/20" />
          <span className="text-sm opacity-90">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
