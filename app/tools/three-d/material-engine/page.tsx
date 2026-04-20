"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function MaterialEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [materialType, setMaterialType] = useState("PBR");
  const [style, setStyle] = useState("Realistic");
  const [resolution, setResolution] = useState("2K");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real material generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Material (Mock)

Material Type: ${materialType}
Style: ${style}
Resolution: ${resolution}

Prompt:
${prompt}

This is placeholder metadata representing the generated material and texture maps.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Material Engine"
      description="Create PBR materials, shaders, textures, and surface definitions."
      aura="from-indigo-500/20 to-blue-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Material Description
            </label>
            <textarea
              placeholder="Describe the material: wood, metal, skin, cloth, stone, sci-fi alloy..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Material Type */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Material Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={materialType}
              onChange={(e) => setMaterialType(e.target.value)}
            >
              <option>PBR</option>
              <option>Procedural</option>
              <option>Stylized</option>
              <option>Shader Graph</option>
            </select>
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
              <option>Hand-Painted</option>
              <option>Photogrammetry</option>
              <option>Anime</option>
            </select>
          </div>

          {/* Resolution */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Texture Resolution
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
            >
              <option>1K</option>
              <option>2K</option>
              <option>4K</option>
              <option>8K</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-blue-400/60 bg-blue-500/30 px-4 py-2 text-xs text-blue-50 transition hover:bg-blue-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Material…" : "Generate Material"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-blue-400/40 border-t-transparent" />
              <p>Creating texture maps…</p>
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
              Describe a material to generate its texture set.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
