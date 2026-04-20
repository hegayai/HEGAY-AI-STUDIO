"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function AvatarEnginePage() {
  const [concept, setConcept] = useState("");
  const [archetype, setArchetype] = useState("Hero");
  const [vibe, setVibe] = useState("Mythic");
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");

  async function handleGenerate() {
    if (!concept.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real avatar API call
    await new Promise((r) => setTimeout(r, 1200));

    setResultUrl(
      "https://via.placeholder.com/768x512.png?text=Avatar+Engine"
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Avatar Engine"
      description="Generate characters, personas, and identity-driven avatars for your creative civilization."
      aura="from-purple-500/20 to-fuchsia-500/20"
      left={
        <EnginePanel>
          {/* Concept */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Avatar Concept
            </label>
            <textarea
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 h-24 outline-none"
              placeholder="Describe the avatar: role, look, energy, purpose..."
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
            />
          </div>

          {/* Archetype + Vibe */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Archetype
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
                value={archetype}
                onChange={(e) => setArchetype(e.target.value)}
              >
                <option>Hero</option>
                <option>Guide</option>
                <option>Oracle</option>
                <option>Rebel</option>
                <option>Architect</option>
                <option>Guardian</option>
              </select>
            </div>

            <div>
              <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                Vibe
              </label>
              <select
                className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
                value={vibe}
                onChange={(e) => setVibe(e.target.value)}
              >
                <option>Mythic</option>
                <option>Cosmic</option>
                <option>Street</option>
                <option>Royal</option>
                <option>Playful</option>
                <option>Ancient</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !concept.trim()}
            className="rounded-lg border border-purple-400/60 bg-purple-500/30 px-4 py-2 text-xs text-purple-50 transition hover:bg-purple-500/50 disabled:opacity-40"
          >
            {loading ? "Summoning Avatar…" : "Generate Avatar"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-purple-400/40 border-t-transparent" />
              <p>Summoning your avatar from the identity field…</p>
            </div>
          )}

          {!loading && resultUrl && (
            <div className="w-full space-y-2">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resultUrl}
                  alt="Avatar Result"
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleGenerate}
                  className="rounded-lg border border-purple-400/60 bg-purple-500/30 px-3 py-1.5 text-[0.7rem] text-purple-50 hover:bg-purple-500/50 transition"
                >
                  Regenerate
                </button>
              </div>
            </div>
          )}

          {!loading && !resultUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Describe an avatar concept, choose archetype and vibe, then
              generate a new identity.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
