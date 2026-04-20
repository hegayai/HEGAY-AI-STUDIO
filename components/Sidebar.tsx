"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Ascension Layer", href: "/ascension" },
  { label: "Origin Realm", href: "/realms/origin" },
  { label: "Culture Realm", href: "/realms/culture" },
  { label: "Governance Realm", href: "/realms/governance" },
  { label: "Economy Realm", href: "/realms/economy" },
  { label: "Education Realm", href: "/realms/education" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20, filter: "blur(6px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed left-0 top-0 z-40 h-screen w-[260px] border-r border-white/10 bg-black/40 backdrop-blur-2xl"
    >
      {/* BRAND HEADER */}
      <div className="px-6 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-2xl font-semibold tracking-wide text-white"
        >
          HEGAY AI
        </motion.h1>

        <p className="mt-1 text-sm text-slate-400">
          Creative Civilization OS
        </p>
      </div>

      {/* NAVIGATION */}
      <nav className="mt-6 flex flex-col space-y-1 px-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <motion.div
                whileHover={{ scale: 1.02, x: 4 }}
                transition={{ duration: 0.25 }}
                className={`group flex cursor-pointer items-center rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-white/10 text-white shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {/* Active Glow Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute left-0 h-6 w-1 rounded-r-full bg-gradient-to-b from-amber-400 to-pink-500"
                    transition={{ duration: 0.35, ease: "easeOut" }}
                  />
                )}

                <span className="relative z-10">{item.label}</span>
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* COSMIC FOOTER */}
      <div className="absolute bottom-0 left-0 w-full px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-xs text-slate-500"
        >
          Hegay AI Studio 2.0  
          <br />
          Cosmic‑Minimal OS Layer
        </motion.div>
      </div>
    </motion.aside>
  );
}
