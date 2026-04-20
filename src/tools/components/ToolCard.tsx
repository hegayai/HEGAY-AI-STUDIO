import React from "react";

export const ToolCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      style={{
        background: "#111",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #333",
        color: "#FFF",
      }}
    >
      <h3 style={{ marginBottom: "8px" }}>{title}</h3>
      <p style={{ color: "#CCC" }}>{description}</p>
    </div>
  );
};
