export default function EngineLockOverlay({ tier }: { tier: string }) {
  return (
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-center p-4 rounded-xl border border-white/10">
      <h3 className="text-cosmic-gold font-bold text-lg mb-2">Locked</h3>
      <p className="text-white/60 text-xs mb-4">
        This engine requires <span className="text-cosmic-gold">{tier}</span> tier or higher.
      </p>
      <button className="px-4 py-2 text-xs font-semibold bg-cosmic-gold text-black rounded-lg hover:bg-white transition">
        Upgrade Subscription
      </button>
    </div>
  );
}
