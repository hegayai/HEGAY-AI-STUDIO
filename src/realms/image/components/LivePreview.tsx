import React from "react";

export const LivePreview = () => {
  return (
    <div
      style={{
        background: "#111",
        border: "1px solid #333",
        borderRadius: "10px",
        padding: "16px",
        color: "#FFF",
      }}
    >
      <h3>Live Preview</h3>
      <div
        style={{
          marginTop: "12px",
          width: "100%",
          height: "200px",
          background: "#222",
          borderRadius: "8px",
        }}
      />
    </div>
  );
};
