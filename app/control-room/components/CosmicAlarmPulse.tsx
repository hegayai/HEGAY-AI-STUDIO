"use client";

export default function CosmicAlarmPulse({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none">
      <div className="absolute inset-0 animate-cosmicPulse border-[6px] rounded-xl" />
      <style jsx>{`
        .animate-cosmicPulse {
          border-color: rgba(168, 85, 247, 0.6);
          box-shadow:
            0 0 30px rgba(168, 85, 247, 0.4),
            0 0 60px rgba(168, 85, 247, 0.3),
            0 0 120px rgba(168, 85, 247, 0.2);
          animation: cosmicPulse 2.2s ease-in-out infinite;
        }

        @keyframes cosmicPulse {
          0% {
            opacity: 0.4;
            transform: scale(0.99);
            box-shadow:
              0 0 20px rgba(168, 85, 247, 0.3),
              0 0 40px rgba(168, 85, 247, 0.2),
              0 0 80px rgba(168, 85, 247, 0.1);
          }
          50% {
            opacity: 1;
            transform: scale(1);
            box-shadow:
              0 0 40px rgba(168, 85, 247, 0.6),
              0 0 80px rgba(168, 85, 247, 0.5),
              0 0 140px rgba(168, 85, 247, 0.4);
          }
          100% {
            opacity: 0.4;
            transform: scale(0.99);
            box-shadow:
              0 0 20px rgba(168, 85, 247, 0.3),
              0 0 40px rgba(168, 85, 247, 0.2),
              0 0 80px rgba(168, 85, 247, 0.1);
          }
        }
      `}</style>
    </div>
  );
}
