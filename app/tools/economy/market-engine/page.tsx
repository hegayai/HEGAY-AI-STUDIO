"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function MarketEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [sector, setSector] = useState("General Market");
  const [tone, setTone] = useState("Neutral");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Market (Mock)

Sector: ${sector}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing markets and industries.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Market Engine"
      description="Generate markets, industries, and economic sectors."
      aura="from-lime-500/20 to-yellow-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the market..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
          >
            <option>General Market</option>
            <option>Technology</option>
            <option>Agriculture</option>
            <option>Energy</option>
            <option>Manufacturing</option>
            <option>Services</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Neutral</option>
            <option>Competitive</option>
            <option>Cooperative</option>
            <option>Heroic</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-yellow-500/40 border border-yellow-400/40 text-yellow-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Market"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
