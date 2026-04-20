import Link from "next/link";
import { CURRENT_USER_SUBSCRIPTION } from "../subscriptionConfig";
import EngineLockOverlay from "./EngineLockOverlay";

const engines = [
  { name: "AI Video Universe", tier: "studio", href: "/studio/engines/video" },
  { name: "AI Image Forge", tier: "pro", href: "/studio/engines/image" },
  { name: "AI Script Engine", tier: "creator", href: "/studio/engines/script" },
  { name: "AI Voice Studio", tier: "pro", href: "/studio/engines/voice" },
  { name: "AI Music Studio", tier: "studio", href: "/studio/engines/music" },
  { name: "AI Motion Engine", tier: "studio", href: "/studio/engines/motion" },
  { name: "AI Social Suite", tier: "creator", href: "/studio/engines/social" },
  { name: "AI Radio Station", tier: "pro", href: "/studio/engines/radio" },
  { name: "Hegay Chat", tier: "creator", href: "/studio/engines/chat" },
];

function tierRank(tier: string) {
  return tier === "creator"
    ? 1
    : tier === "pro"
    ? 2
    : tier === "studio"
    ? 3
    : 4;
}

export default function EngineGrid() {
  const userTier = CURRENT_USER_SUBSCRIPTION.tier;

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 section-enter">
      {engines.map((engine) => {
        const locked = tierRank(userTier) < tierRank(engine.tier);

        return (
          <div
            key={engine.name}
            className="relative rounded-xl border border-white/10 bg-cosmic-panel/90 p-6 backdrop-blur-md hover:border-cosmic-gold transition"
          >
            <h3 className="text-lg font-bold text-cosmic-gold">{engine.name}</h3>
            <p className="text-white/50 text-xs mt-2">
              {locked ? "Locked" : "Available"}
            </p>

            {!locked && (
              <Link
                href={engine.href}
                className="mt-4 inline-block text-xs text-cosmic-gold hover:underline"
              >
                Enter Engine →
              </Link>
            )}

            {locked && <EngineLockOverlay tier={engine.tier} />}
          </div>
        );
      })}
    </section>
  );
}
