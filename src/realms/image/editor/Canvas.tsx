import React from "react";

export const Canvas = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#0A0A0A",
      }}
    >
      {children}
    </div>
  );
};
