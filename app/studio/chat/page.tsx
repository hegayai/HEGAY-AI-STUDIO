"use client";

import { useWindow } from "../components/window-system/useWindow";

function ChatSurface() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-cosmic-gold">
        Chat Console
      </h1>
      <p className="text-sm text-white/60">
        This is your multi‑agent, civilization‑aware chat surface.
      </p>

      <div className="bg-black/40 border border-white/10 rounded-lg p-4 text-xs text-white/60">
        <p>(Chat UI placeholder)</p>
        <p className="mt-1">
          Future: agents, tools, memory, realms, and OS‑level commands.
        </p>
      </div>
    </div>
  );
}

export default function ChatPage() {
  const { openWindow } = useWindow();

  const handleOpenInWindow = () => {
    openWindow({
      title: "Chat Console",
      content: <ChatSurface />,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-cosmic-gold">Chat Console</h1>
          <p className="text-sm text-white/60">
            Talk to your creative civilization and orchestrate agents.
          </p>
        </div>

        <button
          onClick={handleOpenInWindow}
          className="px-4 py-2 rounded-lg bg-cosmic-gold/20 border border-cosmic-gold/40 text-cosmic-gold text-xs font-medium hover:bg-cosmic-gold/30 transition"
        >
          Open in Window
        </button>
      </div>

      <ChatSurface />
    </div>
  );
}
