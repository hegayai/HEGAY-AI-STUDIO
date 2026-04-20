"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function WorkforceEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [classType, setClassType] = useState("General Workforce");
  const [tone, setTone] = useState("Neutral");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Workforce Model (Mock)

Class Type: ${classType}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing workforce structures and labor systems.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Workforce Engine"
      description="Generate workforce structures, labor classes, and productivity models."
      aura="from-amber-500/20 to-orange-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the workforce..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={classType}
            onChange={(e) => setClassType(e.target.value)}
          >
            <option>General Workforce</option>
            <option>Skilled Labor</option>
            <option>Technocratic Workforce</option>
            <option>Magical Workforce</option>
            <option>Guild‑Based Workforce</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Neutral</option>
            <option>Efficient</option>
            <option>Heroic</option>
            <option>Scholarly</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-orange-500/40 border border-orange-400/40 text-orange-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Workforce"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
