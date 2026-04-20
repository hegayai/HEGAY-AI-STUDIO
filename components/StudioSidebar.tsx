"use client";

import { motion } from "framer-motion";
import { FiHome, FiGrid, FiLayers, FiRadio, FiSettings } from "react-icons/fi";

const navItems = [
  {
    label: "Dashboard",
    icon: <FiHome className="h-4 w-4" />,
  },
  {
    label: "Tools",
    icon: <FiGrid className="h-4 w-4" />,
  },
  {
    label: "Realms",
    icon: <FiLayers className="h-4 w-4" />,
  },
  {
    label: "Broadcast",
    icon: <FiRadio className="h-4 w-4" />,
  },
  {
    label: "Settings",
    icon: <FiSettings className="h-4 w-4" />,
  },
];

export default function StudioSidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-full w-64 flex-col border-r border-white/10 bg-black/30 p-6 backdrop-blur-xl">
      
      {/* Logo / Title */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <h1 className="text-lg font-semibold text-slate-100 tracking-wide">
          Hegay Studio
        </h1>
        <p className="text-xs text-purple-200/70 tracking-widest uppercase">
          Creative OS
        </p>
      </motion.div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2">
        {navItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: index * 0.07 }}
            className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-slate-300 transition hover:bg-purple-500/20 hover:text-purple-200"
          >
            <span className="text-purple-300">{item.icon}</span>
            <span>{item.label}</span>
          </motion.button>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-6">
        <p className="text-[0.65rem] text-slate-500 tracking-wide">
          © Hegay AI Studio
        </p>
      </div>
    </aside>
  );
}
