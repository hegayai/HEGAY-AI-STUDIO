import React from "react";

export const SearchBar = () => {
  return (
    <input
      placeholder="Search your creative universe..."
      style={{
        width: "100%",
        padding: "12px",
        background: "#111",
        color: "#FFF",
        border: "1px solid #333",
        borderRadius: "10px",
        outline: "none",
      }}
    />
  );
};
