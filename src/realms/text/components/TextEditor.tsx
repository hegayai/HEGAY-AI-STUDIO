import React, { useState } from "react";

export const TextEditor = () => {
  const [value, setValue] = useState("");

  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Write something cosmic..."
      style={{
        width: "100%",
        height: "300px",
        background: "#111",
        color: "#FFF",
        border: "1px solid #333",
        borderRadius: "10px",
        padding: "12px",
        fontSize: "16px",
        outline: "none",
      }}
    />
  );
};
