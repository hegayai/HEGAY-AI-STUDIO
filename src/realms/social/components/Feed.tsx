import React from "react";

export const Feed = () => {
  const posts = [
    { id: 1, text: "Welcome to the Social Realm." },
    { id: 2, text: "Your creative civilization is expanding." },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {posts.map((p) => (
        <div
          key={p.id}
          style={{
            background: "#111",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #333",
            color: "#FFF",
          }}
        >
          {p.text}
        </div>
      ))}
    </div>
  );
};
