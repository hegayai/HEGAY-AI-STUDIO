"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function LanguageEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [script, setScript] = useState("Alphabetic");
  const [tone, setTone] = useState("Cultural");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Language (Mock)

Script: ${script}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing language structure and phonetics.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Language Engine"
      description="Generate languages, scripts, phonetics, and linguistic structures."
      aura="from-red-500/20 to-rose-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the language..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={script}
            onChange={(e) => setScript(e.target.value)}
          >
            <option>Alphabetic</option>
            <option>Logographic</option>
            <option>Syllabic</option>
            <option>Pictographic</option>
            <option>Hybrid</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Cultural</option>
            <option>Ancient</option>
            <option>Modern</option>
            <option>Spiritual</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-rose-500/40 border border-rose-400/40 text-rose-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Language"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
