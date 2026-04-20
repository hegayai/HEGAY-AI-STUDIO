"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function CurriculumEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [level, setLevel] = useState("Basic");
  const [tone, setTone] = useState("Structured");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Curriculum (Mock)

Level: ${level}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing curricula and educational frameworks.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Curriculum Engine"
      description="Generate curricula, subjects, and educational frameworks."
      aura="from-blue-500/20 to-indigo-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the curriculum..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          >
            <option>Basic</option>
            <option>Intermediate</option>
            <option>Advanced</option>
            <option>Mastery</option>
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
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-indigo-500/40 border border-indigo-400/40 text-indigo-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Curriculum"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
