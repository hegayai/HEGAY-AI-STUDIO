import React from "react";

export const AssetCard = ({ name }: { name: string }) => {
  return (
    <div
      style={{
        background: "#111",
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid #333",
        color: "#FFF",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "120px",
          background: "#222",
          borderRadius: "8px",
          marginBottom: "12px",
        }}
      />
      <p>{name}</p>
    </div>
  );
};
