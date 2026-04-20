import React, { useRef } from "react";

export const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div style={{ color: "#FFF" }}>
      <video
        ref={videoRef}
        controls
        style={{
          width: "100%",
          borderRadius: "12px",
          border: "1px solid #333",
        }}
      >
        <source src="" type="video/mp4" />
      </video>
    </div>
  );
};
