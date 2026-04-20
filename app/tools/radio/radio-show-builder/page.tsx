"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function RadioShowBuilderPage() {
  const [title, setTitle] = useState("");
  const [tone, setTone] = useState("Warm");
  const [segments, setSegments] = useState<string[]>([]);
  const [newSegment, setNewSegment] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  function addSegment() {
    if (!newSegment.trim()) return;
    setSegments([...segments, newSegment]);
    setNewSegment("");
  }

  async function handleGenerate() {
    if (!title.trim() || segments.length === 0) return;
    setLoading(true);

    // 🔮 Placeholder for real radio‑show assembly API
    await new Promise((r) => setTimeout(r, 1200));

    setResult(
      `Radio Show Blueprint: ${title}

Tone: ${tone}

Segments:
${segments.map((s, i) => `• Segment ${i + 1}: ${s}`).join("\n")}

Your show structure is ready for production.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Radio Show Builder"
      description="Assemble shows, segments, transitions, and broadcast flow."
      aura="from-amber-500/20 to-red-500/20"
      left={
        <EnginePanel>
          {/* Show Title */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Show Title
            </label>
            <input
              type="text"
              placeholder="Enter your show title..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Tone */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Tone
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option>Warm</option>
              <option>Energetic</option>
              <option>Calm</option>
              <option>Serious</option>
              <option>Playful</option>
              <option>Inspirational</option>
            </select>
          </div>

          {/* Add Segment */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Add Segment
            </label>
            <div className="flex gap-2 mt-1">
              <input
                type="text"
                placeholder="Segment name..."
                className="flex-1 rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
                value={newSegment}
                onChange={(e) => setNewSegment(e.target.value)}
              />
              <button
                onClick={addSegment}
                className="rounded-lg border border-red-400/60 bg-red-500/30 px-3 py-2 text-[0.7rem] text-red-50 hover:bg-red-500/50 transition"
              >
                Add
              </button>
            </div>
          </div>

          {/* Segment List */}
          {segments.length > 0 && (
            <div className="mt-2 space-y-1">
              {segments.map((s, i) => (
                <p
                  key={i}
                  className="text-[0.7rem] text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1"
                >
                  {i + 1}. {s}
                </p>
              ))}
            </div>
          )}

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !title.trim() || segments.length === 0}
            className="mt-2 rounded-lg border border-red-400/60 bg-red-500/30 px-4 py-2 text-xs text-red-50 transition hover:bg-red-500/50 disabled:opacity-40"
          >
            {loading ? "Building Show…" : "Generate Show Blueprint"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-red-400/40 border-t-transparent" />
              <p>Assembling broadcast flow…</p>
            </div>
          )}

          {!loading && result && (
            <pre className="text-xs text-slate-200 whitespace-pre-line">
              {result}
            </pre>
          )}

          {!loading && !result && (
            <p className="text-xs text-slate-500 text-center px-4">
              Add segments and define tone to build your radio show blueprint.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
