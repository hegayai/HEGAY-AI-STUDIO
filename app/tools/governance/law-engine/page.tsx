"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function LawEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [system, setSystem] = useState("Codified Law");
  const [tone, setTone] = useState("Formal");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Legal System (Mock)

System: ${system}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing legal codes and governance principles.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Law Engine"
      description="Generate legal systems, codes, and governance principles."
      aura="from-blue-500/20 to-indigo-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the legal system..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={system}
            onChange={(e) => setSystem(e.target.value)}
          >
            <option>Codified Law</option>
            <option>Common Law</option>
            <option>Divine Law</option>
            <option>Civic Law</option>
            <option>Customary Law</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Formal</option>
            <option>Strict</option>
            <option>Balanced</option>
            <option>Spiritual</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-indigo-500/40 border border-indigo-400/40 text-indigo-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Law"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
