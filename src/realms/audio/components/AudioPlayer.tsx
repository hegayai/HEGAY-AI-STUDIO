import React, { useRef, useState } from "react";

export const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) audioRef.current.pause();
    else audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <div style={{ color: "#FFF" }}>
      <audio ref={audioRef} src="" />

      <button
        onClick={toggle}
        style={{
          padding: "8px 16px",
          background: "#1A4BFF",
          border: "none",
          borderRadius: "8px",
          color: "#FFF",
          cursor: "pointer",
        }}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};
