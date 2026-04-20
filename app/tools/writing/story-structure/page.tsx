"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function StoryStructurePage() {
  const [prompt, setPrompt] = useState("");
  const [framework, setFramework] = useState("Three-Act Structure");
  const [depth, setDepth] = useState("Medium");
  const [genre, setGenre] = useState("General");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real story structure API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Story Structure (Mock)

Framework: ${framework}
Genre: ${genre}
Depth: ${depth}

Prompt:
${prompt}

This is placeholder text representing the generated story structure.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Story Structure Engine"
      description="Generate plot arcs, beats, outlines, and narrative frameworks."
      aura="from-purple-500/20 to-indigo-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Story Prompt
            </label>
            <textarea
              placeholder="Describe the story idea, characters, or narrative concept..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Framework */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Structure Framework
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={framework}
              onChange={(e) => setFramework(e.target.value)}
            >
              <option>Three-Act Structure</option>
              <option>Hero's Journey</option>
              <option>Five-Act Structure</option>
              <option>TV Episode Beats</option>
              <option>Novel Chapter Outline</option>
              <option>Nonlinear Structure</option>
            </select>
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
              <option>General</option>
              <option>Fantasy</option>
              <option>Sci-Fi</option>
              <option>Drama</option>
              <option>Romance</option>
              <option>Thriller</option>
              <option>Comedy</option>
              <option>Horror</option>
            </select>
          </div>

          {/* Depth */}
          <div className="mt-3">
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
            className="mt-3 rounded-lg border border-indigo-400/60 bg-indigo-500/30 px-4 py-2 text-xs text-indigo-50 transition hover:bg-indigo-500/50 disabled:opacity-40"
          >
            {loading ? "Structuring Story…" : "Generate Structure"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-indigo-400/40 border-t-transparent" />
              <p>Building narrative architecture…</p>
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
              Describe a story idea to generate its narrative structure.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
