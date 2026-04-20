"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function EnvironmentEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [environmentType, setEnvironmentType] = useState("Landscape");
  const [weather, setWeather] = useState("Clear");
  const [timeOfDay, setTimeOfDay] = useState("Day");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real environment generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Environment (Mock)

Environment Type: ${environmentType}
Weather: ${weather}
Time of Day: ${timeOfDay}

Prompt:
${prompt}

This is placeholder metadata representing the generated environment and atmospheric setup.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Environment Engine"
      description="Create landscapes, skies, atmospheres, and environmental simulations."
      aura="from-teal-500/20 to-emerald-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Environment Description
            </label>
            <textarea
              placeholder="Describe the environment: desert canyon, alien jungle, snowy mountain, cyberpunk city..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Environment Type */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Environment Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={environmentType}
              onChange={(e) => setEnvironmentType(e.target.value)}
            >
              <option>Landscape</option>
              <option>Interior</option>
              <option>Urban</option>
              <option>Alien World</option>
              <option>Underwater</option>
              <option>Abstract</option>
            </select>
          </div>

          {/* Weather */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Weather
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={weather}
              onChange={(e) => setWeather(e.target.value)}
            >
              <option>Clear</option>
              <option>Cloudy</option>
              <option>Rain</option>
              <option>Snow</option>
              <option>Storm</option>
              <option>Fog</option>
            </select>
          </div>

          {/* Time of Day */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Time of Day
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={timeOfDay}
              onChange={(e) => setTimeOfDay(e.target.value)}
            >
              <option>Day</option>
              <option>Night</option>
              <option>Sunset</option>
              <option>Sunrise</option>
              <option>Golden Hour</option>
              <option>Midnight</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-emerald-400/60 bg-emerald-500/30 px-4 py-2 text-xs text-emerald-50 transition hover:bg-emerald-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Environment…" : "Generate Environment"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-emerald-400/40 border-t-transparent" />
              <p>Simulating atmosphere…</p>
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
              Describe an environment to generate its atmospheric blueprint.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
