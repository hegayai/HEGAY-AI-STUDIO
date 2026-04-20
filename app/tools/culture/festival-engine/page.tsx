"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function FestivalEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [season, setSeason] = useState("Spring");
  const [tone, setTone] = useState("Joyful");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Festival (Mock)

Season: ${season}
Tone: ${tone}

Prompt:
${prompt}

This is placeholder metadata representing festivals and celebrations.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Festival Engine"
      description="Generate festivals, celebrations, seasonal events, and cultural gatherings."
      aura="from-rose-500/20 to-pink-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the festival..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          >
            <option>Spring</option>
            <option>Summer</option>
            <option>Autumn</option>
            <option>Winter</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option>Joyful</option>
            <option>Spiritual</option>
            <option>Heroic</option>
            <option>Ancient</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-pink-500/40 border border-pink-400/40 text-pink-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Festival"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
