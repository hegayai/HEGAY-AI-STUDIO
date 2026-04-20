"use client";

export default function ContainmentOverlay({ active }: { active: boolean }) {
  return (
    <div
      className={`fixed inset-0 z-[9999] pointer-events-none transition-opacity duration-700 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Dark cosmic veil */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

      {/* Aurora energy waves */}
      <div className="absolute inset-0 overflow-hidden opacity-40 mix-blend-screen">
        <div className="absolute -inset-[20%] bg-gradient-to-r from-purple-700 via-fuchsia-500 to-indigo-600 animate-[aurora_12s_linear_infinite]" />
      </div>

      {/* Shield lattice grid */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="shieldGrid"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="#a855f7"
                strokeWidth="0.4"
                strokeOpacity="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#shieldGrid)" />
        </svg>
      </div>

      {/* Pulsing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 w-96 h-96 rounded-full border-4 border-purple-500/40 animate-ping" />
          <div className="absolute inset-0 w-72 h-72 rounded-full border-4 border-purple-400/30 animate-pulse" />
          <div className="absolute inset-0 w-52 h-52 rounded-full border-4 border-purple-300/20 animate-[pulse2_3s_ease_infinite]" />
        </div>
      </div>

      {/* Glow bloom */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full" />
      </div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center animate-[fadeInUp_1s_ease]">
          <h1 className="text-5xl font-bold text-purple-300 tracking-widest drop-shadow-lg mb-4">
            CONTAINMENT MODE
          </h1>
          <p className="text-gray-300 text-lg tracking-wide">
            Visual shield active — system in protected state
          </p>
        </div>
      </div>

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes aurora {
          0% {
            transform: translateX(-20%) translateY(-10%) rotate(0deg);
          }
          50% {
            transform: translateX(10%) translateY(10%) rotate(180deg);
          }
          100% {
            transform: translateX(-20%) translateY(-10%) rotate(360deg);
          }
        }

        @keyframes pulse2 {
          0% {
            transform: scale(0.9);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
          100% {
            transform: scale(0.9);
            opacity: 0.4;
          }
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
