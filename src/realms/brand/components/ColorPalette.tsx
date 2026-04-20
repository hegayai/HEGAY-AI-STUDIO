import React from "react";

export const ColorPalette = () => {
  const colors = ["#1A4BFF", "#6A00FF", "#D4AF37", "#FF005C"];

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      {colors.map((c) => (
        <div
          key={c}
          style={{
            width: "60px",
            height: "60px",
            background: c,
            borderRadius: "8px",
            border: "1px solid #333",
          }}
        />
      ))}
    </div>
  );
};
