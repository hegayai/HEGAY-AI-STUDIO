"use client";

import { useState } from "react";

export default function CivilizationEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [structure, setStructure] = useState("Balanced Civilization");
  const [tone, setTone] = useState("Neutral");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generateCivilization() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise(r => setTimeout(r, 1500));

    setOutput(
`CIVILIZATION ENGINE OUTPUT (Mock)

Structure: ${structure}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing a full civilization generated using:
- Culture Realm
- Governance Realm
- Economy Realm
- Education Realm`
    );

    setLoading(false);
  }

  return (
    <div className="p-6 rounded-xl bg-black/40 border border-white/10">
      <h1 className="text-xl font-semibold text-white">Civilization Engine</h1>
      <p className="text-xs text-slate-400 mt-1">
        Generate full civilizations with culture, governance, and economy.
      </p>

      <textarea
        placeholder="Describe the civilization..."
        className="mt-4 w-full h-32 bg-black/30 border border-white/10 rounded-lg p-3 text-xs text-white"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <select
        className="mt-3 w-full bg-black/30 border border-white/10 rounded-lg p-2 text-xs text-white"
        value={structure}
        onChange={(e) => setStructure(e.target.value)}
      >
        <option>Balanced Civilization</option>
        <option>Trade Civilization</option>
        <option>War Civilization</option>
        <option>Spiritual Civilization</option>
        <option>Technocratic Civilization</option>
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
        onClick={generateCivilization}
        disabled={loading || !prompt.trim()}
        className="mt-3 px-4 py-2 text-xs rounded-lg bg-blue-500/40 border border-blue-400/40 text-blue-100 disabled:opacity-40"
      >
        {loading ? "Generating…" : "Generate Civilization"}
      </button>

      {output && (
        <pre className="mt-4 text-xs text-slate-200 bg-white/5 border border-white/10 rounded-lg p-3 whitespace-pre-line">
          {output}
        </pre>
      )}
    </div>
  );
}
