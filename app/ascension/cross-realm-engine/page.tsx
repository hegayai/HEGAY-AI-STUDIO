"use client";

import { useState } from "react";

export default function CrossRealmEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [mode, setMode] = useState("Auto");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generateCrossRealm() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise(r => setTimeout(r, 1500));

    setOutput(
`CROSS‑REALM OUTPUT (Mock)

Mode: ${mode}

Prompt:
${prompt}

This is placeholder metadata representing a multi‑realm generation using:
- Origin
- Culture
- Governance
- Economy
- Education`
    );

    setLoading(false);
  }

  return (
    <div className="p-6 rounded-xl bg-black/40 border border-white/10">
      <h1 className="text-xl font-semibold text-white">Cross‑Realm Engine</h1>
      <p className="text-xs text-slate-400 mt-1">
        Combine multiple realms in a single prompt.
      </p>

      <textarea
        placeholder="Describe your multi‑realm request..."
        className="mt-4 w-full h-32 bg-black/30 border border-white/10 rounded-lg p-3 text-xs text-white"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <select
        className="mt-3 w-full bg-black/30 border border-white/10 rounded-lg p-2 text-xs text-white"
        value={mode}
        onChange={(e) => setMode(e.target.value)}
      >
        <option>Auto</option>
        <option>Manual</option>
        <option>Weighted</option>
      </select>

      <button
        onClick={generateCrossRealm}
        disabled={loading || !prompt.trim()}
        className="mt-3 px-4 py-2 text-xs rounded-lg bg-cyan-500/40 border border-cyan-400/40 text-cyan-100 disabled:opacity-40"
      >
        {loading ? "Processing…" : "Generate Cross‑Realm"}
      </button>

      {output && (
        <pre className="mt-4 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-lg p-3 whitespace-pre-line">
          {output}
        </pre>
      )}
    </div>
  );
}
