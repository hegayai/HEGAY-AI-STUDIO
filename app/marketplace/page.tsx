"use client";

import { SparklesIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const MARKET_ITEMS = [
  {
    id: "origin-pack",
    name: "Origin Portrait Pack",
    tag: "Identity • Ancestry",
    description: "Premium prompts and presets for mythic ancestry portraits and lineage worlds.",
    price: "$19",
  },
  {
    id: "aesthetic-pack",
    name: "Aesthetic Identity Kit",
    tag: "Vibes • Moodboards",
    description: "Curated styles for softcore, afro‑futuristic, cyber angel, and more.",
    price: "$24",
  },
  {
    id: "avatar-pack",
    name: "Avatar Universe Bundle",
    tag: "Characters • Fun",
    description: "Anime, cosmic, afro‑futuristic, and cinematic avatar templates.",
    price: "$29",
  },
  {
    id: "mood-pack",
    name: "Mood Session Pack",
    tag: "Emotion • Atmosphere",
    description: "Mood‑based presets for visuals, captions, and ambient soundscapes.",
    price: "$15",
  },
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 lg:px-6 lg:py-8">
        {/* Header */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
              Hegay AI Studio
            </p>
            <h1 className="mt-1 text-xl font-semibold text-slate-50">
              Marketplace
            </h1>
            <p className="mt-1 text-xs text-slate-300 sm:text-sm">
              Packs, presets, and expansions for your Origin, Aesthetic, Avatar, Mood, and Dream engines.
            </p>
          </div>
          <button className="inline-flex items-center gap-1 rounded-full border border-cyan-400/70 bg-slate-950/80 px-3 py-1.5 text-[11px] font-semibold text-cyan-100 shadow-lg shadow-cyan-500/30">
            Submit a Pack
            <ArrowRightIcon className="h-3 w-3" />
          </button>
        </header>

        {/* Highlight */}
        <section className="relative overflow-hidden rounded-2xl border border-slate-800/80 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 px-4 py-4 sm:px-6 sm:py-5">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.25),_transparent_55%)] opacity-70" />
          <div className="relative flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
                Featured Drop
              </p>
              <h2 className="mt-1 text-base font-semibold text-slate-50 sm:text-lg">
                Origin + Aesthetic Fusion Pack
              </h2>
              <p className="mt-1 text-xs text-slate-200 sm:text-sm">
                Turn ancestry into full aesthetic identities with one click — portraits, palettes, and story prompts.
              </p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-400 to-fuchsia-500 shadow-lg shadow-cyan-500/40">
              <SparklesIcon className="h-4 w-4 text-slate-950" />
            </div>
          </div>
        </section>

        {/* Items */}
        <section className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Available Packs
          </p>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {MARKET_ITEMS.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-950/80 p-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-slate-50">
                      {item.name}
                    </p>
                    <span className="rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-200">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-[11px] leading-snug text-slate-300">
                    {item.description}
                  </p>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-200">
                  <span className="font-semibold text-cyan-300">{item.price}</span>
                  <button className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 px-2 py-0.5 text-[10px] hover:border-cyan-400/80 hover:text-cyan-100">
                    Add to Studio
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
