"use client";

import { useTabs } from "./TabManager";

export default function TabBar() {
  const { tabs, active, switchTab, closeTab } = useTabs();

  return (
    <div className="flex gap-2 px-4 py-2 border-b border-white/10 bg-white/5 backdrop-blur">
      {tabs.map((tab) => (
        <div
          key={tab.path}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-all ${
            active === tab.path
              ? "bg-white/20 text-white"
              : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
          }`}
          onClick={() => switchTab(tab.path)}
        >
          <span>{tab.title}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeTab(tab.path);
            }}
            className="text-white/50 hover:text-white"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}
