"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function MixEnginePage() {
  const [stems, setStems] = useState<{ name: string; url: string }[]>([]);
  const [newName, setNewName] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const [eq, setEq] = useState(0); // -10 to +10
  const [compression, setCompression] = useState(0); // 0 to 100
  const [width, setWidth] = useState(50); // 0 to 100

  const [loading, setLoading] = useState(false);
  const [mixUrl, setMixUrl] = useState("");

  function addStem() {
    if (!newName.trim() || !newUrl.trim()) return;

    setStems([...stems, { name: newName, url: newUrl }]);
    setNewName("");
    setNewUrl("");
  }

  async function handleMix() {
    if (stems.length === 0) return;
    setLoading(true);

    // 🔮 Placeholder for real mixing API
    await new Promise((r) => setTimeout(r, 1500));

    setMixUrl("/placeholder-mix.mp3");

    setLoading(false);
  }

  return (
    <EngineCore
      title="Mix Engine"
      description="Balance stems, EQ, compression, and spatial mix."
      aura="from-purple-500/20 to-fuchsia-500/20"
      left={
        <EnginePanel>
          {/* Add Stem */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Stem Name
            </label>
            <input
              type="text"
              placeholder="e.g., Drums, Vocals, Bass..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>

          <div className="mt-2">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Stem URL
            </label>
            <input
              type="text"
              placeholder="Paste audio stem URL..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={newUrl}
              onChange={(e) => setNewUrl(e.target.value)}
            />
          </div>

          <button
            onClick={addStem}
            disabled={!newName.trim() || !newUrl.trim()}
            className="mt-2 rounded-lg border border-fuchsia-400/60 bg-fuchsia-500/30 px-4 py-2 text-xs text-fuchsia-50 transition hover:bg-fuchsia-500/50 disabled:opacity-40"
          >
            Add Stem
          </button>

          {/* Stem List */}
          {stems.length > 0 && (
            <div className="mt-3 space-y-1">
              {stems.map((s, i) => (
                <p
                  key={i}
                  className="text-[0.7rem] text-slate-300 bg-white/5 border border-white/10 rounded-lg px-3 py-1"
                >
                  {i + 1}. {s.name}
                </p>
              ))}
            </div>
          )}

          {/* EQ */}
          <div className="mt-4">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              EQ ({eq > 0 ? "+" : ""}{eq} dB)
            </label>
            <input
              type="range"
              min={-10}
              max={10}
              value={eq}
              onChange={(e) => setEq(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Compression */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Compression ({compression}%)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={compression}
              onChange={(e) => setCompression(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Stereo Width */}
          <div className="mt-3">
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Stereo Width ({width}%)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={width}
              onChange={(e) => setWidth(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Mix Button */}
          <button
            onClick={handleMix}
            disabled={loading || stems.length === 0}
            className="mt-4 rounded-lg border border-purple-400/60 bg-purple-500/30 px-4 py-2 text-xs text-purple-50 transition hover:bg-purple-500/50 disabled:opacity-40"
          >
            {loading ? "Mixing Audio…" : "Generate Mix"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {/* Loading */}
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-purple-400/40 border-t-transparent" />
              <p>Balancing stems and shaping spatial mix…</p>
            </div>
          )}

          {/* Output */}
          {!loading && mixUrl && (
            <div className="w-full space-y-3">
              <audio controls className="w-full">
                <source src={mixUrl} type="audio/mpeg" />
              </audio>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleMix}
                  className="rounded-lg border border-purple-400/60 bg-purple-500/30 px-3 py-1.5 text-[0.7rem] text-purple-50 hover:bg-purple-500/50 transition"
                >
                  Re‑mix
                </button>
              </div>
            </div>
          )}

          {/* Empty */}
          {!loading && !mixUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Add stems and adjust mix settings to generate your final audio blend.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
