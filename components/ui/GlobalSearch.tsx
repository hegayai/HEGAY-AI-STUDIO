"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

type GlobalSearchProps = {
  open: boolean;
  onClose: () => void;
};

const quickLinks = [
  { label: "Go to Dashboard", path: "/dashboard", type: "Page" },
  { label: "Open Studio", path: "/studio", type: "Page" },
  { label: "View Realms", path: "/realms", type: "Page" },
  { label: "Image Realm", path: "/realms/image", type: "Realm" },
  { label: "Dream Realm", path: "/realms/dream", type: "Realm" },
  { label: "Radio Realm", path: "/realms/radio", type: "Realm" },
];

export default function GlobalSearch({ open, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      // ⌘K / Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (!open) return;
      }

      // Escape closes
      if (e.key === "Escape" && open) onClose();
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const filtered = quickLinks.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 backdrop-blur-sm pt-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-xl rounded-2xl border border-white/10 bg-black/80 p-4 shadow-2xl backdrop-blur-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input */}
            <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2">
              <FiSearch className="h-4 w-4 text-slate-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search realms, studio, pages…"
                className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
              />
              <span className="rounded-md bg-white/5 px-2 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">
                ⌘K
              </span>
            </div>

            {/* Results */}
            <div className="mt-3 max-h-72 overflow-y-auto rounded-xl bg-white/3">
              {filtered.length === 0 ? (
                <p className="px-3 py-4 text-xs text-slate-500">
                  No matches. Try another term.
                </p>
              ) : (
                <ul className="divide-y divide-white/5">
                  {filtered.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.path}
                        onClick={onClose}
                        className="flex items-center justify-between px-3 py-2.5 text-sm text-slate-100 hover:bg-white/5 cursor-pointer rounded-lg"
                      >
                        <div>
                          <p>{item.label}</p>
                          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                            {item.type}
                          </p>
                        </div>
                        <span className="text-[0.7rem] text-slate-500">
                          {item.path}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
