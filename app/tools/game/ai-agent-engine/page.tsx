"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function AIAgentEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [aiType, setAIType] = useState("NPC");
  const [behaviorModel, setBehaviorModel] = useState("Behavior Tree");
  const [movement, setMovement] = useState("Pathfinding");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real AI agent generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated AI Agent System (Mock)

AI Type: ${aiType}
Behavior Model: ${behaviorModel}
Movement Logic: ${movement}

Prompt:
${prompt}

This is placeholder metadata representing the generated AI behavior and decision logic.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="AI Agent Engine"
      description="Generate AI behaviors, decision trees, pathfinding, and agent logic."
      aura="from-amber-500/20 to-yellow-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              AI Agent Description
            </label>
            <textarea
              placeholder="Describe the AI: enemy patrol logic, companion behavior, shopkeeper routine, boss fight phases..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* AI Type */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              AI Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={aiType}
              onChange={(e) => setAIType(e.target.value)}
            >
              <option>NPC</option>
              <option>Enemy</option>
              <option>Companion</option>
              <option>Civilian</option>
              <option>Boss</option>
              <option>Custom Agent</option>
            </select>
          </div>

          {/* Behavior Model */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Behavior Model
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={behaviorModel}
              onChange={(e) => setBehaviorModel(e.target.value)}
            >
              <option>Behavior Tree</option>
              <option>State Machine</option>
              <option>Goal-Oriented Action Planning</option>
              <option>Rule-Based</option>
              <option>Randomized</option>
            </select>
          </div>

          {/* Movement Logic */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Movement Logic
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={movement}
              onChange={(e) => setMovement(e.target.value)}
            >
              <option>Pathfinding</option>
              <option>Patrol Routes</option>
              <option>Random Walk</option>
              <option>Direct Chase</option>
              <option>Flee Logic</option>
              <option>Static</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-yellow-400/60 bg-yellow-500/30 px-4 py-2 text-xs text-yellow-50 transition hover:bg-yellow-500/50 disabled:opacity-40"
          >
            {loading ? "Generating AI Agent…" : "Generate AI Agent"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-yellow-400/40 border-t-transparent" />
              <p>Designing agent intelligence…</p>
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
              Describe an AI agent to generate its behavior blueprint.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
