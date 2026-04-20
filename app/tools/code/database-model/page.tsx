"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function DatabaseModelPage() {
  const [modelName, setModelName] = useState("");
  const [fields, setFields] = useState("");
  const [relations, setRelations] = useState("");
  const [dbType, setDbType] = useState("Prisma");
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  async function handleGenerate() {
    if (!modelName.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real model generation API
    await new Promise((r) => setTimeout(r, 1500));

    setOutput(
`Generated Database Model (Mock)

Database Type: ${dbType}
Model: ${modelName}

Fields:
${fields || "(none)"}

Relations:
${relations || "(none)"}

This is placeholder schema code representing the generated model.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Database Model Engine"
      description="Create Prisma models, schemas, relationships, and migrations."
      aura="from-emerald-500/20 to-green-500/20"
      left={
        <EnginePanel>
          {/* Model Name */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Model Name
            </label>
            <input
              type="text"
              placeholder="User, Post, Product..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={modelName}
              onChange={(e) => setModelName(e.target.value)}
            />
          </div>

          {/* Fields */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Fields (one per line)
            </label>
            <textarea
              placeholder="id Int @id @default(autoincrement())&#10;name String&#10;createdAt DateTime @default(now())"
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-28 outline-none"
              value={fields}
              onChange={(e) => setFields(e.target.value)}
            />
          </div>

          {/* Relations */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Relations (optional)
            </label>
            <textarea
              placeholder="posts Post[]&#10;profile Profile?"
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-20 outline-none"
              value={relations}
              onChange={(e) => setRelations(e.target.value)}
            />
          </div>

          {/* DB Type */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Database Type
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={dbType}
              onChange={(e) => setDbType(e.target.value)}
            >
              <option>Prisma</option>
              <option>SQL</option>
              <option>MongoDB</option>
              <option>Drizzle</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !modelName.trim()}
            className="mt-3 rounded-lg border border-green-400/60 bg-green-500/30 px-4 py-2 text-xs text-green-50 transition hover:bg-green-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Model…" : "Generate Model"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-green-400/40 border-t-transparent" />
              <p>Building schema…</p>
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
              Enter a model name to generate a database schema.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
