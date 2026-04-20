"use client";

import { useEffect } from "react";

export default function HologramParticles() {
  useEffect(() => {
    let frame: number | null = null;

    const spawnParticle = (x: number, y: number) => {
      const particle = document.createElement("div");
      particle.className = "hologram-particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      document.body.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 500);
    };

    const handleMove = (e: MouseEvent) => {
      if (document.documentElement.classList.contains("minimal-motion")) return;

      const x = e.clientX;
      const y = e.clientY;

      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        spawnParticle(x, y);
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}
