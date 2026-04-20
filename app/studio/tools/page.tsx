"use client";

import Link from "next/link";

export default function ToolsPage() {
  const tools = [
    {
      title: "Origin Tools",
      description:
        "Access lore, seed, and timeline generators for world creation.",
      href: "/studio/tools/origin",
    },
    {
      title: "Image Tools",
      description:
        "Enhance, stylize, transform, and manipulate images with precision.",
      href: "/studio/tools/image",
    },
    {
      title: "Video Tools",
      description:
        "Generate motion, transitions, sequences, and cinematic effects.",
      href: "/studio/tools/video",
    },
    {
      title: "Audio Tools",
      description:
        "Create atmospheres, soundscapes, guided audio, and transformations.",
      href: "/studio/tools/audio",
    },
    {
      title: "Writing Tools",
      description:
        "Generate stories, scripts, dialogue, lore, and narrative structures.",
      href: "/studio/tools/writing",
    },
    {
      title: "World Tools",
      description:
        "Construct civilizations, realms, mythic structures, and world seeds.",
      href: "/studio/tools/world",
    },
    {
      title: "AI Tools",
      description:
        "Prompts, providers, utilities, and system‑level AI operations.",
      href: "/studio/tools/ai",
    },
    {
      title: "Marketplace Tools",
      description:
        "Upload, list, and manage presets, assets, and creative modules.",
      href: "/studio/tools/marketplace",
    },
    {
      title: "Memory Tools",
      description:
        "Inspect, save, and retrieve system memory and knowledge structures.",
      href: "/studio/tools/memory",
    },
    {
      title: "Model Tools",
      description:
        "Train, upload, list, and manage AI models and datasets.",
      href: "/studio/tools/model",
    },
    {
      title: "Universe Tools",
      description:
        "Explore universe structures, seeds, and cosmic system generators.",
      href: "/studio/tools/universe",
    },
    {
      title: "Workflow Tools",
      description:
        "Build, visualize, and execute workflows using the Studio engine.",
      href: "/studio/tools/workflow",
    },
  ];

  return (
    <div className="w-full p-8 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Tools</h1>
        <p className="text-gray-400 max-w-2xl">
          Explore the specialized tools that power the Hegay AI Studio. Each
          tool is designed to enhance creation, transformation, and system‑level
          operations across your creative universe.
        </p>
      </header>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </section>
    </div>
  );
}

/* ------------------------------
   TOOL CARD
------------------------------ */
function ToolCard({
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
