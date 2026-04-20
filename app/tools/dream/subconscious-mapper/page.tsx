"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function SubconsciousMapperPage() {
  const [symbol, setSymbol] = useState("");
  const [depth, setDepth] = useState("Surface");
  const [clarity, setClarity] = useState(50);
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState("");

  async function handleGenerate() {
    if (!symbol.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real subconscious mapping API
    await new Promise((r) => setTimeout(r, 1200));

    setResultUrl(
      "https://via.placeholder.com/768x512.png?text=Subconscious+Map"
    );

    setLoading(false);
  }

  return (
    <EngineCore
      title="Subconscious Mapper"
      description="Visualize dream logic, symbolic pathways, and subconscious structures."
      aura="from-indigo-500/20 to-blue-500/20"
      left={
        <EnginePanel>
          {/* Symbol */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Symbol / Archetype
            </label>
            <input
              type="text"
              placeholder="Enter a symbol, archetype, or dream element..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
            />
          </div>

          {/* Depth */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Depth Layer
            </label>
            <select
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100"
              value={depth}
              onChange={(e) => setDepth(e.target.value)}
            >
              <option>Surface</option>
              <option>Emotional Layer</option>
              <option>Shadow Layer</option>
              <option>Archetypal Layer</option>
              <option>Core Self</option>
            </select>
          </div>

          {/* Clarity */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Clarity ({clarity}%)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={clarity}
              onChange={(e) => setClarity(Number(e.target.value))}
              className="mt-1 w-full"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleGenerate}
            disabled={loading || !symbol.trim()}
            className="rounded-lg border border-blue-400/60 bg-blue-500/30 px-4 py-2 text-xs text-blue-50 transition hover:bg-blue-500/50 disabled:opacity-40"
          >
            {loading ? "Mapping Subconscious…" : "Generate Map"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-blue-400/40 border-t-transparent" />
              <p>Rendering symbolic pathways…</p>
            </div>
          )}

          {!loading && resultUrl && (
            <div className="w-full space-y-2">
              <div className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/60">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={resultUrl}
                  alt="Subconscious Map Result"
                  className="h-64 w-full object-cover"
                />
              </div>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleGenerate}
                  className="rounded-lg border border-blue-400/60 bg-blue-500/30 px-3 py-1.5 text-[0.7rem] text-blue-50 hover:bg-blue-500/50 transition"
                >
                  Re‑map
                </button>
              </div>
            </div>
          )}

          {!loading && !resultUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Enter a symbol or archetype to generate a subconscious map.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
