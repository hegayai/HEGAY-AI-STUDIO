"use client";

import { useState, useEffect } from "react";
import { useToast } from "./ToastManager";

export default function NotificationCenter() {
  const [open, setOpen] = useState(false);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    function togglePanel() {
      setOpen((prev) => !prev);
    }

    document.addEventListener("toggle-notifications", togglePanel);
    return () =>
      document.removeEventListener("toggle-notifications", togglePanel);
  }, []);

  useEffect(() => {
    function handleLog(e) {
      setLogs((prev) => [
        { id: Date.now(), message: e.detail.message, time: new Date() },
        ...prev,
      ]);
    }

    document.addEventListener("log-event", handleLog);
    return () => document.removeEventListener("log-event", handleLog);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        open ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-black/60 backdrop-blur-xl border-b border-white/10 p-6 h-[60vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Notification Center</h2>

        {logs.length === 0 && (
          <div className="text-white/50 text-sm">No notifications yet</div>
        )}

        <div className="flex flex-col gap-4">
          {logs.map((log) => (
            <div
              key={log.id}
              className="p-4 rounded-lg bg-white/10 border border-white/10"
            >
              <div className="text-sm opacity-80">{log.message}</div>
              <div className="text-xs opacity-50 mt-1">
                {log.time.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
