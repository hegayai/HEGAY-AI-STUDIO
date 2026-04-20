"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function CivicStructureEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [structure, setStructure] = useState("Council");
  const [tone, setTone] = useState("Formal");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Civic Structure (Mock)

Structure: ${structure}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing civic institutions and administrative bodies.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Civic Structure Engine"
      description="Generate civic institutions, councils, and administrative bodies."
      aura="from-fuchsia-500/20 to-pink-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the civic structure..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={structure}
            onChange={(e) => setStructure(e.target.value)}
          >
            <option>Council</option>
            <option>Assembly</option>
            <option>Ministry</option>
            <option>Guild</option>
            <option>Technocratic Board</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text
                        value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Formal</option>
            <option>Balanced</option>
            <option>Heroic</option>
            <option>Scholarly</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-pink-500/40 border border-pink-400/40 text-pink-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Civic Structure"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
