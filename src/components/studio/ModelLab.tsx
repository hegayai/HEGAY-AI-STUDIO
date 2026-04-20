"use client";

import { useState } from "react";

export default function ModelLab() {
  const [modelName, setModelName] = useState("");
  const [dataset, setDataset] = useState<string | null>(null);
  const [training, setTraining] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleDatasetUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setDataset(reader.result as string);
    reader.readAsDataURL(file);
  };

  const trainModel = async () => {
    try {
      setError(null);
      setResult(null);

      if (!modelName.trim()) {
        setError("Please enter a model name.");
        return;
      }

      if (!dataset) {
        setError("Please upload a dataset.");
        return;
      }

      setTraining(true);

      const res = await fetch("/api/model/train", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ modelName, dataset }),
      });

      if (!res.ok) {
        setError("Training failed.");
        setTraining(false);
        return;
      }

      const data = await res.json();
      setResult(data);
      setTraining(false);
    } catch {
      setError("Unexpected error.");
      setTraining(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* Model Name */}
      <div className="cosmic-panel p-6 rounded-xl space-y-4 section-enter">
        <label className="text-sm text-white/70">Model Name</label>
        <input
          type="text"
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white"
          placeholder="Enter model name..."
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
        />
      </div>

      {/* Dataset Upload */}
      <div className="cosmic-panel p-6 rounded-xl space-y-4 section-enter">
        <label className="text-sm text-white/70">Dataset Upload</label>

        {!dataset ? (
          <label className="w-full h-40 border border-dashed border-white/25 rounded-xl flex flex-col items-center justify-center text-white/50 cursor-pointer hover:text-cosmic-gold hover:border-cosmic-gold transition">
            <input type="file" className="hidden" onChange={handleDatasetUpload} />
            <span className="text-sm">+ Upload Dataset</span>
          </label>
        ) : (
          <div className="p-4 rounded-xl bg-black/40 border border-white/15 flex justify-between items-center">
            <span className="text-white/70 text-sm">Dataset uploaded</span>
            <button
              onClick={() => setDataset(null)}
              className="px-2 py-1 text-[11px] bg-black/70 text-white/80 rounded"
            >
              Remove
            </button>
          </div>
        )}

        {error && (
          <div className="text-sm text-red-400 bg-red-900/20 border border-red-500/40 p-3 rounded-lg">
            {error}
          </div>
        )}

        <button
          onClick={trainModel}
          disabled={training}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold disabled:opacity-60"
        >
          {training ? "Training..." : "Train Model"}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div className="cosmic-panel p-6 rounded-xl section-enter">
          <pre className="text-white/70 text-sm whitespace-pre-wrap">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
