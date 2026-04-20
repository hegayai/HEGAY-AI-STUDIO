"use client";

import { useEffect, useState } from "react";

export default function ModelRouterPanel() {
  const [router, setRouter] = useState<any>(null);

  const loadRouter = async () => {
    try {
      const res = await fetch("/api/system/model-router");
      const data = await res.json();
      setRouter(data);
    } catch (err) {
      console.error("Failed to load model router:", err);
    }
  };

  useEffect(() => {
    loadRouter();
    const interval = setInterval(loadRouter, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!router) {
    return (
      <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-8">
        <h2 className="text-2xl font-semibold mb-4">Model Router</h2>
        <p className="text-gray-400">Loading model router state…</p>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-8">
      <h2 className="text-2xl font-semibold mb-4">Model Router</h2>

      <div className="mb-4">
        <span className="text-gray-300">Routing Mode:</span>{" "}
        <span className="text-purple-400 font-semibold">
          {router.routingMode}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {router.models.map((model: any, i: number) => (
          <div
            key={i}
            className="p-4 rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 border border-gray-600 shadow-lg animate-fade-in"
          >
            <div className="text-white font-semibold text-sm mb-1">
              {model.id}
            </div>

            <RouterMetric label="Status" value={model.status} color="text-green-400" />
            <RouterMetric label="Latency" value={model.latency} />
            <RouterMetric label="Load" value={model.load} />
            <RouterMetric label="Priority" value={model.priority} />
          </div>
        ))}
      </div>

      <div className="text-gray-500 text-xs mt-4">
        Updated: {router.timestamp}
      </div>
    </div>
  );
}

function RouterMetric({
  label,
  value,
  color = "text-blue-400",
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="flex justify-between border-b border-gray-700 py-1">
      <span className="text-gray-300 text-sm">{label}</span>
      <span className={`${color} font-semibold text-sm`}>{value}</span>
    </div>
  );
}
