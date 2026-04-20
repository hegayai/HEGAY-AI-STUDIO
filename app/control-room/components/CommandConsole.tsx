"use client";

import { useState } from "react";
import { useNotify } from "./NotificationProvider";

export default function CommandConsole() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const notify = useNotify();

  const runCommand = async () => {
    if (!input.trim()) return;

    const cmd = input.trim();
    setInput("");

    setHistory((prev) => [...prev, `> ${cmd}`]);

    try:
      const res = await fetch("/api/system/console", {
        method: "POST",
        body: JSON.stringify({ command: cmd }),
      });

      const data = await res.json();

      if (data.success) {
        setHistory((prev) => [...prev, data.output]);
        notify("Command executed", "success");
      } else {
        setHistory((prev) => [...prev, data.output]);
        notify("Command failed", "error");
      }
    } catch (err: any) {
      setHistory((prev) => [...prev, err.message]);
      notify("Console error", "error");
    }
  };

  return (
    <div className="p-6 rounded-xl bg-gray-900/60 border border-gray-700 shadow-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4">Command Console</h2>

      {/* OUTPUT WINDOW */}
      <div className="bg-black/50 p-4 rounded-lg h-64 overflow-y-auto font-mono text-sm border border-gray-800">
        {history.map((line, i) => (
          <div key={i} className="text-gray-300 whitespace-pre-wrap">
            {line}
          </div>
        ))}
      </div>

      {/* INPUT */}
      <div className="mt-4 flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && runCommand()}
          className="flex-1 p-3 rounded bg-black/40 border border-gray-700 text-gray-200"
          placeholder="Enter command…"
        />

        <button
          onClick={runCommand}
          className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold"
        >
          Run
        </button>
      </div>
    </div>
  );
}
