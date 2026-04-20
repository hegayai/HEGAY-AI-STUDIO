"use client";

import {
  PhotoIcon,
  VideoCameraIcon,
  MusicalNoteIcon,
  GlobeAltIcon,
  SparklesIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";

export default function MarketplacePage() {
  const items = [
    {
      title: "Image Engine",
      description: "Generate, enhance, stylize, and transform images.",
      href: "/studio/engines/image",
      icon: PhotoIcon,
    },
    {
      title: "Video Engine",
      description: "Create cinematic sequences, motion styles, and transitions.",
      href: "/studio/engines/video",
      icon: VideoCameraIcon,
    },
    {
      title: "Audio Lab",
      description: "Generate music, atmospheres, and vocal synthesis.",
      href: "/studio/engines/audio",
      icon: MusicalNoteIcon,
    },
    {
      title: "Worldbuilder",
      description: "Construct worlds, civilizations, and mythic structures.",
      href: "/studio/engines/worldbuilder",
      icon: GlobeAltIcon,
    },
    {
      title: "Writing Engine",
      description: "Generate stories, scripts, lore, and narrative structures.",
      href: "/studio/engines/writing",
      icon: BookOpenIcon,
    },
    {
      title: "Cosmic Tools",
      description: "Specialized tools for creation, transformation, and design.",
      href: "/studio/tools",
      icon: SparklesIcon,
    },
  ];

  return (
    <div className="w-full p-8 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Marketplace</h1>
        <p className="text-gray-400 max-w-2xl">
          Explore engines, tools, presets, and creative modules that expand the
          Hegay AI Studio universe. Everything you need to build worlds, craft
          media, and shape your creative destiny.
        </p>
      </header>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <MarketplaceCard key={item.title} {...item} />
        ))}
      </section>
    </div>
  );
}

/* ------------------------------
   MARKETPLACE CARD
------------------------------ */
function MarketplaceCard({
  title,
  description,
  href,
  icon: Icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: any;
}) {
  return (
    <a
      href={href}
      className="block p-6 rounded-xl border border-gray-800 bg-black/20 hover:bg-black/30 transition space-y-4"
    >
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-lg bg-gray-900 border border-gray-700">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      <p className="text-gray-400 text-sm">{description}</p>
    </a>
  );
}
