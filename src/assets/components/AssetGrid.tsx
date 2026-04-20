import React from "react";
import { AssetCard } from "./AssetCard";

export const AssetGrid = () => {
  const assets = ["Image 1", "Image 2", "Audio 1", "Video 1"];

  return (
    <div
      style={{
        display: "grid",
        gap: "24px",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      }}
    >
      {assets.map((a) => (
        <AssetCard key={a} name={a} />
      ))}
    </div>
  );
};
