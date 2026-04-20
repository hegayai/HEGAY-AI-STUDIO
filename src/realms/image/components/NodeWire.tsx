import React from "react";

export const NodeWire = ({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) => {
  return (
    <svg
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        pointerEvents: "none",
      }}
      width="100%"
      height="100%"
    >
      <path
        d={`M ${x1} ${y1} C ${x1 + 80} ${y1}, ${x2 - 80} ${y2}, ${x2} ${y2}`}
        stroke="#1A4BFF"
        strokeWidth="3"
        fill="none"
      />
    </svg>
  );
};
