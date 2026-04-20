"use client";

export default function WarpDistortionLayer({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9995] pointer-events-none overflow-hidden">
      <div className="absolute inset-0 warp-field" />

      <style jsx>{`
        .warp-field {
          background: radial-gradient(
            circle at center,
            rgba(180, 0, 255, 0.15),
            rgba(0, 0, 0, 0.1)
          );
          animation: warpPulse 6s ease-in-out infinite,
            warpShift 12s linear infinite;
          filter: blur(40px);
          opacity: 0.6;
        }

        @keyframes warpPulse {
          0% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 0.4;
          }
        }

        @keyframes warpShift {
          0% {
            transform: translate(-5%, -5%) rotate(0deg);
          }
          50% {
            transform: translate(5%, 5%) rotate(180deg);
          }
          100% {
            transform: translate(-5%, -5%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
