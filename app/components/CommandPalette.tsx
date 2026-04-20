"use client";

import { useEffect, useState } from "react";

type Command = {
  name: string;
  action: () => void;
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const commands: Command[] = [
    { name: "Go to Dashboard", action: () => (window.location.href = "/") },
    { name: "Go to Studio", action: () => (window.location.href = "/studio") },
    { name: "Open Command Center", action: () => triggerCommandCenter() },
    { name: "Toggle Focus Mode", action: () => toggleClass("focus-mode") },
    { name: "Toggle Screen Dimmer", action: () => toggleClass("screen-dimmed") },
    { name: "Toggle Minimal Motion", action: () => toggleClass("minimal-motion") },
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
     COMMAND CENTER TRIGGER
     --------------------------------------------------------- */
  const triggerCommandCenter = () => {
    const event = new KeyboardEvent("keydown", {
      key: "c",
      shiftKey: true,
      metaKey: navigator.platform.toUpperCase().includes("MAC"),
      ctrlKey: !navigator.platform.toUpperCase().includes("MAC"),
    });
    window.dispatchEvent(event);
  };

  /* ---------------------------------------------------------
     TOGGLE CLASS HELPERS
     --------------------------------------------------------- */
  const toggleClass = (cls: string) => {
    document.documentElement.classList.toggle(cls);
  };

  /* ---------------------------------------------------------
     FILTERED COMMANDS
     --------------------------------------------------------- */
  const filtered = commands.filter((cmd) =>
    cmd.name.toLowerCase().includes(query.toLowerCase())
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
          placeholder="Type a command…"
          className="
            w-full px-4 py-3 rounded-xl
            bg-[rgba(255,255,255,0.06)]
            text-[var(--platinum)]
            outline-none
            text-[14px]
            mb-4
          "
        />

        {/* COMMAND LIST */}
        <div className="flex flex-col gap-2 max-h-64 overflow-y-auto pr-1">
          {filtered.length === 0 && (
            <div className="text-[12px] text-[var(--diamond-white)]/40 text-center py-4">
              No matching commands
            </div>
          )}

          {filtered.map((cmd, i) => (
            <button
              key={i}
              onClick={() => {
                cmd.action();
                setOpen(false);
              }}
              className="
                w-full text-left px-4 py-2.5 rounded-xl
                bg-[rgba(255,255,255,0.04)]
                hover:bg-[rgba(255,255,255,0.08)]
                transition
                text-[13px]
                text-[var(--platinum)]
              "
            >
              {cmd.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
