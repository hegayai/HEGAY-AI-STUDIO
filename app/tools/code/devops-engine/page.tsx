"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function DevOpsEnginePage() {
  const [prompt, setPrompt] = useState("");
  const [provider, setProvider] = useState("GitHub Actions");
  const [deployment, setDeployment] = useState("Docker");
  const [environment, setEnvironment] = useState("Production");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real DevOps generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated DevOps Pipeline (Mock)

Provider: ${provider}
Deployment: ${deployment}
Environment: ${environment}

Prompt:
${prompt}

This is placeholder DevOps configuration representing the generated pipeline.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="DevOps Pipeline Engine"
      description="Generate CI/CD pipelines, deployment configs, and automation flows."
      aura="from-yellow-500/20 to-amber-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Pipeline Description
            </label>
            <textarea
              placeholder="Describe the deployment, CI/CD flow, or automation you want to generate..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Provider */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              CI/CD Provider
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
            >
              <option>GitHub Actions</option>
              <option>GitLab CI</option>
              <option>CircleCI</option>
              <option>Azure Pipelines</option>
            </select>
          </div>

          {/* Deployment */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Deployment Target
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={deployment}
              onChange={(e) => setDeployment(e.target.value)}
            >
              <option>Docker</option>
              <option>Kubernetes</option>
              <option>Vercel</option>
              <option>Netlify</option>
              <option>Custom Server</option>
            </select>
          </div>

          {/* Environment */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Environment
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={environment}
              onChange={(e) => setEnvironment(e.target.value)}
            >
              <option>Production</option>
              <option>Staging</option>
              <option>Development</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-3 rounded-lg border border-amber-400/60 bg-amber-500/30 px-4 py-2 text-xs text-amber-50 transition hover:bg-amber-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Pipeline…" : "Generate Pipeline"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-amber-400/40 border-t-transparent" />
              <p>Building automation flow…</p>
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
              Describe a pipeline or deployment to generate its configuration.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
