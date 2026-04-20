"use client";

import { useRef, useState } from "react";

export default function FloatingWindow({ id, title, children, onClose }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 200, y: 150 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  function startDrag(e) {
    setDragging(true);
    setOffset({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    });
  }

  function stopDrag() {
    setDragging(false);
  }

  function onDrag(e) {
    if (!dragging) return;
    setPos({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  }

  return (
    <div
      onMouseMove={onDrag}
      onMouseUp={stopDrag}
      className="fixed z-50"
      style={{
        left: pos.x,
        top: pos.y,
      }}
    >
      <div
        className="w-[420px] bg-white/10 backdrop-blur border border-white/20 rounded-xl shadow-xl"
      >
        <div
          className="cursor-move px-4 py-2 bg-white/20 rounded-t-xl flex justify-between items-center"
          onMouseDown={startDrag}
        >
          <span className="font-semibold">{title}</span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white"
          >
            ×
          </button>
        </div>

        <div className="p-4 max-h-[400px] overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
