"use client";

import { useState, useEffect } from "react";

export default function Marketplace() {
  const [assets, setAssets] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);
  const [uploadName, setUploadName] = useState("");
  const [uploadFile, setUploadFile] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadAssets = async () => {
    try {
      setError(null);
      const res = await fetch("/api/marketplace/list");
      const data = await res.json();
      setAssets(data?.assets || []);
    } catch {
      setError("Failed to load marketplace assets.");
    }
  };

  useEffect(() => {
    loadAssets();
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setUploadFile(reader.result as string);
    reader.readAsDataURL(file);
  };

  const uploadAsset = async () => {
    try {
      setError(null);

      if (!uploadName.trim()) {
        setError("Asset name is required.");
        return;
      }

      if (!uploadFile) {
        setError("Please upload a file.");
        return;
      }

      setLoading(true);

      const res = await fetch("/api/marketplace/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: uploadName,
          file: uploadFile,
        }),
      });

      const data = await res.json();
      setLoading(false);

      await loadAssets();
      setUploadName("");
      setUploadFile(null);
    } catch {
      setError("Upload failed.");
      setLoading(false);
    }
  };

  return (
    <div className="space-y-10">

      {/* UPLOAD SECTION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Upload Asset</h2>

        <input
          type="text"
          placeholder="Asset Name"
          className="w-full p-4 rounded-xl bg-black/40 border border-white/15 text-white"
          value={uploadName}
          onChange={(e) => setUploadName(e.target.value)}
        />

        {!uploadFile ? (
          <label className="w-full h-40 border border-dashed border-white/25 rounded-xl flex flex-col items-center justify-center text-white/50 cursor-pointer hover:border-cosmic-gold hover:text-cosmic-gold transition">
            <input
              type="file"
              className="hidden"
              onChange={handleUpload}
            />
            <span className="text-sm">+ Upload File</span>
          </label>
        ) : (
          <div className="w-full p-4 rounded-xl border border-white/15 bg-black/60 flex justify-between items-center">
            <span className="text-white/80 text-sm">File uploaded</span>
            <button
              onClick={() => setUploadFile(null)}
              className="px-2 py-1 text-[11px] rounded bg-black/70 text-white/80 hover:bg-black"
            >
              Remove
            </button>
          </div>
        )}

        <button
          onClick={uploadAsset}
          disabled={loading}
          className="w-full py-3 rounded-xl bg-cosmic-gold text-black font-semibold"
        >
          {loading ? "Uploading..." : "Upload Asset"}
        </button>
      </section>

      {/* ASSET GRID */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-cosmic-gold">Marketplace Assets</h2>

        {error && (
          <div className="text-red-400 text-sm bg-red-900/20 border border-red-500/40 p-4 rounded-xl">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {assets.map((asset) => (
            <div
              key={asset.id}
              onClick={() => setSelected(asset)}
              className="p-4 rounded-xl bg-black/40 border border-white/15 cursor-pointer hover:border-cosmic-gold transition"
            >
              <h3 className="text-lg font-semibold text-white">{asset.name}</h3>
              <p className="text-white/50 text-sm mt-1">{asset.type}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ASSET DETAIL */}
      {selected && (
        <section className="space-y-4 p-6 rounded-xl bg-black/40 border border-white/15">
          <h2 className="text-2xl font-semibold text-cosmic-gold">
            {selected.name}
          </h2>

          <p className="text-white/60 text-sm">{selected.description}</p>

          <button
            onClick={() => setSelected(null)}
            className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
          >
            Close
          </button>
        </section>
      )}
    </div>
  );
}
