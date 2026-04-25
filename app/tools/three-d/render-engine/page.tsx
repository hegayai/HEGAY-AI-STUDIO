"use client";

import { useState } from "react";

export default function RenderEnginePage() {
  const [resolution, setResolution] = useState("4K");
  const [camera, setCamera] = useState("Cinematic");
  const [quality, setQuality] = useState("High"); // ✅ FIXED
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");

  const handleRender = async () => {
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/render/three-d", {
        method: "POST",
        body: JSON.stringify({
          resolution,
          camera,
          quality,
        }),
      });

      const data = await res.json();
      setOutput(data.result || "Render complete.");
    } catch (err) {
      setOutput("Render failed.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <main className="p-10 space-y-8">
      <h1 className="text-3xl font-bold">3D Render Engine</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* SETTINGS PANEL */}
        <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-6 space-y-6">
          <h2 className="text-xl font-semibold">Render Settings</h2>

          {/* Resolution */}
          <div className="space-y-2">
            <label className="text-sm text-slate-300">Resolution</label>
            <select
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
              className="w-full rounded-md bg-slate-900 border border-slate-700 p-2 text-sm"
            >
              <option>1080p</option>
              <option>4K</option>
              <option>8K</option>
            </select>
          </div>

          {/* Camera */}
          <div className="space-y-2">
            <label className="text-sm text-slate-300">Camera Mode</label>
            <select
              value={camera}
              onChange={(e) => setCamera(e.target.value)}
              className="w-full rounded-md bg-slate-900 border border-slate-700 p-2 text-sm"
            >
              <option>Cinematic</option>
              <option>Orthographic</option>
              <option>First‑Person</option>
            </select>
          </div>

          {/* Quality */}
          <div className="space-y-2">
            <label className="text-sm text-slate-300">Quality</label>
            <select
              value={quality}
              onChange={(e) => setQuality(e.target.value)}
              className="w-full rounded-md bg-slate-900 border border-slate-700 p-2 text-sm"
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Ultra</option>
            </select>
          </div>

          {/* Render Button */}
          <button
            onClick={handleRender}
            disabled={loading}
            className="w-full rounded-md bg-cyan-600 hover:bg-cyan-500 transition p-2 text-sm font-semibold"
          >
            {loading ? "Rendering..." : "Start Render"}
          </button>
        </div>

        {/* OUTPUT PANEL */}
        <div className="md:col-span-2 rounded-xl border border-slate-800 bg-slate-950/90 p-6">
          <h2 className="text-xl font-semibold mb-4">Output</h2>

          {output ? (
            <pre className="text-sm text-slate-200 whitespace-pre-wrap">
              {output}
            </pre>
          ) : (
            <p className="text-sm text-slate-500">No output yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}
