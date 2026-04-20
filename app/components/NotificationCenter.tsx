"use client";

import { useState } from "react";

export default function NotificationCenter() {
  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "System Nominal",
      body: "All realms aligned. No critical tensions detected.",
      tone: "text-emerald-400",
    },
    {
      id: 2,
      title: "Signal Update",
      body: "New cultural signals detected in the Diaspora Pulse band.",
      tone: "text-sky-400",
    },
    {
      id: 3,
      title: "Archive Sync",
      body: "Vault synchronization completed across all universes.",
      tone: "text-amber-300",
    },
  ]);

  const dismiss = (id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed top-4 right-4 z-40">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-full border border-white/10 bg-black/70 backdrop-blur-2xl px-4 py-2 text-[11px] text-slate-300 shadow-[0_18px_45px_rgba(0,0,0,0.85)] hover:bg-white/5 transition-all"
        >
          {open ? "Close Notifications" : "Notifications"}
        </button>
      </div>

      {/* Panel */}
      {open && (
        <div className="fixed top-16 right-4 w-80 z-50 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.9)] animate-fade-in-scale overflow-hidden">

          {/* Header */}
          <div className="border-b border-white/10 px-4 py-3">
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
              Notification Center
            </div>
          </div>

          {/* Notifications */}
          <div className="max-h-[70vh] overflow-y-auto">
            {notifications.length === 0 && (
              <div className="p-4 text-sm text-slate-500">
                No notifications.
              </div>
            )}

            {notifications.map((note) => (
              <div
                key={note.id}
                className="border-b border-white/5 px-4 py-3 hover:bg-white/5 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className={`text-xs font-semibold ${note.tone}`}>
                      {note.title}
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1">
                      {note.body}
                    </div>
                  </div>

                  <button
                    onClick={() => dismiss(note.id)}
                    className="text-[10px] text-slate-500 hover:text-slate-300 transition-all ml-3"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
