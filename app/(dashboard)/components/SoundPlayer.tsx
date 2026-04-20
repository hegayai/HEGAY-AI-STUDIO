"use client";

export default function SoundPlayer({ src, volume = 0.5 }) {
  function play() {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
  }

  return (
    <button
      onClick={play}
      className="hidden"
      aria-hidden="true"
    />
  );
}
