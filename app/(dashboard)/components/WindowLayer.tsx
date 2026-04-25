"use client";

import { useWindows } from "./WindowManager";

export default function WindowLayer() {
  const { windows, closeWindow } = useWindows();

  if (!windows.length) return null;

  return (
    <>
      {windows.map((w) => (
        <div
          key={w.id}
          className="fixed top-24 left-1/2 -translate-x-1/2 w-[420px] rounded-xl bg-black/80 border border-white/15 shadow-2xl p-4 z-40"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold opacity-90">{w.title}</span>
            <button
              onClick={() => closeWindow(w.id)}
              className="text-xs opacity-70 hover:opacity-100"
            >
              ✕
            </button>
          </div>
          <div className="text-xs opacity-80">{w.content}</div>
        </div>
      ))}
    </>
  );
}
