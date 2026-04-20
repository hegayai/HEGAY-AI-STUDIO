"use client";

import { useEffect, useState } from "react";

export default function ActivityGrid() {
  const [events, setEvents] = useState<any[]>([]);

  const loadEvents = async () => {
    try {
      const res = await fetch("/api/system/activity");
      const data = await res.json();
      setEvents(data.events || []);
    } catch (err) {
      console.error("Failed to load activity:", err);
    }
  };

  useEffect(() => {
    loadEvents();
    const interval = setInterval(loadEvents, 4000);
    return () => clearInterval(interval);
  }, []);

  const colorFor = (type: string) => {
    switch (type) {
      case "backup":
        return "from-blue-600 to-blue-400";
      case "restore":
        return "from-red-600 to-red-400";
      case "server":
        return "from-purple-600 to-purple-400";
      case "database":
        return "from-green-600 to-green-400";
      default:
        return "from-gray-700 to-gray-500";
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-4">Real‑Time Activity Grid</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {events.map((event, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl bg-gradient-to-br ${colorFor(
              event.type
            )} shadow-lg shadow-black/40 border border-white/10 animate-fade-in`}
          >
            <div className="text-sm text-white font-semibold mb-1">
              {event.type.toUpperCase()}
            </div>
            <div className="text-gray-100 text-sm">{event.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
