"use client";

import { useState } from "react";

type Mode = "t2a" | "a2a" | "hybrid" | null;

export default function AudioGenerator() {
  const [prompt, setPrompt] = useState("");
  const [audio, setAudio] = useState<string | null>(null);
  const [mode, setMode] = useState<Mode>(null);
  const [showModeModal, setShowModeModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setAudio(reader.result as string);
    reader.readAsDataURL(file);
  };

  const detectMode = (): Mode => {
    if (prompt && audio) {
      setShowModeModal(true);
      return null;
    }
    if (prompt && !audio) return "t2a";
    if (!prompt && audio) return "a2a";
    return null;
  };

  const generate = async (forcedMode?: Mode) => {
    try {
      setError(null);
      setResultUrl(null);

      const selectedMode = forcedMode || detectMode();
      if (!selectedMode) return;

      if (!prompt && selectedMode === "t2a") {
        setError("Please enter a prompt for text-to-audio.");
        return;
      }

      if (!audio && (selectedMode === "a2a" || selectedMode === "hybrid")) {
        setError("Please upload an audio file for this mode.");
        return;
      }

      setMode(selectedMode);
      setShowModeModal(false);
      setLoading(true);

      let endpoint = "/api/audio/generate";

      if (selectedMode === "a2a") endpoint = "/api/audio/transform";
      if (selectedMode === "hybrid") endpoint = "/api/audio/generate-guided";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          audio,
          mode: selectedMode,
        }),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Backend error:", text);
        setError("Audio generation failed. Check server logs.");
        setLoading(false);
        return;
      }

      const data = await res.json();
      const url =
        data?.meta?.url ||
        data?.url ||
        data?.audioUrl ||
        data?.audio ||
        null;

      if (!url) {
        setError("No audio returned from backend.");
        setLoading(false);
        return;
      }

      setResultUrl(url);
      setLoading(false);
    } catch (err) {
      console.error("Frontend error:", err);
      setError("Unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="flex flex-col space-y-2">
          <label className="text-sm text-white/70">Prompt</label>
          <textarea
            className="w-full h-40 p-4 rounded-xl bg-black/40 border border-white/15 text-white focus:outline-none focus:ring-2 focus:ring-cosmic-gold/70"
            placeholder="Describe the audio you want to generate or transform..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm text-white/70">Audio (optional)</label>

          {!audio ? (
            <label className="w-full h-40 border border-dashed border-white/25 rounded-xl flex flex-col items-center justify-center text-white/50 cursor-pointer hover:border-cosmic-gold hover:text-cosmic-gold transition">
              <input
                type="file"
                accept="audio/*"
                className="hidden"
                onChange={handleAudioUpload}
              />
              <span className="text-sm">+ Upload Audio</span>
              <span className="text-[11px] text-white/40 mt-1">
                Drop a file or click to browse
              </span>
            </label>
          ) : (
            <div className="w-full h-40 rounded-xl overflow-hidden border border-white/15 bg-black/60 flex flex-col p-4">
              <audio controls src={audio} className="w-full" />
              <button
                onClick={() => setAudio(null)}
                className="self-end mt-2 px-2 py-1 text-[11px] rounded bg-black/70 text-white/80 hover:bg-black"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>

      {error && (
        <div className="text-sm text-red-400 bg-red-900/20 border border-red-500/40 rounded-lg px-4 py-2">
          {error}
        </div>
      )}

      <button
        onClick={() => generate()}
        disabled={loading}
        className="w-full py-4 rounded-xl bg-cosmic-gold/90 hover:bg-cosmic-gold text-black font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Generating Audio..." : "Generate Audio"}
      </button>

      {resultUrl && (
        <div className="mt-6 space-y-3">
          <h2 className="text-lg font-semibold text-white/90">
            Generated Audio
          </h2>
          <audio
            src={resultUrl}
            controls
            className="w-full rounded-xl border border-white/15 bg-black/60"
          />
        </div>
      )}

      {showModeModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-black/90 border border-white/15 rounded-xl p-6 w-full max-w-sm space-y-4">
            <h2 className="text-white text-lg font-semibold">
              Choose Generation Mode
            </h2>

            <button
              onClick={() => generate("hybrid")}
              className="w-full py-3 rounded-lg bg-cosmic-gold text-black font-semibold hover:bg-yellow-400 transition text-sm"
            >
              Guided (Text + Audio)
            </button>

            <button
              onClick={() => generate("a2a")}
              className="w-full py-3 rounded-lg bg-white/10 text-white hover:bg-white/15 transition text-sm"
            >
              Audio → Audio
            </button>

            <button
              onClick={() => generate("t2a")}
              className="w-full py-3 rounded-lg bg-white/5 text-white/80 hover:bg-white/10 transition text-sm"
            >
              Text → Audio
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
