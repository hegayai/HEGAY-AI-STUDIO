"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function ResourceEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [type, setType] = useState("Natural Resource");
  const [tone, setTone] = useState("Neutral");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Resource System (Mock)

Type: ${type}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing resources and supply chains.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Resource Engine"
      description="Generate resource systems, extraction models, and supply chains."
      aura="from-yellow-500/20 to-amber-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the resource system..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Natural Resource</option>
            <option>Manufactured Resource</option>
            <option>Energy Resource</option>
            <option>Magical Resource</option>
            <option>Technological Resource</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Neutral</option>
            <option>Scarce</option>
            <option>Abundant</option>
            <option>Heroic</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-amber-500/40 border border-amber-400/40 text-amber-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Resource"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
