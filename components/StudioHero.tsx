"use client";

export default function StudioHero() {
  return (
    <div className="w-full py-20 px-8 text-center space-y-6 bg-gradient-to-b from-black to-black/40 rounded-xl border border-gray-800">
      <h1 className="text-5xl font-bold tracking-tight">
        Hegay AI Studio
      </h1>

      <p className="text-gray-400 max-w-2xl mx-auto text-lg">
        Build worlds, craft civilizations, generate media, orchestrate workflows,
        and command your creative universe from a single cosmic‑minimal interface.
      </p>

      <div className="flex justify-center gap-4 pt-4">
        <a
          href="/studio/engines"
          className="px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Explore Engines
        </a>

        <a
          href="/studio/command-center"
          className="px-6 py-3 bg-gray-900 text-gray-200 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
        >
          Command Center
        </a>
      </div>
    </div>
  );
}
