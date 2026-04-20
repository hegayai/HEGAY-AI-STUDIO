"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function LoreEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [focus, setFocus] = useState("Worldbuilding");
  const [depth, setDepth] = useState("Medium");
  const [tone, setTone] = useState("Mythic");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real lore generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Lore (Mock)

Focus: ${focus}
Tone: ${tone}
Depth: ${depth}

${prompt}

This is placeholder text representing the generated lore output.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Lore Engine"
      description="Create worlds, civilizations, histories, mythologies, and cultural systems."
      aura="from-orange-500/20 to-red-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Lore Prompt
            </label>
            <textarea
              placeholder="Describe the world, civilization, myth, or cultural idea you want to generate..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Focus */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Focus Area
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
            >
              <option>Worldbuilding</option>
              <option>Mythology</option>
              <option>History</option>
              <option>Culture</option>
              <option>Magic System</option>
              <option>Political Structure</option>
              <option>Species Creation</option>
              <option>Cosmology</option>
            </select>
          </div>

          {/* Tone */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Tone
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option>Mythic</option>
              <option>Academic</option>
              <option>Dark</option>
              <option>Epic</option>
              <option>Ancient</option>
              <option>Spiritual</option>
            </select>
          </div>

          {/* Depth */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Depth
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={depth}
              onChange={(e) => setDepth(e.target.value)}
            >
              <option>Short</option>
              <option>Medium</option>
              <option>Deep</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-2 rounded-lg border border-red-400/60 bg-red-500/30 px-4 py-2 text-xs text-red-50 transition hover:bg-red-500/50 disabled:opacity-40"
          >
            {loading ? "Forging Lore…" : "Generate Lore"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-red-400/40 border-t-transparent" />
              <p>Shaping mythic structures…</p>
            </div>
          )}

          {/* Output */}
          {!loading && output && (
            <pre className="text-xs text-slate-200 whitespace-pre-line bg-white/5 border border-white/10 rounded-lg p-3">
              {output}
            </pre>
          )}

          {/* Empty */}
          {!loading && !output && (
            <p className="text-xs text-slate-500 text-center px-4">
              Describe a world, myth, or civilization to generate lore.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
