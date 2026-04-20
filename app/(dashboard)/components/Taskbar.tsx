"use client";

import { useTabs } from "./TabManager";
import { useWindows } from "./WindowManager";

export default function Taskbar() {
  const { tabs, active, switchTab } = useTabs();
  const { windows } = useWindows();

  const runningApps = [
    ...tabs.map((t) => ({ type: "tab", title: t.title, path: t.path })),
    ...windows.map((w) => ({ type: "window", title: w.title, id: w.id })),
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-14 bg-black/40 backdrop-blur border-t border-white/10 flex items-center gap-4 px-6">
      {runningApps.map((app, i) => (
        <button
          key={i}
          onClick={() => {
            if (app.type === "tab") switchTab(app.path);
          }}
          className={`px-4 py-2 rounded-lg transition-all ${
            app.type === "tab" && app.path === active
              ? "bg-white/20 text-white"
              : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
          }`}
        >
          {app.title}
        </button>
      ))}
    </div>
  );
}
