"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function TraditionEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [type, setType] = useState("Ritual");
  const [tone, setTone] = useState("Cultural");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Tradition (Mock)

Type: ${type}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing rituals, customs, and ceremonies.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Tradition Engine"
      description="Generate rituals, customs, ceremonies, and cultural practices."
      aura="from-orange-500/20 to-red-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the tradition..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Ritual</option>
            <option>Custom</option>
            <option>Ceremony</option>
            <option>Seasonal Practice</option>
            <option>Initiation</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Cultural</option>
            <option>Spiritual</option>
            <option>Heroic</option>
            <option>Ancient</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-red-500/40 border border-red-400/40 text-red-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Tradition"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
