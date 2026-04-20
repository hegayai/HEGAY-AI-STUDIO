"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";

import GlobalSearch from "@/app/components/ui/GlobalSearch";
import NotificationCenter from "@/app/components/ui/NotificationCenter";
import ProfileMenu from "@/app/components/ui/ProfileMenu";

export default function Topbar() {
  const pathname = usePathname();

  const [searchOpen, setSearchOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const titles: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/studio": "Studio",
    "/realms": "Realms",
    "/settings": "Settings",
  };

  const title =
    titles[pathname] ||
    pathname
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase()) ||
    "Hegay OS";

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="sticky top-0 z-40 mb-8 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-6 py-4 backdrop-blur-xl"
      >
        {/* Left: Section Title */}
        <div>
          <h1 className="text-lg font-semibold text-slate-100 tracking-wide">
            {title}
          </h1>
          <p className="text-xs text-purple-200/70 tracking-widest uppercase">
            Creative OS
          </p>
        </div>

        {/* Right: System Cluster */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <button
            onClick={() => setSearchOpen(true)}
            className="rounded-xl border border-white/10 bg-black/20 px-3 py-2 text-slate-200 text-xs flex items-center gap-2 transition hover:bg-purple-500/20 hover:text-purple-200"
          >
            <FiSearch className="h-4 w-4" />
            <span className="hidden sm:inline text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              Search
            </span>
          </button>

          {/* Notifications */}
          <button
            onClick={() => setNotifOpen(true)}
            className="rounded-xl border border-white/10 bg-black/20 p-2 text-slate-200 transition hover:bg-purple-500/20 hover:text-purple-200"
          >
            <FiBell className="h-5 w-5" />
          </button>

          {/* Profile */}
          <button
            onClick={() => setProfileOpen(true)}
            className="rounded-full border border-white/10 bg-black/20 p-2 text-slate-200 transition hover:bg-purple-500/20 hover:text-purple-200"
          >
            <FiUser className="h-5 w-5" />
          </button>
        </div>
      </motion.header>

      {/* OS Layers */}
      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
      <NotificationCenter open={notifOpen} onClose={() => setNotifOpen(false)} />
      <ProfileMenu open={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
}
