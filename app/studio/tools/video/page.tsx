"use client";

import Link from "next/link";

export default function VideoToolsPage() {
  const tools = [
    {
      title: "Video Generation",
      description:
        "Generate cinematic video sequences from prompts using advanced AI engines.",
      href: "/studio/tools/video/generate",
    },
    {
      title: "Motion Tools",
      description:
        "Create motion effects, camera moves, and dynamic scene transitions.",
      href: "/studio/tools/video/motion",
    },
    {
      title: "Video Enhance",
      description:
        "Upscale, restore, stabilize, and improve video quality with precision.",
      href: "/studio/tools/video/enhance",
    },
    {
      title: "Video Stylize",
      description:
        "Apply artistic styles, filters, and cinematic looks to your videos.",
      href: "/studio/tools/video/stylize",
    },
    {
      title: "Video Transform",
      description:
        "Modify lighting, color grading, pacing, and structure using AI.",
      href: "/studio/tools/video/transform",
    },
    {
      title: "Video Extensions",
      description:
        "Extend shots, generate new frames, and create seamless transitions.",
      href: "/studio/tools/video/extend",
    },
    {
      title: "Video Variations",
      description:
        "Generate multiple variations of a video while preserving structure.",
      href: "/studio/tools/video/variations",
    },
    {
      title: "Video Masking",
      description:
        "Remove backgrounds, isolate subjects, and apply selective edits.",
      href: "/studio/tools/video/mask",
    },
    {
      title: "Video Utilities",
      description:
        "Convert formats, compress files, extract frames, and batch‑process videos.",
      href: "/studio/tools/video/utilities",
    },
  ];

  return (
    <div className="w-full p-8 space-y-12">
      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl font-bold">Video Tools</h1>
        <p className="text-gray-400 max-w-2xl">
          Explore the full suite of video tools available in the Hegay AI
          Studio. Generate, enhance, stylize, transform, and manipulate video
          with cinematic precision and creative control.
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
