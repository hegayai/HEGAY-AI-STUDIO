"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Command = {
  label: string;
  action: () => void;
  group: string;
};

export default function CommandBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  /* ---------------------------------------------------------
     COMMAND REGISTRY
     --------------------------------------------------------- */
  const commands: Command[] = [
    { label: "Go to Dashboard", group: "Navigation", action: () => router.push("/") },
    { label: "Open Studio", group: "Navigation", action: () => router.push("/studio") },
    { label: "Open Realms", group: "Navigation", action: () => router.push("/realms") },
    { label: "Open Timeline", group: "Navigation", action: () => router.push("/timeline") },
    { label: "Open Archive", group: "Navigation", action: () => router.push("/archive") },
    { label: "Open Signals", group: "Navigation", action: () => router.push("/signals") },

    { label: "Toggle Minimal Motion", group: "System", action: () => {
        document.documentElement.classList.toggle("minimal-motion");
      }
    },
  ];

  /* ---------------------------------------------------------
     KEYBOARD SHORTCUTS
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
     FILTERED COMMANDS
     --------------------------------------------------------- */
  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-start justify-center
        pt-32 px-4
        bg-black/40 backdrop-blur-sm
      "
      onClick={() => setOpen(false)}
    >
      <div
        className="
          glass-panel
          w-full max-w-xl
          rounded-2xl
          px-4 py-4
          shadow-[0_40px_120px_rgba(0,0,0,0.9)]
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
            w-full bg-transparent outline-none
            text-[var(--platinum)]
            placeholder-[var(--diamond-white)]/40
            text-sm px-1 pb-2
            border-b border-white/10
          "
        />

        {/* RESULTS */}
        <div className="mt-3 max-h-72 overflow-y-auto pr-1 space-y-4">
          {["Navigation", "System"].map((group) => {
            const groupItems = filtered.filter((cmd) => cmd.group === group);
            if (groupItems.length === 0) return null;

            return (
              <div key={group}>
                <div className="text-[10px] uppercase tracking-wider text-[var(--diamond-white)]/40 mb-1 px-1">
                  {group}
                </div>

                <div className="space-y-1">
                  {groupItems.map((cmd) => (
                    <button
                      key={cmd.label}
                      onClick={() => {
                        cmd.action();
                        setOpen(false);
                      }}
                      className="
                        w-full text-left px-3 py-2 rounded-xl
                        hover:bg-[rgba(255,255,255,0.06)]
                        text-[13px]
                        text-[var(--platinum)]
                        transition diamond-hover
                      "
                    >
                      {cmd.label}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
