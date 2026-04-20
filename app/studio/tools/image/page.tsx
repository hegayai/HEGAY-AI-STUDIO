"use client";

import Link from "next/link";

export default function ImageToolsPage() {
  const tools = [
    {
      title: "Image Generation",
      description:
        "Generate high‑quality images from prompts using multiple AI engines.",
      href: "/studio/tools/image/generate",
    },
    {
      title: "Image Enhance",
      description:
        "Upscale, restore, sharpen, and improve image quality with precision.",
      href: "/studio/tools/image/enhance",
    },
    {
      title: "Image Stylize",
      description:
        "Apply artistic styles, filters, and transformations to images.",
      href: "/studio/tools/image/stylize",
    },
    {
      title: "Image Transform",
      description:
        "Modify composition, lighting, color, and structure using AI.",
      href: "/studio/tools/image/transform",
    },
    {
      title: "Image Variations",
      description:
        "Generate multiple variations of an image while preserving structure.",
      href: "/studio/tools/image/variations",
    },
    {
      title: "Image Masking",
      description:
        "Remove backgrounds, isolate subjects, and apply selective edits.",
      href: "/studio/tools/image/mask",
    },
    {
      title: "Image Mix",
      description:
        "Blend multiple images into a unified composition using AI fusion.",
      href: "/studio/tools/image/mix",
    },
    {
      title: "Image Metadata",
      description:
        "Inspect, edit, and manage metadata for generated or uploaded images.",
      href: "/studio/tools/image/metadata",
    },
    {
      title: "Image Utilities",
      description:
        "Convert formats, compress files, and perform batch operations.",
      href: "/studio/tools/image/utilities",
    },
  ];

  return (
    <div className="w-full p-8 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Image Tools</h1>
        <p className="text-gray-400 max-w-2xl">
          Explore the full suite of image tools available in the Hegay AI
          Studio. Generate, enhance, stylize, transform, and manipulate images
          with precision and creative control.
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
