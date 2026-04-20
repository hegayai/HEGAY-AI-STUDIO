"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function LearningPathEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [pathType, setPathType] = useState("Linear Path");
  const [tone, setTone] = useState("Structured");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Learning Path (Mock)

Path Type: ${pathType}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing learning progression and mastery journeys.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Learning Path Engine"
      description="Generate learning paths, progression systems, and mastery journeys."
      aura="from-fuchsia-500/20 to-pink-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the learning path..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={pathType}
            onChange={(e) => setPathType(e.target.value)}
          >
            <option>Linear Path</option>
            <option>Branching Path</option>
            <option>Mastery Loop</option>
            <option>Guild Progression</option>
            <option>Technocratic Path</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Structured</option>
            <option>Flexible</option>
            <option>Heroic</option>
            <option>Scholarly</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-pink-500/40 border border-pink-400/40 text-pink-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Learning Path"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
