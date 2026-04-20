"use client";

import { useState } from "react";

export default function AscensionConsole() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise(r => setTimeout(r, 1500));

    setOutput(
`Ascension Output (Mock)

Your request:
${prompt}

This is placeholder metadata representing cross-realm orchestration.`
    );

    setLoading(false);
  }

  return (
    <div className="p-6 rounded-xl bg-black/40 border border-white/10">
      <h1 className="text-xl font-semibold text-white">Ascension Console</h1>
      <p className="text-xs text-slate-400 mt-1">
        Orchestrate all realms from one interface.
      </p>

      <textarea
        placeholder="Describe what you want to create..."
        className="mt-4 w-full h-32 bg-black/30 border border-white/10 rounded-lg p-3 text-xs text-white"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generate}
        disabled={loading || !prompt.trim()}
        className="mt-3 px-4 py-2 text-xs rounded-lg bg-purple-500/40 border border-purple-400/40 text-purple-100 disabled:opacity-40"
      >
        {loading ? "Processing…" : "Ascend"}
      </button>

      {output && (
        <pre className="mt-4 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-lg p-3 whitespace-pre-line">
          {output}
        </pre>
      )}
    </div>
  );
}
