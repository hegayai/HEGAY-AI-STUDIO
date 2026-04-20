"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const tools = [
  { name: "Video", path: "/studio/video" },
  { name: "Music", path: "/studio/music" },
  { name: "Writer", path: "/studio/writer" },
  { name: "Subtitles", path: "/studio/subtitles" },
  { name: "Voice", path: "/studio/voice" },
  { name: "Characters", path: "/studio/characters" },
  { name: "Worlds", path: "/studio/worlds" },
  { name: "Brand", path: "/studio/brand" },
  { name: "Ads", path: "/studio/ads" },
  { name: "Tools", path: "/studio/tools" },
  { name: "Images", path: "/studio/images" },
  { name: "Story", path: "/studio/story" },
  { name: "Pipeline", path: "/studio/pipeline" },
  { name: "Universe", path: "/studio/universe" },
  { name: "Passport", path: "/studio/passport" },
];

export default function StudioGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {tools.map((tool, index) => (
        <motion.div
          key={tool.name}
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.5 }}
          whileHover={{
            scale: 1.04,
            rotateX: 4,
            rotateY: -4,
            transition: { duration: 0.25 },
          }}
          className="transform-gpu"
        >
          <Link
            href={tool.path}
            className="
              block p-6 rounded-2xl glass-panel
              transition-all duration-300
              hover:shadow-[0_0_40px_rgba(74,107,255,0.35)]
              hover:border-white/20
              hover:bg-white/10
            "
          >
            <h3 className="text-lg font-medium text-white tracking-wide drop-shadow">
              {tool.name}
            </h3>

            <div className="mt-3 h-[2px] w-10 bg-gradient-to-r from-[#4A6BFF] to-[#6B4AFF] rounded-full opacity-60 group-hover:opacity-100 transition-all" />
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
