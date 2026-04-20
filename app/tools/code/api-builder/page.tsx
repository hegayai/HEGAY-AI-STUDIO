"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function ApiBuilderPage() {
  const [endpoint, setEndpoint] = useState("");
  const [method, setMethod] = useState("GET");
  const [framework, setFramework] = useState("Next.js Route Handler");
  const [schema, setSchema] = useState("None");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!endpoint.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real API generation
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated API (Mock)

Framework: ${framework}
Method: ${method}
Endpoint: ${endpoint}
Schema: ${schema}

This is placeholder API code representing the generated backend route.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="API Builder"
      description="Create API routes, handlers, endpoints, and service logic."
      aura="from-cyan-500/20 to-teal-500/20"
      left={
        <EnginePanel>
          {/* Endpoint */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Endpoint Path
            </label>
            <input
              type="text"
              placeholder="/api/users/create"
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={endpoint}
              onChange={(e) => setEndpoint(e.target.value)}
            />
          </div>

          {/* Method */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              HTTP Method
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option>GET</option>
              <option>POST</option>
              <option>PUT</option>
              <option>PATCH</option>
              <option>DELETE</option>
            </select>
          </div>

          {/* Framework */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Framework
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={framework}
              onChange={(e) => setFramework(e.target.value)}
            >
              <option>Next.js Route Handler</option>
              <option>Express.js</option>
              <option>FastAPI</option>
              <option>Node.js HTTP</option>
              <option>Go Fiber</option>
            </select>
          </div>

          {/* Schema */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Validation Schema
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={schema}
              onChange={(e) => setSchema(e.target.value)}
            >
              <option>None</option>
              <option>Zod</option>
              <option>Yup</option>
              <option>JSON Schema</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !endpoint.trim()}
            className="mt-3 rounded-lg border border-teal-400/60 bg-teal-500/30 px-4 py-2 text-xs text-teal-50 transition hover:bg-teal-500/50 disabled:opacity-40"
          >
            {loading ? "Building API…" : "Generate API"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-teal-400/40 border-t-transparent" />
              <p>Generating backend route…</p>
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
              Enter an endpoint path to generate an API route.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
