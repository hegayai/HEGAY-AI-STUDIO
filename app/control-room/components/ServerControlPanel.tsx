"use client";

import { useState } from "react";
import { useNotify } from "./NotificationProvider";

type Action = "start" | "stop" | "restart";

export default function ServerControlPanel({ onComplete }: { onComplete: () => void }) {
  const [loadingAction, setLoadingAction] = useState<Action | null>(null);
  const notify = useNotify();

  const trigger = async (action: Action) => {
    setLoadingAction(action);

    try {
      const res = await fetch("/api/system/server", {
        method: "POST",
        body: JSON.stringify({ action }),
      });

      const data = await res.json();

      if (data.success) {
        notify(data.message, "success");
        onComplete();
      } else {
        notify("Server action failed: " + data.error, "error");
      }
    } catch (err: any) {
      notify("Server action failed: " + err.message, "error");
    }

    setLoadingAction(null);
  };

  const isLoading = (a: Action) => loadingAction === a;

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-8">
      <h2 className="text-2xl font-semibold mb-4">Server Control</h2>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => trigger("start")}
          disabled={isLoading("start")}
          className={`px-5 py-3 rounded-lg font-semibold transition ${
            isLoading("start")
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-500 text-white"
          }`}
        >
          {isLoading("start") ? "Starting…" : "Start Server"}
        </button>

        <button
          onClick={() => trigger("stop")}
          disabled={isLoading("stop")}
          className={`px-5 py-3 rounded-lg font-semibold transition ${
            isLoading("stop")
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-yellow-600 hover:bg-yellow-500 text-white"
          }`}
        >
          {isLoading("stop") ? "Stopping…" : "Stop Server"}
        </button>

        <button
          onClick={() => trigger("restart")}
          disabled={isLoading("restart")}
          className={`px-5 py-3 rounded-lg font-semibold transition ${
            isLoading("restart")
              ? "bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-500 text-white"
          }`}
        >
          {isLoading("restart") ? "Restarting…" : "Restart Server"}
        </button>
      </div>
    </div>
  );
}
