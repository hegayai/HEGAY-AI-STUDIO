"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function JusticeEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [system, setSystem] = useState("Court System");
  const [tone, setTone] = useState("Balanced");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Justice System (Mock)

System: ${system}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing justice systems and conflict resolution.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Justice Engine"
      description="Generate justice systems, courts, and conflict‑resolution frameworks."
      aura="from-purple-500/20 to-violet-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the justice system..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={system}
            onChange={(e) => setSystem(e.target.value)}
          >
            <option>Court System</option>
            <option>Tribal Council</option>
            <option>Divine Judgment</option>
            <option>Restorative Justice</option>
            <option>Technocratic Arbitration</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Balanced</option>
            <option>Strict</option>
            <option>Compassionate</option>
            <option>Heroic</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-violet-500/40 border border-violet-400/40 text-violet-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Justice"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
