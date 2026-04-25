"use client";

import { useTabs } from "./TabManager";

export default function TabBar() {
  const { tabs, active, switchTab, closeTab } = useTabs();

  return (
    <div className="fixed top-0 left-0 right-0 h-12 bg-black/40 backdrop-blur border-b border-white/10 flex items-center gap-3 px-4">
      {tabs.map((tab) => (
        <button
          key={tab.path}
          onClick={() => switchTab(tab.path)}
          className={`flex items-center gap-2 px-3 py-1 rounded transition-all ${
            active === tab.path
              ? "bg-white/20 text-white"
              : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
          }`}
        >
          {/* FIXED: tab.label → tab.title */}
          <span>{tab.title}</span>

          <span
            onClick={(e) => {
              e.stopPropagation();
              closeTab(tab.path);
            }}
            className="text-xs opacity-60 hover:opacity-100 cursor-pointer"
          >
            ✕
          </span>
        </button>
      ))}
    </div>
  );
}
