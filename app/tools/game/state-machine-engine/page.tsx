"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function StateMachineEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [machineType, setMachineType] = useState("Finite State Machine");
  const [transitionMode, setTransitionMode] = useState("Event-Driven");
  const [complexity, setComplexity] = useState("Medium");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real state machine generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated State Machine (Mock)

Machine Type: ${machineType}
Transition Mode: ${transitionMode}
Complexity: ${complexity}

Prompt:
${prompt}

This is placeholder metadata representing the generated state machine and transition logic.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="State Machine Engine"
      description="Generate state machines, transitions, conditions, and flow logic."
      aura="from-lime-500/20 to-green-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              State Machine Description
            </label>
            <textarea
              placeholder="Describe the system: enemy AI phases, menu flow, puzzle states, boss transitions..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Machine Type */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Machine Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={machineType}
              onChange={(e) => setMachineType(e.target.value)}
            >
              <option>Finite State Machine</option>
              <option>Hierarchical State Machine</option>
              <option>Pushdown Automaton</option>
              <option>Behavior State Graph</option>
              <option>Custom Logic System</option>
            </select>
          </div>

          {/* Transition Mode */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Transition Mode
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={transitionMode}
              onChange={(e) => setTransitionMode(e.target.value)}
            >
              <option>Event-Driven</option>
              <option>Time-Based</option>
              <option>Condition-Based</option>
              <option>Randomized</option>
              <option>Hybrid</option>
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

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-green-400/60 bg-green-500/30 px-4 py-2 text-xs text-green-50 transition hover:bg-green-500/50 disabled:opacity-40"
          >
            {loading ? "Generating State Machine…" : "Generate State Machine"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-green-400/40 border-t-transparent" />
              <p>Mapping states and transitions…</p>
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
              Describe a system to generate its state machine blueprint.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
