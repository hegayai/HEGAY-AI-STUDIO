import React from "react";

export const CosmicContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
};
