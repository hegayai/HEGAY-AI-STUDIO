"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function KnowledgeEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [domain, setDomain] = useState("General Knowledge");
  const [tone, setTone] = useState("Scholarly");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Knowledge System (Mock)

Domain: ${domain}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing knowledge structures and intellectual domains.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Knowledge Engine"
      description="Generate knowledge systems, domains, and intellectual structures."
      aura="from-sky-500/20 to-blue-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the knowledge system..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          >
            <option>General Knowledge</option>
            <option>Scientific Knowledge</option>
            <option>Magical Knowledge</option>
            <option>Technological Knowledge</option>
            <option>Historical Knowledge</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Scholarly</option>
            <option>Neutral</option>
            <option>Heroic</option>
            <option>Ancient</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-blue-500/40 border border-blue-400/40 text-blue-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Knowledge"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
