"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

const MODELS = [
  {
    id: "origin",
    name: "Origin Model",
    tag: "Ancestry • Lineage • Myth",
    description: "Identity, ancestry, and mythic lineage generation.",
  },
  {
    id: "aesthetic",
    name: "Aesthetic Engine",
    tag: "Vibes • Aesthetics",
    description: "Full aesthetic identities and moodboards.",
  },
  {
    id: "avatar",
    name: "Avatar Universe",
    tag: "Characters • Universes",
    description: "Transform users into characters across universes.",
  },
  {
    id: "mood",
    name: "Mood Model",
    tag: "Emotion • Atmosphere",
    description: "Generate content based on emotional state.",
  },
  {
    id: "dream",
    name: "Dream Model",
    tag: "Surreal • Subconscious",
    description: "Turn dreams into visuals, stories, and sound.",
  },
];

export default function ModelsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 lg:px-6 lg:py-8">
        {/* Header */}
        <header className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Hegay AI Studio
            </p>
            <h1 className="mt-1 text-xl font-semibold text-slate-50">
              Model Suite
            </h1>
            <p className="mt-1 text-xs text-slate-300 sm:text-sm">
              The five engines of your creative civilization — Origin, Aesthetic, Avatar, Mood, and Dream.
            </p>
          </div>
        </header>

        {/* Models */}
        <section className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Engines
          </p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {MODELS.map((model) => (
              <div
                key={model.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3"
              >
                <div>
                  <p className="text-xs font-semibold text-slate-50">
                    {model.name}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">{model.tag}</p>
                  <p className="mt-2 text-[11px] leading-snug text-slate-300">
                    {model.description}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-200">
                  <span className="inline-flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Online
                  </span>
                  <button className="inline-flex items-center gap-1 text-cyan-300 hover:text-cyan-100">
                    Open Model
                    <ArrowRightIcon className="h-3 w-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
