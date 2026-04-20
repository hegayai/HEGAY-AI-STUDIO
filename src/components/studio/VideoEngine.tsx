"use client";

import { useState } from "react";

export default function VideoEngine() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateVideo = async () => {
    setLoading(true);
    setVideoUrl(null);
    setError(null);

    try {
      const res = await fetch("/api/video/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(data.error || "Video generation failed");
        setLoading(false);
        return;
      }

      setVideoUrl(data.url);

      // Save to gallery
      await fetch("/api/media/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "video",
          url: data.url,
          prompt,
        }),
      });
    } catch (err) {
      setError("Unexpected error generating video");
    }

    setLoading(false);
  };

  return (
    <div className="glass-panel p-8 rounded-2xl text-white flex flex-col gap-6">
      <textarea
        className="w-full h-32 p-4 rounded-xl bg-black/30 border border-white/10"
        placeholder="Describe the video..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateVideo}
        disabled={loading || !prompt}
        className="px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600"
      >
        {loading ? "Generating..." : "Generate Video"}
      </button>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      {videoUrl && (
        <video
          src={videoUrl}
          controls
          className="rounded-xl border border-white/10 mt-4"
        />
      )}
    </div>
  );
}
