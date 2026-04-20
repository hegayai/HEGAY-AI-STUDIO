"use client";

import { useEffect, useState } from "react";

type Alert = {
  id: number;
  level: "info" | "warning" | "critical";
  source: string;
  message: string;
  createdAt: string;
};

export default function SecuritySentinelPanel() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [loading, setLoading] = useState(true);

  const loadAlerts = async () => {
    try {
      const res = await fetch("/api/system/security");
      const data = await res.json();
      setAlerts(data.alerts || []);
    } catch (err) {
      console.error("Failed to load security alerts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAlerts();
    const interval = setInterval(loadAlerts, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-red-700/60 shadow-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Security Sentinel</h2>

      {loading ? (
        <div className="text-gray-400">Loading security alerts…</div>
      ) : alerts.length === 0 ? (
        <div className="text-gray-500">No security alerts. All clear.</div>
      ) : (
        <div className="space-y-3 max-h-72 overflow-y-auto">
          {alerts.map((alert) => (
            <AlertRow key={alert.id} alert={alert} />
          ))}
        </div>
      )}
    </div>
  );
}

function AlertRow({ alert }: { alert: Alert }) {
  const color =
    alert.level === "critical"
      ? "border-red-500/70 bg-red-900/30"
      : alert.level === "warning"
      ? "border-yellow-500/70 bg-yellow-900/20"
      : "border-blue-500/60 bg-blue-900/20";

  const levelLabel =
    alert.level === "critical" ? "CRITICAL" : alert.level === "warning" ? "WARNING" : "INFO";

  return (
    <div
      className={`p-3 rounded-lg border ${color} text-sm flex flex-col gap-1`}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-white">{levelLabel}</span>
        <span className="text-xs text-gray-400">
          {new Date(alert.createdAt).toLocaleString()}
        </span>
      </div>
      <div className="text-xs text-gray-400">Source: {alert.source}</div>
      <div className="text-gray-200">{alert.message}</div>
    </div>
  );
}
