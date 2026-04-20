"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type SearchItem = {
  label: string;
  type: string;
  path: string;
};

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  /* ---------------------------------------------------------
     SEARCH INDEX (expand anytime)
     --------------------------------------------------------- */
  const items: SearchItem[] = [
    { label: "Dashboard", type: "Page", path: "/" },
    { label: "Studio", type: "Page", path: "/studio" },
    { label: "World Builder", type: "Realm", path: "/worldbuilder" },
    { label: "Pantheon", type: "Realm", path: "/pantheon" },
    { label: "Command Center", type: "System", path: "/command" },
  ];

  /* ---------------------------------------------------------
     KEYBOARD SHORTCUT: ⌘K / Ctrl+K
     --------------------------------------------------------- */
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      const mod = isMac ? e.metaKey : e.ctrlKey;

      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  /* ---------------------------------------------------------
     FILTERED RESULTS
     --------------------------------------------------------- */
  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        bg-black/60 backdrop-blur-2xl
        flex items-start justify-center
        pt-32
      "
      onClick={() => setOpen(false)}
    >
      <div
        className="
          glass-panel rounded-3xl
          w-full max-w-xl
          shadow-[0_40px_140px_rgba(0,0,0,1)]
          p-6
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* INPUT */}
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the OS…"
          className="
            w-full px-4 py-3 rounded-xl
            bg-[rgba(255,255,255,0.06)]
            text-[var(--platinum)]
            outline-none
            text-[14px]
            mb-4
          "
        />

        {/* RESULTS */}
        <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
          {filtered.length === 0 && (
            <div className="text-[12px] text-[var(--diamond-white)]/40 text-center py-4">
              No results found
            </div>
          )}

          {filtered.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              onClick={() => setOpen(false)}
              className="
                w-full px-4 py-2.5 rounded-xl
                bg-[rgba(255,255,255,0.04)]
                hover:bg-[rgba(255,255,255,0.08)]
                transition
                text-[13px]
                text-[var(--platinum)]
                flex items-center justify-between
              "
            >
              <div>
                <div>{item.label}</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--diamond-white)]/40">
                  {item.type}
                </div>
              </div>

              <span className="text-[10px] text-[var(--diamond-white)]/30">
                {item.path}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
