"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const commands = [
    { name: "Go to Origin Realm", action: () => router.push("/dashboard") },
    { name: "Go to Aesthetic Realm", action: () => router.push("/aesthetic") },
    { name: "Go to Avatar Realm", action: () => router.push("/avatar") },
    { name: "Go to Mood Realm", action: () => router.push("/mood") },
    { name: "Go to Dream Realm", action: () => router.push("/dream") },
    { name: "Run Origin Ritual", action: () => router.push("/dashboard?run=1") },
  ];

  useEffect(() => {
    function openPalette() {
      setOpen(true);
    }

    document.addEventListener("open-cmd", openPalette);
    return () => document.removeEventListener("open-cmd", openPalette);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filtered = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-start justify-center pt-40 z-50">
      <div className="w-full max-w-xl bg-white/10 border border-white/20 rounded-xl p-4 shadow-xl">
        <input
          autoFocus
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a command…"
          className="w-full p-3 rounded-lg bg-black/30 text-white outline-none mb-4"
        />

        <div className="flex flex-col gap-2 max-h-60 overflow-y-auto">
          {filtered.map((cmd, i) => (
            <button
              key={i}
              onClick={() => {
                cmd.action();
                setOpen(false);
              }}
              className="text-left px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
            >
              {cmd.name}
            </button>
          ))}

          {filtered.length === 0 && (
            <div className="text-white/50 text-center py-4">
              No matching commands
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
