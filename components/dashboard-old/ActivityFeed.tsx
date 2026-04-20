"use client";

import { motion } from "framer-motion";
import { FiCpu, FiFeather, FiRadio, FiImage } from "react-icons/fi";

const feed = [
  {
    icon: <FiCpu className="h-4 w-4 text-purple-300" />,
    title: "Engine Pulse",
    description: "Core engine synchronized with creative runtime.",
    time: "2 min ago",
  },
  {
    icon: <FiImage className="h-4 w-4 text-purple-300" />,
    title: "Image Realm Update",
    description: "New visual assets generated successfully.",
    time: "12 min ago",
  },
  {
    icon: <FiRadio className="h-4 w-4 text-purple-300" />,
    title: "Broadcast Signal",
    description: "Dream Radio pushed a new ambient layer.",
    time: "27 min ago",
  },
  {
    icon: <FiFeather className="h-4 w-4 text-purple-300" />,
    title: "Creative Sync",
    description: "Narrative engine synced with Studio OS.",
    time: "1 hr ago",
  },
];

export default function ActivityFeed() {
  return (
    <section className="w-full mt-10">
      <h2 className="mb-4 text-lg font-semibold text-slate-100">
        Activity Feed
      </h2>

      <div className="space-y-4">
        {feed.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/30 p-4 shadow-lg backdrop-blur hover:border-purple-400/40 hover:bg-black/40 transition"
          >
            <div className="rounded-xl bg-purple-500/20 p-2">
              {item.icon}
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-100">
                {item.title}
              </h3>
              <p classname="text-xs text-slate-400 mt-1">
                {item.description}
              </p>
            </div>

            <span className="text-[0.65rem] text-slate-500 whitespace-nowrap">
              {item.time}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
