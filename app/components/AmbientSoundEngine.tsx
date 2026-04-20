"use client";

import { useEffect, useRef, useState } from "react";

export default function AmbientSoundEngine() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.loop = true;

    if (enabled) {
      audioRef.current
        .play()
        .catch(() => {
          // ignore autoplay block
        });
    } else {
      audioRef.current.pause();
    }
  }, [enabled]);

  return (
    <>
      <audio ref={audioRef} src="/ambient.mp3" />

      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => setEnabled((v) => !v)}
          className="rounded-full border border-white/10 bg-black/70 backdrop-blur-2xl px-4 py-2 text-[11px] text-slate-300 shadow-[0_18px_45px_rgba(0,0,0,0.85)] hover:bg-white/5 transition-all"
        >
          Ambient: {enabled ? "On" : "Off"}
        </button>
      </div>
    </>
  );
}
