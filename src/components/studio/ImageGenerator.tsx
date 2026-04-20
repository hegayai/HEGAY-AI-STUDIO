"use client";

import { useState } from "react";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generate = async () => {
    try {
      setError(null);
      setResultUrl(null);

      if (!prompt.trim()) {
        setError("Please enter a prompt.");
        return;
      }

      setLoading(true);

      const res = await fetch("/api/image/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        setError("Image generation failed.");
        setLoading(false);
        return;
      }

      const data = await res.json();
      setResultUrl(data?.url || null);
      setLoading(false);
    } catch {
      setError("Unexpected error.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* Prompt */}
      <div className="cosmic-panel p-6 rounded-xl space-y-4 section-enter">
        <label className="text-sm text-white/70">Prompt</label>
        <textarea
          className="w-full h-40 p-4 rounded-xl bg-black/40 border border-white/15 text-white focus:ring-2 focus:ring-cosmic-gold/70"
          placeholder="Describe the image you want to generate..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        {error && (
          <div className="text-sm text-red-400 bg-red-900/20 border border-red-500/40 p-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          onClick={generate}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold disabled:opacity-60"
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </div>

      {/* Result */}
      {resultUrl && (
        <div className="cosmic-panel p-6 rounded-xl section-enter">
          <img
            src={resultUrl}
            alt="Generated"
            className="w-full rounded-xl border border-white/15"
          />
        </div>
      )}
    </div>
  );
}
