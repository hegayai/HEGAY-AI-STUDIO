"use client";

import { useDesktop } from "./DesktopRegistry";
import { useTabs } from "./TabManager";
import { useWindows } from "./WindowManager";

type DesktopItem = {
  id: string;
  label: string;
  type: "realm" | "ritual";
  path?: string;
  action?: string;
};

export default function Desktop() {
  const { items } = useDesktop();
  const { openTab } = useTabs();
  const { openWindow } = useWindows();

  function handleClick(item: DesktopItem) {
    if (item.type === "realm") {
      openTab(item.label, item.path || "");
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
    <div className="grid grid-cols-6 gap-6 p-6">
      {items.map((item: DesktopItem) => (
        <button
          key={item.id}
          onClick={() => handleClick(item)}
          className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition border border-white/10"
        >
          <div className="w-12 h-12 rounded bg-white/20" />
          <span className="text-xs opacity-90">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
