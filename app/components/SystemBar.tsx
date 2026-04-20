"use client";

import { useEffect, useState } from "react";

type SystemFlags = {
  focus: boolean;
  dimmer: boolean;
  idle: boolean;
  presence: boolean;
  minimalMotion: boolean;
};

export default function SystemBar() {
  const [flags, setFlags] = useState<SystemFlags>({
    focus: false,
    dimmer: false,
    idle: false,
    presence: true,
    minimalMotion: false,
  });

  /* ---------------------------------------------------------
     CLASS-BASED STATE SYNC
     --------------------------------------------------------- */
  useEffect(() => {
    const readFlags = () => {
      const root = document.documentElement;
      setFlags({
        focus: root.classList.contains("focus-mode"),
        dimmer: root.classList.contains("screen-dimmed"),
        idle: root.classList.contains("idle-mode"),
        presence: !root.classList.contains("presence-off"),
        minimalMotion: root.classList.contains("minimal-motion"),
      });
    };

    readFlags();
    const observer = new MutationObserver(readFlags);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="
        fixed bottom-10 left-0 right-0 z-[8995]
        h-6
        px-6
        flex items-center justify-between
        text-[10px]
        text-[var(--diamond-white)]/55
        pointer-events-none
      "
    >
      {/* LEFT — MODES */}
      <div className="flex items-center gap-3">
        <ModePill label="Focus" active={flags.focus} />
        <ModePill label="Dimmer" active={flags.dimmer} />
        <ModePill label="Idle" active={flags.idle} />
      </div>

      {/* CENTER — PRESENCE */}
      <div className="flex items-center gap-1">
        <span
          className={`
            h-1.5 w-1.5 rounded-full
            ${flags.presence
              ? "bg-[var(--cosmic-blue)] shadow-[0_0_6px_var(--cosmic-blue)]"
              : "bg-[rgba(255,255,255,0.25)]"
            }
          `}
        />
        <span>{flags.presence ? "Presence: Active" : "Presence: Idle"}</span>
      </div>

      {/* RIGHT — MOTION */}
      <div className="flex items-center gap-2">
        <span
          className={`
            h-1.5 w-1.5 rounded-full
            ${flags.minimalMotion
              ? "bg-[rgba(255,255,255,0.7)]"
              : "bg-[var(--cosmic-blue)]"
            }
          `}
        />
        <span>
          Motion: {flags.minimalMotion ? "Minimal" : "Cinematic"}
        </span>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------
   MODE PILL
   --------------------------------------------------------- */
function ModePill({ label, active }: { label: string; active: boolean }) {
  return (
    <div
      className={`
        px-2.5 py-0.5 rounded-full
        border
        text-[10px]
        ${
          active
            ? "border-[var(--cosmic-blue)] text-[var(--platinum)] bg-[rgba(0,180,255,0.12)]"
            : "border-[rgba(255,255,255,0.12)] text-[var(--diamond-white)]/45 bg-[rgba(0,0,0,0.35)]"
        }
      `}
      style={{
        boxShadow: active
          ? "0 0 10px rgba(0,180,255,0.6)"
          : "0 0 0 rgba(0,0,0,0)",
      }}
    >
      {label}
    </div>
  );
}
