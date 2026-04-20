"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";

type ProfileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function ProfileMenu({ open, onClose }: ProfileMenuProps) {
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && open) onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute right-6 top-20 w-64 rounded-2xl border border-white/10 bg-black/80 p-4 shadow-2xl backdrop-blur-xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/20 border border-purple-400/40">
                <FiUser className="h-5 w-5 text-purple-200" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  Bola‑Ige Samuel Solomon
                </p>
                <p className="text-[0.7rem] text-slate-500">
                  Founder, Hegay AI
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-2">
              <Link
                href="/settings"
                onClick={onClose}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10 transition"
              >
                <FiSettings className="h-4 w-4" />
                Settings
              </Link>

              <button
                className="flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-red-300 hover:bg-red-500/20 transition"
              >
                <FiLogOut className="h-4 w-4" />
                Log Out
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
