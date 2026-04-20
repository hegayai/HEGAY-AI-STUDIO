"use client";

import { useEffect, useState } from "react";

export default function AICorePanel() {
  const [core, setCore] = useState<any>(null);

  const loadCore = async () => {
    try {
      const res = await fetch("/api/system/ai-core");
      const data = await res.json();
      setCore(data);
    } catch (err) {
      console.error("Failed to load AI Core:", err);
    }
  };

  useEffect(() => {
    loadCore();
    const interval = setInterval(loadCore, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!core) {
    return (
      <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-8">
        <h2 className="text-2xl font-semibold mb-4">AI Core</h2>
        <p className="text-gray-400">Loading AI Core metrics…</p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-8">
      <h2 className="text-2xl font-semibold mb-4">AI Core</h2>

      <AIMetric label="Engine Status" value={core.engineStatus} color="text-green-400" />
      <AIMetric label="AI Uptime" value={core.uptime} />
      <AIMetric label="Model Load" value={`${core.modelLoad}%`} />
      <AIMetric label="Token Throughput" value={`${core.tokenThroughput} tokens/s`} />
      <AIMetric label="Active Processes" value={core.activeProcesses} />
      <AIMetric label="AI Memory Usage" value={`${core.aiMemory} GB`} />

      <div className="text-gray-500 text-xs mt-4">
        Updated: {core.timestamp}
      </div>
    </div>
  );
}

function AIMetric({
  label,
  value,
  color = "text-blue-400",
}: {
  label: string;
  value: string | number;
  color?: string;
}) {
  return (
    <div className="flex justify-between border-b border-gray-700 py-2">
      <span className="text-gray-300">{label}</span>
      <span className={`${color} font-semibold`}>{value}</span>
    </div>
  );
}
