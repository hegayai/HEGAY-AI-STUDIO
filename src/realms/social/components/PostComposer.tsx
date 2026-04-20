import React, { useState } from "react";

export const PostComposer = () => {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        background: "#111",
        padding: "16px",
        borderRadius: "12px",
        border: "1px solid #333",
      }}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Share something with your creative universe..."
        style={{
          width: "100%",
          height: "120px",
          background: "#000",
          color: "#FFF",
          border: "1px solid #333",
          borderRadius: "8px",
          padding: "12px",
          fontSize: "16px",
          outline: "none",
        }}
      />

      <button
        style={{
          marginTop: "12px",
          padding: "8px 16px",
          background: "#1A4BFF",
          border: "none",
          borderRadius: "8px",
          color: "#FFF",
          cursor: "pointer",
        }}
      >
        Post
      </button>
    </div>
  );
};
