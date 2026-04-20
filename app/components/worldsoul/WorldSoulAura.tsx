"use client";

import { useEffect, useRef } from "react";

export default function WorldSoulAura() {
  const auraRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const aura = auraRef.current;
    if (!aura) return;

    let frame: number | null = null;
    let t = 0;

    const animate = () => {
      if (document.documentElement.classList.contains("minimal-motion")) {
        aura.style.opacity = "0.25";
        return;
      }

      t += 0.002;

      const pulse = 0.25 + Math.sin(t) * 0.15;
      const blur = 20 + Math.sin(t * 0.5) * 10;

      aura.style.opacity = pulse.toString();
      aura.style.backdropFilter = `blur(${blur}px)`;

      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);

    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className="
        world-soul-aura
        pointer-events-none
        fixed inset-0
        z-[-5]
        opacity-30
        bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_65%)]
      "
    />
  );
}
