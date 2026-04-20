import React from "react";

export const LogoGlyph = ({ size = 32, color = "#F5F5F5" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
    >
      <circle cx="50" cy="50" r="40" />
      <path d="M50 10 L50 90" />
      <path d="M10 50 L90 50" />
    </svg>
  );
};
