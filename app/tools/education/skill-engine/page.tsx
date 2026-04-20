"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function SkillEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [tree, setTree] = useState("General Skill Tree");
  const [tone, setTone] = useState("Neutral");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Skill Tree (Mock)

Tree: ${tree}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing skills, competencies, and mastery paths.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Skill Engine"
      description="Generate skill trees, competencies, and mastery paths."
      aura="from-indigo-500/20 to-purple-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the skill tree..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tree}
            onChange={(e) => setTree(e.target.value)}
          >
            <option>General Skill Tree</option>
            <option>Technical Skills</option>
            <option>Magical Skills</option>
            <option>Leadership Skills</option>
            <option>Creative Skills</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Neutral</option>
            <option>Heroic</option>
            <option>Scholarly</option>
            <option>Ancient</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-purple-500/40 border border-purple-400/40 text-purple-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Skills"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
