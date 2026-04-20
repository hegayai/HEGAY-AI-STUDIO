"use client";

import { useState } from "react";

export default function CultureComponent() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!input.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Cultural Data (Mock)

Input:
${input}

This is placeholder metadata representing cultural identity, traditions, or artifacts.`
    );

    setLoading(false);
  }

  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-6">
      <h2 className="text-lg font-semibold text-white">Culture Component</h2>
      <p className="text-xs text-slate-400 mt-1">
        Generate cultural identity, traditions, and artifacts.
      </p>

      <textarea
        placeholder="Describe cultural elements..."
        className="mt-4 w-full h-28 rounded-lg bg-black/30 border border-white/10 p-3 text-xs text-white outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={generate}
        disabled={loading || !input.trim()}
        className="mt-3 px-4 py-2 text-xs rounded-lg bg-amber-500/40 border border-amber-400/40 text-amber-100 disabled:opacity-40"
      >
        {loading ? "Generating…" : "Generate Culture"}
      </button>

      {output && (
        <pre className="mt-4 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-lg p-3 whitespace-pre-line">
          {output}
        </pre>
      )}
    </div>
  );
}
