"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiBell } from "react-icons/fi";

type NotificationCenterProps = {
  open: boolean;
  onClose: () => void;
};

const notifications = [
  {
    title: "Backup Completed",
    message: "Your system backup finished successfully.",
    time: "2 min ago",
  },
  {
    title: "New Realm Activity",
    message: "Dream Realm received new creative events.",
    time: "10 min ago",
  },
  {
    title: "Studio Update",
    message: "New tools added to the Studio environment.",
    time: "1 hour ago",
  },
];

export default function NotificationCenter({
  open,
  onClose,
}: NotificationCenterProps) {
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
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="absolute right-6 top-20 w-80 rounded-2xl border border-white/10 bg-black/80 p-4 shadow-2xl backdrop-blur-xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-100 tracking-wide">
                Notifications
              </h2>
              <FiBell className="h-5 w-5 text-purple-300" />
            </div>

            {/* List */}
            <div className="space-y-3">
              {notifications.map((note, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/5 p-3 hover:bg-white/10 transition"
                >
                  <p className="text-sm font-medium text-slate-100">
                    {note.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{note.message}</p>
                  <p className="text-[0.65rem] text-slate-500 mt-1 uppercase tracking-wide">
                    {note.time}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
