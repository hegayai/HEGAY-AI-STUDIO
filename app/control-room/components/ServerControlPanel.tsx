"use client";

import { useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function ServerControlPanel({
  onComplete,
}: {
  onComplete: () => void;
}) {
  const [action, setAction] = useState("");

  // ✅ FIXED — destructure notify from context
  const { notify } = useNotify();

  const runAction = async () => {
    if (!action) {
      notify("Select a server action", "info");
      return;
    }

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
      notify("Server error: " + err.message, "error");
    }
  };

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Server Control</h2>

      <select
        value={action}
        onChange={(e) => setAction(e.target.value)}
        className="w-full p-3 rounded bg-black/40 border border-gray-700 text-gray-200 mb-4"
      >
        <option value="">Select action…</option>
        <option value="restart">Restart Server</option>
        <option value="shutdown">Shutdown Server</option>
        <option value="flush-cache">Flush Cache</option>
        <option value="rebuild-index">Rebuild Index</option>
        <option value="reload-services">Reload Services</option>
      </select>

      <button
        onClick={runAction}
        className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold"
      >
        Execute Action
      </button>
    </div>
  );
}
