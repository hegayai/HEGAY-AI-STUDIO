"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function RenderEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [resolution, setResolution] = useState("4K");
  const [camera, setCamera] = useState("Cinematic");
  the [quality, setQuality] = useState("High");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real render configuration API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Render Configuration (Mock)

Resolution: ${resolution}
Camera: ${camera}
Quality: ${quality}

Prompt:
${prompt}

This is placeholder metadata representing the generated render settings.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Render Engine"
      description="Generate render settings, camera rigs, and final output configurations."
      aura="from-emerald-500/20 to-green-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Render Description
            </label>
            <textarea
              placeholder="Describe the final render: cinematic shot, product render, animation frame..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Resolution */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Resolution
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
            >
              <option>1080p</option>
              <option>2K</option>
              <option>4K</option>
              <option>8K</option>
            </select>
          </div>

          {/* Camera */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Camera Rig
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={camera}
              onChange={(e) => setCamera(e.target.value)}
            >
              <option>Cinematic</option>
              <option>Orthographic</option>
              <option>Portrait</option>
              <option>Wide Angle</option>
              <option>Telephoto</option>
              <option>Isometric</option>
            </select>
          </div>

          {/* Quality */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Render Quality
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
            >
              <option>Draft</option>
              <option>Medium</option>
              <option>High</option>
              <option>Ultra</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-green-400/60 bg-green-500/30 px-4 py-2 text-xs text-green-50 transition hover:bg-green-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Render Settings…" : "Generate Render"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-green-400/40 border-t-transparent" />
              <p>Configuring final output…</p>
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
              Describe a render to generate its configuration.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
