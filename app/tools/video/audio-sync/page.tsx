"use client";

import { useState } from "react";
import EngineCore from "@/app/components/ui/EngineCore";
import EnginePanel from "@/app/components/ui/EnginePanel";
import EngineOutput from "@/app/components/ui/EngineOutput";

export default function AudioSyncEnginePage() {
  const [videoUrl, setVideoUrl] = useState("");
  const [audioUrl, setAudioUrl] = useState("");
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [syncedUrl, setSyncedUrl] = useState("");

  async function handleSync() {
    if (!videoUrl.trim() || !audioUrl.trim()) return;
    setLoading(true);

    // 🔮 Placeholder for real audio-video sync API
    await new Promise((r) => setTimeout(r, 1500));

    setSyncedUrl("/placeholder-synced-video.mp4");

    setLoading(false);
  }

  return (
    <EngineCore
      title="Audio Sync Engine"
      description="Sync music, voice, and sound effects to video timing with precision."
      aura="from-cyan-500/20 to-emerald-500/20"
      left={
        <EnginePanel>
          {/* Video URL */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Video URL
            </label>
            <input
              type="text"
              placeholder="Paste video URL..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>

          {/* Audio URL */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Audio URL
            </label>
            <input
              type="text"
              placeholder="Paste audio or voice-over URL..."
              className="mt-1 w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-slate-100 outline-none"
              value={audioUrl}
              onChange={(e) => setAudioUrl(e.target.value)}
            />
          </div>

          {/* Offset */}
          <div>
            <label className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Audio Offset ({offset}ms)
            </label>
            <input
              type="range"
              min={-2000}
              max={2000}
              value={offset}
              onChange={(e) => setOffset(Number(e.target.value))}
              className="mt-1 w-full"
            />
            <p className="text-[0.65rem] text-slate-500 mt-1">
              Negative = audio starts earlier, Positive = audio starts later
            </p>
          </div>

          {/* Button */}
          <button
            onClick={handleSync}
            disabled={loading || !videoUrl.trim() || !audioUrl.trim()}
            className="mt-2 rounded-lg border border-emerald-400/60 bg-emerald-500/30 px-4 py-2 text-xs text-emerald-50 transition hover:bg-emerald-500/50 disabled:opacity-40"
          >
            {loading ? "Syncing Audio…" : "Sync Audio to Video"}
          </button>
        </EnginePanel>
      }
      right={
        <EngineOutput>
          {loading && (
            <div className="flex flex-col items-center gap-2 text-xs text-slate-300">
              <div className="h-10 w-10 animate-spin rounded-full border border-emerald-400/40 border-t-transparent" />
              <p>Aligning audio with motion…</p>
            </div>
          )}

          {!loading && syncedUrl && (
            <div className="w-full space-y-2">
              <video
                controls
                className="w-full rounded-lg border border-white/10 bg-black/40"
              >
                <source src={syncedUrl} type="video/mp4" />
              </video>

              <div className="flex gap-2">
                <button className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] text-slate-100 hover:bg-white/10 transition">
                  Download
                </button>
                <button
                  onClick={handleSync}
                  className="rounded-lg border border-emerald-400/60 bg-emerald-500/30 px-3 py-1.5 text-[0.7rem] text-emerald-50 hover:bg-emerald-500/50 transition"
                >
                  Re‑sync
                </button>
              </div>
            </div>
          )}

          {!loading && !syncedUrl && (
            <p className="text-xs text-slate-500 text-center px-4">
              Paste a video and audio URL to sync them with precision.
            </p>
          )}
        </EngineOutput>
      }
    />
  );
}
