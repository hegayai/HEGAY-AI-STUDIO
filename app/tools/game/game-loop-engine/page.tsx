"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function GameLoopEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [loopType, setLoopType] = useState("Fixed Timestep");
  const [updateOrder, setUpdateOrder] = useState("Physics → AI → Interactions → Rendering");
  const [performance, setPerformance] = useState("Balanced");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real game loop generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Game Loop (Mock)

Loop Type: ${loopType}
Update Order: ${updateOrder}
Performance Profile: ${performance}

Prompt:
${prompt}

This is placeholder metadata representing the generated game loop and runtime cycle.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Game Loop Engine"
      description="Create update loops, tick systems, frame logic, and runtime cycles."
      aura="from-yellow-500/20 to-lime-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Loop Description
            </label>
            <textarea
              placeholder="Describe the loop: real-time action, turn-based hybrid, physics-heavy, AI-driven..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Loop Type */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Loop Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={loopType}
              onChange={(e) => setLoopType(e.target.value)}
            >
              <option>Fixed Timestep</option>
              <option>Variable Timestep</option>
              <option>Hybrid</option>
              <option>Event-Driven</option>
              <option>Turn-Based Runtime</option>
            </select>
          </div>

          {/* Update Order */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Update Order
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={updateOrder}
              onChange={(e) => setUpdateOrder(e.target.value)}
            >
              <option>Physics → AI → Interactions → Rendering</option>
              <option>AI → Physics → Interactions → Rendering</option>
              <option>Interactions → Physics → AI → Rendering</option>
              <option>Custom Order</option>
            </select>
          </div>

          {/* Performance */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Performance Profile
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={performance}
              onChange={(e) => setPerformance(e.target.value)}
            >
              <option>Balanced</option>
              <option>High Performance</option>
              <option>Energy Efficient</option>
              <option>Simulation Accuracy</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-lime-400/60 bg-lime-500/30 px-4 py-2 text-xs text-lime-50 transition hover:bg-lime-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Loop…" : "Generate Loop"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-lime-400/40 border-t-transparent" />
              <p>Constructing runtime cycle…</p>
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
              Describe a game loop to generate its runtime blueprint.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
