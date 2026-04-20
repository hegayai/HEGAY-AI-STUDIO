"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function StoryboardEnginePage() {
  const [shots, setShots] = useState<
    { title: string; description: string; framing: string }[]
  >([]);

  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newFraming, setNewFraming] = useState("Wide Shot");

  const [loading, setLoading] = useState(false);
  const [blueprint, setBlueprint] = useState("");

  function addShot() {
    if (!newTitle.trim() || !newDescription.trim()) return;

    setShots([
      ...shots,
      {
        title: newTitle,
        description: newDescription,
        framing: newFraming,
      },
    ]);

    setNewTitle("");
    setNewDescription("");
    setNewFraming("Wide Shot");
  }

  async function handleGenerate() {
    if (shots.length === 0) return;
    setLoading(true);

    // 🔮 Placeholder for real storyboard generation API
    await new Promise((r) => setTimeout(r, 1500));

    const output = shots
      .map(
        (s, i) =>
          `Shot ${i + 1}: ${s.title}
Framing: ${s.framing}
Description: ${s.description}`
      )
      .join("\n\n");

    setBlueprint(`Storyboard Blueprint:\n\n${output}`);

    setLoading(false);
  }

  return (
    <EngineCore
      title="Storyboard Engine"
      description="Create visual storyboards, shot plans, and cinematic layouts."
      aura="from-rose-500/20 to-orange-500/20"
      left={
        <EnginePanel>
          {/* Shot Title */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Shot Title
            </label>
            <input
              type="text"
              placeholder="e.g., Establishing Shot, Close-up..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Description
            </label>
            <textarea
              placeholder="Describe the action, mood, and visual intent..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-20 outline-none"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>

          {/* Framing */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Framing
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={newFraming}
              onChange={(e) => setNewFraming(e.target.value)}
            >
              <option>Wide Shot</option>
              <option>Medium Shot</option>
              <option>Close-up</option>
              <option>Extreme Close-up</option>
              <option>Over-the-Shoulder</option>
              <option>Tracking Shot</option>
              <option>Bird’s Eye</option>
              <option>Low Angle</option>
              <option>High Angle</option>
            </select>
          </div>

          {/* Add Shot */}
          <button
            onClick={addShot}
            disabled={!newTitle.trim() || !newDescription.trim()}
            className="mt-2 rounded-lg border border-orange-400/60 bg-orange-500/30 px-4 py-2 text-xs text-orange-50 transition hover:bg-orange-500/50 disabled:opacity-40"
          >
            Add Shot
          </button>

          {/* Shot List */}
          {shots.length > 0 && (
            <div className="mt-3 space-y-1">
              {shots.map((s, i) => (
                <p
                  key={i}
                  className="text-[0.7rem] text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1"
                >
                  {i + 1}. {s.title} — {s.framing}
                </p>
              ))}
            </div>
          )}

          {/* Generate Blueprint */}
          <button
            onClick={handleGenerate}
            disabled={loading || shots.length === 0}
            className="mt-3 rounded-lg border border-rose-400/60 bg-rose-500/30 px-4 py-2 text-xs text-rose-50 transition hover:bg-rose-500/50 disabled:opacity-40"
          >
            {loading ? "Generating Storyboard…" : "Generate Storyboard Blueprint"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-rose-400/40 border-t-transparent" />
              <p>Building cinematic layout…</p>
            </div>
          )}

          {!loading && blueprint && (
            <pre className="text-xs text-slate-200 whitespace-pre-line">
              {blueprint}
            </pre>
          )}

          {!loading && !blueprint && (
            <p className="text-xs text-slate-500 text-center px-4">
              Add shots to build your storyboard blueprint.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
