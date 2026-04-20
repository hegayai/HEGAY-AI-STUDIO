"use client";

import { useEffect } from "react";

export default function CosmicCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "cosmic-cursor";
    document.body.appendChild(cursor);

    let x = -100;
    let y = -100;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      cursor.style.transform = `translate3d(${x - 5}px, ${y - 5}px, 0)`;
    };

    const hide = () => {
      cursor.style.opacity = "0";
    };

    const show = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseenter", show);
    window.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseenter", show);
      window.removeEventListener("mouseleave", hide);
      cursor.remove();
    };
  }, []);

  return null;
}
