"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function ModelGeneratorPage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Realistic");
  const [polycount, setPolycount] = useState("Medium");
  const [format, setFormat] = useState("GLB");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real 3D model generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated 3D Model (Mock)

Style: ${style}
Polycount: ${polycount}
Format: ${format}

Prompt:
${prompt}

This is placeholder metadata representing the generated 3D model.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="3D Model Generator"
      description="Generate meshes, objects, characters, props, and 3D assets."
      aura="from-purple-500/20 to-indigo-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Model Description
            </label>
            <textarea
              placeholder="Describe the 3D object, character, or asset you want to generate..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Style */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Style
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>Realistic</option>
              <option>Stylized</option>
              <option>Low-Poly</option>
              <option>High-Poly</option>
              <option>Voxel</option>
              <option>Anime</option>
            </select>
          </div>

          {/* Polycount */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Polycount
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={polycount}
              onChange={(e) => setPolycount(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          {/* Format */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Output Format
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={format}
              onChange={(e) => setFormat(e.target.value)}
            >
              <option>GLB</option>
              <option>OBJ</option>
              <option>FBX</option>
              <option>USDZ</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-indigo-400/60 bg-indigo-500/30 px-4 py-2 text-xs text-indigo-50 transition hover:bg-indigo-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Model…" : "Generate Model"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-indigo-400/40 border-t-transparent" />
              <p>Constructing mesh geometry…</p>
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
              Describe a 3D model to generate its asset metadata.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
