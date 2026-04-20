"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const items = [
    { name: "Origin Realm", type: "realm", action: () => router.push("/dashboard") },
    { name: "Aesthetic Realm", type: "realm", action: () => router.push("/aesthetic") },
    { name: "Avatar Realm", type: "realm", action: () => router.push("/avatar") },
    { name: "Mood Realm", type: "realm", action: () => router.push("/mood") },
    { name: "Dream Realm", type: "realm", action: () => router.push("/dream") },
    { name: "Run Origin Ritual", type: "ritual", action: () => router.push("/dashboard?run=1") },
  ];

  useEffect(() => {
    function openSearch() {
      setOpen(true);
    }

    document.addEventListener("open-search", openSearch);
    return () => document.removeEventListener("open-search", openSearch);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filtered = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-40 z-50">
      <div className="w-full max-w-xl bg-white/10 border border-white/20 rounded-xl p-4 shadow-xl">
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search realms, rituals, commands…"
          className="w-full p-3 rounded-lg bg-black/30 text-white outline-none mb-4"
        />

        <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
          {filtered.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                item.action();
                setOpen(false);
              }}
              className="text-left px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            >
              <div className="font-semibold">{item.name}</div>
              <div className="text-xs opacity-60 capitalize">{item.type}</div>
            </button>
          ))}

          {filtered.length === 0 && (
            <div className="text-white/50 text-center py-4">
              No results found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
