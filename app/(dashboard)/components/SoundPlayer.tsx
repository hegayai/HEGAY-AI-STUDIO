"use client";

type SoundPlayerProps = {
  src: string;
  volume?: number;
};

export default function SoundPlayer({ src, volume = 0.5 }: SoundPlayerProps) {
  function play() {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
  }

  return (
    <button
      onClick={play}
      className="px-3 py-1 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
    >
      Play Sound
    </button>
  );
}
