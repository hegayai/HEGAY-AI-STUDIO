"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function TimelineEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [scale, setScale] = useState("Cosmic");
  const [format, setFormat] = useState("Epochs");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function generate() {
    if (!prompt.trim()) return;
    setLoading(true);

    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Timeline (Mock)

Scale: ${scale}
Format: ${format}

Prompt:
${prompt}

This is placeholder metadata representing the cosmic timeline.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Timeline Engine"
      description="Generate cosmic timelines, epochs, and creation sequences."
      aura="from-teal-500/20 to-emerald-500/20"
      left={
        <EnginePanel>
          <textarea
            placeholder="Describe the timeline..."
            className="w-full h-28 bg-black/40 border border-white/10 rounded-lg p-3 text-xs text-white"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
          >
            <option>Cosmic</option>
            <option>Planetary</option>
            <option>Civilizational</option>
            <option>Mythic</option>
          </select>

          <select
            className="mt-3 w-full bg-black/40 border border-white/10 rounded-lg p-2 text-xs text-white"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          >
            <option>Epochs</option>
            <option>Linear Timeline</option>
            <option>Cycle of Ages</option>
            <option>Fractured Timeline</option>
          </select>

          <button
            onClick={generate}
            disabled={loading || !prompt.trim()}
            className="mt-3 px-4 py-2 text-xs rounded-lg bg-emerald-500/40 border border-emerald-400/40 text-emerald-100 disabled:opacity-40"
          >
            {loading ? "Generating…" : "Generate Timeline"}
          </button>
        </EnginePanel>
      }
      right={<EngineOutput>{output}</EngineOutput>}
    />
  );
}
