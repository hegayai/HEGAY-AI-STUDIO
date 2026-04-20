"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { useWindowContext } from "./WindowProvider";

type SoundType = "spawn" | "fold" | "ascend" | "align" | "seal";

export default function WindowManager() {
  const { windows, closeWindow, focusWindow, moveWindow, updateWindow } =
    useWindowContext();
  const [draggingId, setDraggingId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeId, setActiveId] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);
  const prevCountRef = useRef<number>(0);

  const getAudioContext = () => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AC =
        (window as any).AudioContext || (window as any).webkitAudioContext;
      if (!AC) return null;
      audioCtxRef.current = new AC();
    }
    return audioCtxRef.current;
  };

  const playTone = (type: SoundType) => {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    let freq = 440;
    let duration = 0.18;

    if (type === "spawn") {
      freq = 520;
      duration = 0.22;
    } else if (type === "fold") {
      freq = 260;
      duration = 0.16;
    } else if (type === "ascend") {
      freq = 640;
      duration = 0.24;
    } else if (type === "align") {
      freq = 420;
      duration = 0.2;
    } else if (type === "seal") {
      freq = 320;
      duration = 0.18;
    }

    osc.frequency.value = freq;
    osc.type = "sine";

    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.18, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + duration + 0.02);
  };

  // Spawn sound when a new window appears
  useEffect(() => {
    if (windows.length > prevCountRef.current) {
      playTone("spawn");
    }
    prevCountRef.current = windows.length;
  }, [windows.length]);

  const startDrag = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const win = windows.find((w) => w.id === id);
    if (!win) return;
    focusWindow(id);
    setActiveId(id);
    setDraggingId(id);
    setDragOffset({
      x: e.clientX - win.x,
      y: e.clientY - win.y,
    });
  };

  useEffect(() => {
    if (!draggingId) return;

    const handleMouseMove = (e: MouseEvent) => {
      moveWindow(draggingId, e.clientX - dragOffset.x, e.clientY - dragOffset.y);
    };

    const handleMouseUp = () => {
      setDraggingId(null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingId, dragOffset, moveWindow]);

  const handleToggleMinimize = (id: string) => {
    const win = windows.find((w) => w.id === id);
    if (!win) return;
    playTone("fold");
    updateWindow(id, { isMinimized: !win.isMinimized, isMaximized: false });
  };

  const handleToggleMaximize = (id: string) => {
    const win = windows.find((w) => w.id === id);
    if (!win) return;

    playTone("ascend");

    if (!win.isMaximized) {
      const paddingX = 32;
      const top = 72;
      const bottom = 40;
      const width = window.innerWidth - paddingX * 2;
      const height = window.innerHeight - top - bottom;

      updateWindow(id, {
        isMaximized: true,
        isMinimized: false,
        x: paddingX,
        y: top,
        width,
        height,
      });
    } else {
      updateWindow(id, {
        isMaximized: false,
        width: 460,
        height: 280,
      });
    }
  };

  const handleAlignRealms = (id: string) => {
    const win = windows.find((w) => w.id === id);
    if (!win) return;

    playTone("align");

    const paddingX = 24;
    const top = 72;
    const halfWidth = window.innerWidth / 2 - paddingX * 1.5;
    const height = window.innerHeight - top - 56;

    const snapLeft = win.x > window.innerWidth / 2;

    updateWindow(id, {
      isMaximized: false,
      isMinimized: false,
      x: snapLeft ? paddingX : window.innerWidth / 2 + paddingX / 2,
      y: top,
      width: halfWidth,
      height,
    });
  };

  const handleSeal = (id: string) => {
    playTone("seal");
    closeWindow(id);
  };

  if (!windows.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80]">
      {windows.map((win) => {
        const isActive = win.id === activeId;
        const isMinimized = win.isMinimized;

        return (
          <div
            key={win.id}
            className={`
              pointer-events-auto absolute rounded-xl overflow-hidden
              border border-white/15 bg-gradient-to-br from-slate-950/95 via-slate-900/90 to-black/95
              shadow-[0_0_40px_rgba(15,23,42,0.9)]
              transition-all duration-300 ease-out
              hover:scale-[1.01] hover:shadow-[0_0_55px_rgba(148,163,253,0.55)]
              ${
                isActive
                  ? "scale-100 opacity-100 shadow-[0_0_60px_rgba(250,204,21,0.55)] ring-1 ring-cosmic-gold/40"
                  : "scale-[0.97] opacity-85"
              }
              animate-[cosmicWindowIn_0.35s_ease-out]
            `}
            style={{
              top: win.y,
              left: win.x,
              width: win.width,
              height: isMinimized ? 44 : win.height,
              zIndex: win.z,
            }}
            onMouseDown={() => {
              focusWindow(win.id);
              setActiveId(win.id);
            }}
          >
            {/* Cosmic animated aura */}
            <div className="pointer-events-none absolute -inset-px rounded-xl bg-[conic-gradient(from_140deg_at_10%_0%,rgba(244,244,245,0.08),rgba(129,140,248,0.45),rgba(236,72,153,0.5),rgba(52,211,153,0.4),rgba(15,23,42,0.9))] opacity-40 animate-[spin_18s_linear_infinite]" />

            {/* Inner shell */}
            <div className="relative h-full flex flex-col bg-black/70 backdrop-blur-2xl">
              {/* Active glow strip */}
              {isActive && (
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cosmic-gold/60 via-fuchsia-400/60 to-emerald-400/60 opacity-80" />
              )}

              {/* Title bar */}
              <div
                className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-gradient-to-r from-black/80 via-slate-900/80 to-black/80 cursor-move"
                onMouseDown={(e) => startDrag(e, win.id)}
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                  <span className="text-xs font-medium text-white/80">
                    {win.title}
                  </span>
                </div>

                {/* Mythic controls */}
                <div className="flex items-center gap-2">
                  {/* Fold */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleMinimize(win.id);
                    }}
                    className="h-5 w-5 rounded-full bg-slate-900/80 border border-white/15 text-[9px] text-white/70 flex items-center justify-center hover:border-emerald-400/60 hover:text-emerald-300 active:scale-95 transition"
                    title="Fold"
                  >
                    ⌄
                  </button>

                  {/* Ascend */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleMaximize(win.id);
                    }}
                    className="h-5 w-5 rounded-full bg-slate-900/80 border border-white/15 text-[9px] text-white/70 flex items-center justify-center hover:border-indigo-400/60 hover:text-indigo-300 active:scale-95 transition"
                    title="Ascend"
                  >
                    △
                  </button>

                  {/* Align Realms */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAlignRealms(win.id);
                    }}
                    className="h-5 w-5 rounded-full bg-slate-900/80 border border-white/15 text-[9px] text-white/70 flex items-center justify-center hover:border-fuchsia-400/60 hover:text-fuchsia-300 active:scale-95 transition"
                    title="Align Realms"
                  >
                    ⟐
                  </button>

                  {/* Seal */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSeal(win.id);
                    }}
                    className="h-5 w-5 rounded-full bg-slate-900/80 border border-white/15 text-[9px] text-white/70 flex items-center justify-center hover:border-rose-400/70 hover:text-rose-300 active:scale-95 transition"
                    title="Seal"
                  >
                    <X size={10} />
                  </button>
                </div>
              </div>

              {/* Content */}
              {!isMinimized && (
                <div className="flex-1 overflow-auto p-4 text-xs md:text-sm text-white/80">
                  {win.content}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
