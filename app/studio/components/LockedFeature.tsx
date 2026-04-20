export default function LockedFeature({ feature }: { feature: string }) {
  return (
    <div className="rounded-xl border border-amber-400/40 bg-black/50 p-4 text-xs text-amber-100 space-y-2">
      <div className="font-semibold text-amber-300">
        This feature is locked.
      </div>
      <p>
        Upgrade your subscription to unlock {feature}.
      </p>
      <button className="mt-1 inline-flex items-center rounded-lg bg-cosmic-gold/90 text-black font-semibold px-3 py-1.5 text-[11px] hover:bg-cosmic-gold transition">
        Upgrade subscription
      </button>
    </div>
  );
}
