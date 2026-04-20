import React from "react";

export const NodePort = ({
  side,
  label,
}: {
  side: "input" | "output";
  label: string;
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        marginBottom: "6px",
      }}
    >
      {side === "input" && <div style={dot} />}
      <span style={{ color: "#CCC", fontSize: "12px" }}>{label}</span>
      {side === "output" && <div style={dot} />}
    </div>
  );
};

const dot = {
  width: "10px",
  height: "10px",
  background: "#1A4BFF",
  borderRadius: "50%",
};
