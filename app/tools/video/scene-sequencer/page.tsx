"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function SceneSequencerPage() {
  const [scenes, setScenes] = useState<
    { title: string; url: string; transition: string }[]
  >([]);
  const [newTitle, setNewTitle] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [newTransition, setNewTransition] = useState("Cut");
  const [loading, setLoading] = useState(false);
  const [sequence, setSequence] = useState("");

  function addScene() {
    if (!newTitle.trim() || !newUrl.trim()) return;

    setScenes([
      ...scenes,
      { title: newTitle, url: newUrl, transition: newTransition },
    ]);

    setNewTitle("");
    setNewUrl("");
    setNewTransition("Cut");
  }

  async function handleGenerate() {
    if (scenes.length === 0) return;
    setLoading(true);

    // 🔮 Placeholder for real sequencing API
    await new Promise((r) => setTimeout(r, 1200));

    const blueprint = scenes
      .map(
        (s, i) =>
          `Scene ${i + 1}: ${s.title}
URL: ${s.url}
Transition: ${s.transition}`
      )
      .join("\n\n");

    setSequence(`Scene Sequence Blueprint:\n\n${blueprint}`);

    setLoading(false);
  }

  return (
    <EngineCore
      title="Scene Sequencer"
      description="Assemble scenes into cinematic sequences with pacing, transitions, and narrative flow."
      aura="from-indigo-500/20 to-blue-500/20"
      left={
        <EnginePanel>
          {/* Scene Title */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Scene Title
            </label>
            <input
              type="text"
              placeholder="e.g., Opening Shot, Chase Scene..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>

          {/* Scene URL */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Video Clip URL
            </label>
            <input
              type="text"
              placeholder="Paste video URL..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
          </div>

          {/* Transition */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Transition
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={newTransition}
              onChange={(e) => setNewTransition(e.target.value)}
            >
              <option>Cut</option>
              <option>Fade</option>
              <option>Crossfade</option>
              <option>Wipe</option>
              <option>Zoom Transition</option>
              <option>Motion Blur</option>
            </select>
          </div>

          {/* Add Scene Button */}
          <button
            onClick={addScene}
            disabled={!newTitle.trim() || !newUrl.trim()}
            className="mt-2 rounded-lg border border-blue-400/60 bg-blue-500/30 px-4 py-2 text-xs text-blue-50 transition hover:bg-blue-500/50 disabled:opacity-40"
          >
            Add Scene
          </button>

          {/* Scene List */}
          {scenes.length > 0 && (
            <div className="mt-3 space-y-1">
              {scenes.map((s, i) => (
                <p
                  key={i}
                  className="text-[0.7rem] text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1"
                >
                  {i + 1}. {s.title} — {s.transition}
                </p>
              ))}
            </div>
          )}

          {/* Generate Sequence */}
          <button
            onClick={handleGenerate}
            disabled={loading || scenes.length === 0}
            className="mt-3 rounded-lg border border-indigo-400/60 bg-indigo-500/30 px-4 py-2 text-xs text-indigo-50 transition hover:bg-indigo-500/50 disabled:opacity-40"
          >
            {loading ? "Sequencing…" : "Generate Sequence Blueprint"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-blue-400/40 border-t-transparent" />
              <p>Assembling cinematic sequence…</p>
            </div>
          )}

          {!loading && sequence && (
            <pre className="text-xs text-slate-200 whitespace-pre-line">
              {sequence}
            </pre>
          )}

          {!loading && !sequence && (
            <p className="text-xs text-slate-500 text-center px-4">
              Add scenes and transitions to build your cinematic sequence.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
