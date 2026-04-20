"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type UniverseNodeProps = {
  label: string;
  href: string;
  aura: string;
  size?: "lg" | "md" | "sm";
};

export default function UniverseNode({
  label,
  href,
  aura,
  size = "md",
}: UniverseNodeProps) {
  const sizeClasses =
    size === "lg"
      ? "h-32 w-32"
      : size === "sm"
      ? "h-16 w-16"
      : "h-24 w-24";

  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.2 }}
      className="relative"
    >
      <Link href={href}>
        <div
          className={`flex items-center justify-center rounded-full border border-white/15 bg-gradient-to-br ${aura} ${sizeClasses} shadow-2xl backdrop-blur-xl cursor-pointer`}
        >
          <span className="text-[0.7rem] text-slate-50 text-center px-2 leading-tight">
            {label}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
