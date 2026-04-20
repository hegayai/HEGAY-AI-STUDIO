import Link from "next/link";

const engines = [
  {
    name: "Image Engine",
    description: "Generate concept art, scenes, and visual ideas.",
    href: "/studio/images",
  },
  {
    name: "Video Engine",
    description: "Generate short cinematic video clips.",
    href: "/studio/videos",
  },
  {
    name: "Gallery",
    description: "View all generated images and videos.",
    href: "/studio/gallery",
  },
  // Add other engines here...
];

export default function StudioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {engines.map((engine) => (
        <Link
          key={engine.name}
          href={engine.href}
          className="glass-panel p-6 rounded-2xl hover:bg-white/10 transition border border-white/10"
        >
          <h2 className="text-xl font-semibold">{engine.name}</h2>
          <p className="text-white/60 mt-2">{engine.description}</p>
        </Link>
      ))}
    </div>
  );
}
