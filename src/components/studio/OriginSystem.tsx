"use client";

import { useState } from "react";

export default function OriginSystem() {
  const [seed, setSeed] = useState("");
  const [lore, setLore] = useState("");
  const [timeline, setTimeline] = useState("");
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateSeed = async () => {
    try {
      setError(null);
      setResponse(null);
      setLoading(true);

      const res = await fetch("/api/origin/seed", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ seed }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setLoading(false);
    } catch {
      setError("Unexpected error occurred.");
      setLoading(false);
    }
  };

  const generateLore = async () => {
    try {
      setError(null);
      setResponse(null);
      setLoading(true);

      const res = await fetch("/api/origin/lore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lore }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setLoading(false);
    } catch {
      setError("Unexpected error occurred.");
      setLoading(false);
    }
  };

  const generateTimeline = async () => {
    try {
      setError(null);
      setResponse(null);
      setLoading(true);

      const res = await fetch("/api/origin/timeline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ timeline }),
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
      setLoading(false);
    } catch {
      setError("Unexpected error occurred.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-10">

      {/* WORLD SEED */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">World Seed</h2>

        <textarea
          placeholder="Describe the essence of your world..."
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white h-24"
          value={seed}
          onChange={(e) => setSeed(e.target.value)}
        />

        <button
          onClick={generateSeed}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold"
        >
          {loading ? "Generating..." : "Generate World Seed"}
        </button>
      </section>

      {/* LORE ENGINE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Lore Engine</h2>

        <textarea
          placeholder="Describe the lore, mythology, or ancestry..."
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white h-24"
          value={lore}
          onChange={(e) => setLore(e.target.value)}
        />

        <button
          onClick={generateLore}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold"
        >
          {loading ? "Generating..." : "Generate Lore"}
        </button>
      </section>

      {/* TIMELINE ENGINE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Timeline Engine</h2>

        <textarea
          placeholder="Describe the timeline or events..."
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white h-24"
          value={timeline}
          onChange={(e) => setTimeline(e.target.value)}
        />

        <button
          onClick={generateTimeline}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold"
        >
          {loading ? "Generating..." : "Generate Timeline"}
        </button>
      </section>

      {/* ERROR */}
      {error && (
        <div className="text-red-400 text-sm bg-red-900/20 border border-red-500/40 p-4 rounded-xl">
          {error}
        </div>
      )}

      {/* RESPONSE */}
      {response && (
        <pre className="bg-black/40 border border-white/15 p-4 rounded-xl text-white/80 text-sm overflow-auto">
          {response}
        </pre>
      )}
    </div>
  );
}
