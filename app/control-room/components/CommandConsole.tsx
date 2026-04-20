"use client";

import { useState } from "react";

export default function CommandConsole() {
  const [cmd, setCmd] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  async function runCommand() {
    if (!cmd.trim()) return;

    setHistory((prev) => [...prev, `> ${cmd}`]);

    try {
      const res = await fetch("/api/system/console", {
        method: "POST",
        body: JSON.stringify({ command: cmd }),
      });

      const data = await res.json();
      setHistory((prev) => [...prev, data.output]);
    } catch (err) {
      setHistory((prev) => [...prev, "Error executing command"]);
    }

    setCmd("");
  }

  return (
    <div className="w-full h-full flex flex-col bg-black/40 border border-white/10 rounded-lg p-4">
      <div className="flex-1 overflow-y-auto text-xs text-slate-200 space-y-1">
        {history.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      <div className="mt-3 flex gap-2">
        <input
          value={cmd}
          onChange={(e) => setCmd(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && runCommand()}
          className="flex-1 rounded-lg bg-black/60 border border-white/10 px-3 py-2 text-xs text-slate-100 outline-none"
          placeholder="Enter command..."
        />

        <button
          onClick={runCommand}
          className="px-4 py-2 text-xs rounded-lg bg-blue-500/40 border border-blue-400/40 text-blue-100 hover:bg-blue-500/60 transition"
        >
          Run
        </button>
      </div>
    </div>
  );
}
