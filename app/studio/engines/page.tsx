"use client";

import Link from "next/link";

export default function EnginesPage() {
  const engines = [
    {
      title: "Image Engine",
      description:
        "Generate, enhance, stylize, and transform images using dozens of specialized tools.",
      href: "/studio/engines/image",
    },
    {
      title: "Video Engine",
      description:
        "Create cinematic sequences, motion styles, transitions, and full video compositions.",
      href: "/studio/engines/video",
    },
    {
      title: "Audio Lab",
      description:
        "Generate music, atmospheres, soundscapes, and vocal synthesis.",
      href: "/studio/engines/audio",
    },
    {
      title: "Writing Engine",
      description:
        "Craft stories, scripts, lore, dialogue, and narrative structures.",
      href: "/studio/engines/writing",
    },
    {
      title: "Worldbuilder",
      description:
        "Construct worlds, civilizations, mythic structures, and cosmic systems.",
      href: "/studio/engines/worldbuilder",
    },
    {
      title: "Dream Engine",
      description:
        "Generate surreal atmospheres, subconscious mappings, and emotional physics.",
      href: "/studio/engines/dream",
    },
    {
      title: "Mythic Engine",
      description:
        "Create archetypes, pantheons, lore systems, and symbolic structures.",
      href: "/studio/engines/mythic",
    },
    {
      title: "3D Engine",
      description:
        "Generate environments, lighting, materials, models, and scene compositions.",
      href: "/studio/engines/three-d",
    },
    {
      title: "Cosmic Tools",
      description:
        "Specialized utilities for creation, transformation, and system‑level operations.",
      href: "/studio/tools",
    },
  ];

  return (
    <div className="w-full p-8 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Engines</h1>
        <p className="text-gray-400 max-w-2xl">
          Explore the engines that power the Hegay AI Studio. Each engine is a
          creative subsystem designed to generate, transform, or orchestrate
          media, worlds, and intelligence.
        </p>
      </header>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {engines.map((engine) => (
          <EngineCard key={engine.title} {...engine} />
        ))}
      </section>
    </div>
  );
}

/* ------------------------------
   ENGINE CARD
------------------------------ */
function EngineCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block p-6 rounded-xl border border-gray-800 bg-black/20 hover:bg-black/30 transition space-y-4"
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </Link>
  );
}
