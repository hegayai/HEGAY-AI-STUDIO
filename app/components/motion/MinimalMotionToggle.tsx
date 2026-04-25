"use client";

import { useMinimalMotion } from "./MinimalMotionProvider";

export default function MinimalMotionToggle() {
  const { minimal, toggleMinimal } = useMinimalMotion();

  return (
    <button
      onClick={toggleMinimal}
      className="px-3 py-1 rounded bg-slate-800 text-white text-xs"
    >
      {minimal ? "Disable Minimal Motion" : "Enable Minimal Motion"}
    </button>
  );
}
