"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function DiasporaStoryEnginePage() {
  const [theme, setTheme] = useState("Migration");
  const [tone, setTone] = useState("Warm");
  const [focus, setFocus] = useState("Identity");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState("");

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real diaspora story generation API
    await new Promise((r) => setTimeout(r, 1200));

    setStory(
      `A ${tone.toLowerCase()} diaspora story shaped by ${theme.toLowerCase()} and centered on ${focus.toLowerCase()}:

${prompt}

This narrative reflects the emotional memory, cultural continuity, and ancestral resonance carried across borders and generations.`
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Diaspora Story Engine"
      description="Generate ancestral narratives, cultural memory arcs, and diaspora-rooted storytelling."
      aura="from-amber-500/20 to-red-500/20"
      left={
        <EnginePanel>
          {/* Prompt */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Story Seed
            </label>
            <textarea
              placeholder="Describe the character, moment, or cultural spark..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-24 outline-none"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          {/* Theme */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Theme
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
            >
              <option>Migration</option>
              <option>Homecoming</option>
              <option>Resilience</option>
              <option>Legacy</option>
              <option>Rebirth</option>
              <option>Memory</option>
            </select>
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
              <option>Melancholic</option>
              <option>Triumphant</option>
              <option>Spiritual</option>
              <option>Playful</option>
              <option>Epic</option>
            </select>
          </div>

          {/* Focus */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Focus
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
            >
              <option>Identity</option>
              <option>Family</option>
              <option>Culture</option>
              <option>Struggle</option>
              <option>Victory</option>
              <option>Spirituality</option>
            </select>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="mt-2 rounded-lg border border-red-400/60 bg-red-500/30 px-4 py-2 text-xs text-red-50 transition hover:bg-red-500/50 disabled:opacity-40"
          >
            {loading ? "Weaving Story…" : "Generate Story"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-red-400/40 border-t-transparent" />
              <p>Weaving cultural memory…</p>
            </div>
          )}

          {!loading && story && (
            <pre className="text-xs text-slate-200 whitespace-pre-line">
              {story}
            </pre>
          )}

          {!loading && !story && (
            <p className="text-xs text-slate-500 text-center px-4">
              Enter a story seed to generate a diaspora narrative.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
