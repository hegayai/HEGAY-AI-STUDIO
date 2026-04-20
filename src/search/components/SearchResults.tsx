import React from "react";

export const SearchResults = () => {
  const results = ["Image 1", "Audio 1", "Video 1", "Text Document"];

  return (
    <div style={{ marginTop: "24px", color: "#FFF" }}>
      {results.map((r) => (
        <div
          key={r}
          style={{
            padding: "12px",
            background: "#111",
            borderRadius: "8px",
            border: "1px solid #333",
            marginBottom: "12px",
          }}
        >
          {r}
        </div>
      ))}
    </div>
  );
};
