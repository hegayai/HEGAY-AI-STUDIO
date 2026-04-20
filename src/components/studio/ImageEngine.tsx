"use client";

import { useState } from "react";

export default function ImageEngine() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    setLoading(true);
    setImageUrl(null);
    setError(null);

    try {
      const res = await fetch("/api/image/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(data.error || "Image generation failed");
        setLoading(false);
        return;
      }

      setImageUrl(data.url);

      // Save to gallery
      await fetch("/api/media/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "image",
          url: data.url,
          prompt,
        }),
      });
    } catch (err) {
      setError("Unexpected error generating image");
    }

    setLoading(false);
  };

  return (
    <div className="glass-panel p-8 rounded-2xl text-white flex flex-col gap-6">
      <textarea
        className="w-full h-32 p-4 rounded-xl bg-black/30 border border-white/10"
        placeholder="Describe the image..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={generateImage}
        disabled={loading || !prompt}
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600"
      >
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {error && <p className="text-red-400 text-sm">{error}</p>}

      {imageUrl && (
        <img
          src={imageUrl}
          alt="Generated"
          className="rounded-xl border border-white/10 mt-4"
        />
      )}
    </div>
  );
}
