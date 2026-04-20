"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  /* ---------------------------------------------------------
     KEYBOARD SHORTCUT: ⌘P / Ctrl+P
     --------------------------------------------------------- */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const mod = isMac ? e.metaKey : e.ctrlKey;

      if (mod && e.key.toLowerCase() === "p") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9998]
        bg-black/40 backdrop-blur-sm
      "
      onClick={() => setOpen(false)}
    >
      <div
        className="
          absolute top-16 right-6
          w-64 glass-panel rounded-2xl
          shadow-[0_20px_80px_rgba(0,0,0,0.9)]
          p-4
          animate-fade-in
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="
              h-10 w-10 rounded-full
              bg-[linear-gradient(135deg,rgba(255,255,255,0.2),rgba(255,255,255,0.05))]
              flex items-center justify-center
              text-[var(--platinum)]
              text-[14px]
            "
          >
            BI
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] text-[var(--platinum)]">Bola‑Ige Samuel</span>
            <span className="text-[11px] text-[var(--diamond-white)]/50">Creator</span>
          </div>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col gap-1">
          <Link
            href="/profile"
            className="
              px-3 py-2 rounded-xl
              text-[13px]
              text-[var(--platinum)]
              hover:bg-[rgba(255,255,255,0.08)]
              transition
            "
          >
            Profile
          </Link>

          <Link
            href="/account"
            className="
              px-3 py-2 rounded-xl
              text-[13px]
              text-[var(--platinum)]
              hover:bg-[rgba(255,255,255,0.08)]
              transition
            "
          >
            Account
          </Link>

          <Link
            href="/settings"
            className="
              px-3 py-2 rounded-xl
              text-[13px]
              text-[var(--platinum)]
              hover:bg-[rgba(255,255,255,0.08)]
              transition
            "
          >
            Settings
          </Link>

          <Link
            href="/system"
            className="
              px-3 py-2 rounded-xl
              text-[13px]
              text-[var(--platinum)]
              hover:bg-[rgba(255,255,255,0.08)]
              transition
            "
          >
            System Info
          </Link>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-[rgba(255,255,255,0.08)] my-3" />

        {/* LOGOUT */}
        <button
          onClick={() => alert("Logged out")}
          className="
            w-full px-3 py-2 rounded-xl
            text-[13px]
            text-red-300
            hover:bg-red-500/10
            transition
          "
        >
          Logout
        </button>
      </div>
    </div>
  );
}
