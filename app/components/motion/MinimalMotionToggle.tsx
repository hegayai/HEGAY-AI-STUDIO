"use client";

import { useMinimalMotion } from "./MinimalMotionProvider";

export default function MinimalMotionToggle() {
  const { minimal, toggleMinimal } = useMinimalMotion();

  return (
    <button
      onClick={toggleMinimal}
      className="fixed bottom-4 right-4 z-[9999] px-4 py-2 rounded-lg bg-black/70 border border-white/10 text-[11px] text-slate-300 backdrop-blur-xl hover:bg-white/5 transition-all"
    >
      Motion: {minimal ? "Minimal" : "Full"}
    </button>
  );
}
