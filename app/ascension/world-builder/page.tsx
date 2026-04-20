"use client";

import { useState } from "react";

export default function WorldBuilderPage() {
  const [prompt, setPrompt] = useState("");
  const [complexity, setComplexity] = useState("Standard");
  const [tone, setTone] = useState("Neutral");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generateWorld() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise(r => setTimeout(r, 1500));

    setOutput(
`WORLD BUILDER OUTPUT (Mock)

Complexity: ${complexity}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing a full world generated using:
- Origin Realm
- Culture Realm
- Governance Realm
- Economy Realm
- Education Realm`
    );

    setLoading(false);
  }

  return (
    <div className="p-6 rounded-xl bg-black/40 border border-white/10">
      <h1 className="text-xl font-semibold text-white">World Builder</h1>
      <p className="text-xs text-slate-400 mt-1">
        Generate entire worlds using all realms.
      </p>

      <textarea
        placeholder="Describe the world you want to generate..."
        className="mt-4 w-full h-32 bg-black/30 border border-white/10 rounded-lg p-3 text-xs text-white"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <select
        className="mt-3 w-full bg-black/30 border border-white/10 rounded-lg p-2 text-xs text-white"
        value={complexity}
        onChange={(e) => setComplexity(e.target.value)}
      >
        <option>Standard</option>
        <option>Advanced</option>
        <option>Epic</option>
        <option>Mythic</option>
      </select>

      <select
        className="mt-3 w-full bg-black/30 border border-white/10 rounded-lg p-2 text-xs text-white"
        value={tone}
        onChange={(e) => setTone(e.target.value)}
      >
        <option>Neutral</option>
        <option>Heroic</option>
        <option>Ancient</option>
        <option>Scholarly</option>
      </select>

      <button
        onClick={generateWorld}
        disabled={loading || !prompt.trim()}
        className="mt-3 px-4 py-2 text-xs rounded-lg bg-indigo-500/40 border border-indigo-400/40 text-indigo-100 disabled:opacity-40"
      >
        {loading ? "Generating…" : "Generate World"}
      </button>

      {output && (
        <pre className="mt-4 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-lg p-3 whitespace-pre-line">
          {output}
        </pre>
      )}
    </div>
  );
}
