"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function WorldSeedGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [cosmos, setCosmos] = useState("Prime Universe");
  const [density, setDensity] = useState("Balanced");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated World Seed (Mock)

Cosmos: ${cosmos}
Density: ${density}

Prompt:
${prompt}

This is placeholder metadata representing the world seed and creation constants.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="World Seed Generator"
      description="Generate universe seeds, creation constants, and primal parameters."
      aura="from-blue-500/20 to-cyan-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the world seed..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={cosmos}
            onChange={(e) => setCosmos(e.target.value)}
          >
            <option>Prime Universe</option>
            <option>Fractured Universe</option>
            <option>Infinite Layered Cosmos</option>
            <option>Dark Origin</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={density}
            onChange={(e) => setDensity(e.target.value)}
          >
            <option>Light</option>
            <option>Balanced</option>
            <option>Heavy</option>
            <option>Chaotic</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-blue-500/40 border border-blue-400/40 text-blue-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Seed"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
