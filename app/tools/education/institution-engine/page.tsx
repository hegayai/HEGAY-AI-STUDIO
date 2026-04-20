"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function InstitutionEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [type, setType] = useState("Academy");
  const [tone, setTone] = useState("Formal");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Institution (Mock)

Type: ${type}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing schools, academies, and learning institutions.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Institution Engine"
      description="Generate schools, academies, guilds, and learning institutions."
      aura="from-purple-500/20 to-fuchsia-500/20"
      left={
        <EnginePanel>
          <textarea

                      value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Academy</option>
            <option>Guild</option>
            <option>University</option>
            <option>Temple of Knowledge</option>
            <option>Technocratic Institute</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Formal</option>
            <option>Scholarly</option>
            <option>Heroic</option>
            <option>Ancient</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-fuchsia-500/40 border border-fuchsia-400/40 text-fuchsia-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Institution"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
