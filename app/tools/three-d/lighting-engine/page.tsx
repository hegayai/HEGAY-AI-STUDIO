"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function LightingEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [lightingType, setLightingType] = useState("Cinematic");
  const [intensity, setIntensity] = useState("Medium");
  const [colorTemp, setColorTemp] = useState("Neutral");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real lighting generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Lighting Setup (Mock)

Lighting Type: ${lightingType}
Intensity: ${intensity}
Color Temperature: ${colorTemp}

Prompt:
${prompt}

This is placeholder metadata representing the generated lighting configuration.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Lighting Engine"
      description="Generate lighting setups, HDRI configurations, and cinematic illumination."
      aura="from-cyan-500/20 to-teal-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Lighting Description
            </label>
            <textarea
              placeholder="Describe the lighting: moody, bright, sunset, sci-fi glow, studio setup..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Lighting Type */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Lighting Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={lightingType}
              onChange={(e) => setLightingType(e.target.value)}
            >
              <option>Cinematic</option>
              <option>HDRI</option>
              <option>Studio</option>
              <option>Volumetric</option>
              <option>Natural Sunlight</option>
              <option>Night Scene</option>
            </select>
          </div>

          {/* Intensity */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Intensity
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={intensity}
              onChange={(e) => setIntensity(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Extreme</option>
            </select>
          </div>

          {/* Color Temperature */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Color Temperature
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={colorTemp}
              onChange={(e) => setColorTemp(e.target.value)}
            >
              <option>Warm</option>
              <option>Neutral</option>
              <option>Cool</option>
              <option>Mixed</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-teal-400/60 bg-teal-500/30 px-4 py-2 text-xs text-teal-50 transition hover:bg-teal-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Lighting…" : "Generate Lighting"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-teal-400/40 border-t-transparent" />
              <p>Configuring illumination…</p>
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
              Describe a lighting setup to generate its configuration.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
