"use client";

import { useState } from "react";

export default function OriginComponent() {
  const [tab, setTab] = useState<"lore" | "seed" | "timeline">("lore");

  return (
    <div className="w-full p-8 space-y-8">
      <h1 className="text-4xl font-bold">Origin Realm</h1>

      <p className="text-gray-400 max-w-2xl">
        The Origin Realm is where creation begins. Generate lore, seed new
        worlds, and shape timelines that define civilizations across the
        multiverse.
      </p>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-800 pb-2">
        <button
          onClick={() => setTab("lore")}
          className={`px-4 py-2 rounded ${
            tab === "lore" ? "bg-white text-black" : "bg-gray-900 text-gray-400"
          }`}
        >
          Lore Engine
        </button>

        <button
          onClick={() => setTab("seed")}
          className={`px-4 py-2 rounded ${
            tab === "seed" ? "bg-white text-black" : "bg-gray-900 text-gray-400"
          }`}
        >
          World Seed
        </button>

        <button
          onClick={() => setTab("timeline")}
          className={`px-4 py-2 rounded ${
            tab === "timeline"
              ? "bg-white text-black"
              : "bg-gray-900 text-gray-400"
          }`}
        >
          Timeline Engine
        </button>
      </div>

      {/* Panels */}
      <div className="rounded-xl border border-gray-800 p-6 bg-black/20">
        {tab === "lore" && <LorePanel />}
        {tab === "seed" && <SeedPanel />}
        {tab === "timeline" && <TimelinePanel />}
      </div>
    </div>
  );
}

/* ------------------------------
   LORE PANEL
------------------------------ */
function LorePanel() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Lore Engine</h2>
      <p className="text-gray-400">
        Generate mythic narratives, ancestral histories, and foundational
        cosmologies for your worlds.
      </p>

      <textarea
        placeholder="Describe the essence of your world..."
        className="w-full h-40 p-4 bg-black/40 border border-gray-700 rounded-lg text-gray-200"
      />

      <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold">
        Generate Lore
      </button>
    </div>
  );
}

/* ------------------------------
   SEED PANEL
------------------------------ */
function SeedPanel() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">World Seed Generator</h2>
      <p className="text-gray-400">
        Create the foundational seed that defines the physics, culture, and
        emotional resonance of your universe.
      </p>

      <textarea
        placeholder="Enter seed concept..."
        className="w-full h-40 p-4 bg-black/40 border border-gray-700 rounded-lg text-gray-200"
      />

      <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold">
        Generate Seed
      </button>
    </div>
  );
}

/* ------------------------------
   TIMELINE PANEL
------------------------------ */
function TimelinePanel() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Timeline Engine</h2>
      <p className="text-gray-400">
        Construct branching timelines, epochs, and historical arcs that define
        your world's evolution.
      </p>

      <textarea
        placeholder="Describe the timeline event..."
        className="w-full h-40 p-4 bg-black/40 border border-gray-700 rounded-lg text-gray-200"
      />

      <button className="px-6 py-3 bg-white text-black rounded-lg font-semibold">
        Generate Timeline
      </button>
    </div>
  );
}
