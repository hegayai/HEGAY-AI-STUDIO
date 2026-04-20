"use client";

import { useEffect, useState } from "react";

export default function MetricsPanel() {
  const [metrics, setMetrics] = useState<any>(null);

  const loadMetrics = async () => {
    try {
      const res = await fetch("/api/system/metrics");
      const data = await res.json();
      setMetrics(data);
    } catch (err) {
      console.error("Failed to load metrics:", err);
    }
  };

  useEffect(() => {
    loadMetrics();
    const interval = setInterval(loadMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!metrics) {
    return (
      <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">System Metrics</h2>
        <p className="text-gray-400">Loading metrics…</p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-8">
      <h2 className="text-2xl font-semibold mb-4">System Metrics</h2>

      <Metric label="OS Uptime" value={metrics.uptime} />
      <Metric label="CPU Load (1m)" value={`${metrics.cpuLoad}`} />
      <Metric label="Memory Usage" value={`${metrics.memUsage}%`} />
      <Metric label="Disk Usage (C:)" value={`${metrics.diskUsage}%`} />
      <Metric label="PostgreSQL Uptime" value={metrics.postgresUptime} />

      <div className="text-gray-500 text-xs mt-4">
        Updated: {metrics.timestamp}
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between border-b border-gray-700 py-2">
      <span className="text-gray-300">{label}</span>
      <span className="text-blue-400 font-semibold">{value}</span>
    </div>
  );
}
