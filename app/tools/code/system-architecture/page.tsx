"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function SystemArchitecturePage() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("High-level Blueprint");
  const [pattern, setPattern] = useState("Modular Monolith");
  const [focus, setFocus] = useState("Full System");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real architecture generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated System Architecture (Mock)

Style: ${style}
Pattern: ${pattern}
Focus: ${focus}

Prompt:
${prompt}

This is placeholder text representing the generated architecture blueprint.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="System Architecture Engine"
      description="Generate system diagrams, architecture plans, and service blueprints."
      aura="from-green-500/20 to-lime-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              System Description
            </label>
            <textarea
              placeholder="Describe the product, platform, or system you want to architect..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Style */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Architecture Style
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            >
              <option>High-level Blueprint</option>
              <option>Detailed Service Map</option>
              <option>Data Flow Focused</option>
              <option>API & Integration Focused</option>
            </select>
          </div>

          {/* Pattern */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Architecture Pattern
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
            >
              <option>Modular Monolith</option>
              <option>Microservices</option>
              <option>Service-Oriented</option>
              <option>Event-Driven</option>
              <option>Layered Architecture</option>
            </select>
          </div>

          {/* Focus */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Focus Area
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
            >
              <option>Full System</option>
              <option>Backend Services</option>
              <option>APIs & Gateways</option>
              <option>Data & Storage</option>
              <option>Real-time & Events</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-lime-400/60 bg-lime-500/30 px-4 py-2 text-xs text-lime-50 transition hover:bg-lime-500/50 disabled:opacity-40"
          >
            {loading ? "Designing System…" : "Generate Architecture"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-lime-400/40 border-t-transparent" />
              <p>Mapping services and flows…</p>
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
              Describe a system to generate its architecture blueprint.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
