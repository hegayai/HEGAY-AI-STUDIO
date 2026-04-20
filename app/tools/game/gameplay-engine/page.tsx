"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function GameplayEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [genre, setGenre] = useState("Action");
  const [complexity, setComplexity] = useState("Medium");
  const [perspective, setPerspective] = useState("Third-Person");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real gameplay system generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Gameplay System (Mock)

Genre: ${genre}
Complexity: ${complexity}
Perspective: ${perspective}

Prompt:
${prompt}

This is placeholder metadata representing the generated gameplay mechanics and rules.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Gameplay Engine"
      description="Generate gameplay systems, mechanics, rules, and interactive logic."
      aura="from-rose-500/20 to-pink-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Gameplay Description
            </label>
            <textarea
              placeholder="Describe the gameplay: combat system, puzzle mechanics, stealth rules, platforming logic..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Genre */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Genre
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
            >
              <option>Action</option>
              <option>Adventure</option>
              <option>RPG</option>
              <option>Strategy</option>
              <option>Puzzle</option>
              <option>Simulation</option>
              <option>Horror</option>
            </select>
          </div>

          {/* Complexity */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              System Complexity
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={complexity}
              onChange={(e) => setComplexity(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Extreme</option>
            </select>
          </div>

          {/* Perspective */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Player Perspective
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={perspective}
              onChange={(e) => setPerspective(e.target.value)}
            >
              <option>First-Person</option>
              <option>Third-Person</option>
              <option>Top-Down</option>
              <option>Isometric</option>
              <option>Side-Scroller</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-pink-400/60 bg-pink-500/30 px-4 py-2 text-xs text-pink-50 transition hover:bg-pink-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Gameplay…" : "Generate Gameplay"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-pink-400/40 border-t-transparent" />
              <p>Designing mechanics…</p>
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
              Describe gameplay to generate its system blueprint.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
