export type InfluenceDefinition = {
  archetype: string;
  type: "order" | "chaos" | "wisdom" | "creation" | "memory" | "rhythm";
  intensity: number; // 0–100
  realms: string[];

  // Flattened effect fields
  color?: string;
  glow?: boolean;
  motion?: "slow" | "pulse" | "vibrate";
  sound?: string;
};

export const PantheonInfluenceRegistry: InfluenceDefinition[] = [
  {
    archetype: "Aruwa — Keeper of Memory",
    type: "memory",
    intensity: 80,
    realms: ["Archive Vault", "Origin Codex"],
    color: "text-amber-300",
    glow: true,
    motion: "slow",
  },
  {
    archetype: "N’Kora — Architect of Order",
    type: "order",
    intensity: 65,
    realms: ["System Intelligence", "Mission Control"],
    color: "text-emerald-300",
    motion: "pulse",
  },
  {
    archetype: "Solari — Flame of Creation",
    type: "creation",
    intensity: 90,
    realms: ["Universe Builder", "Culture Realm"],
    color: "text-rose-300",
    glow: true,
    motion: "vibrate",
  },
];
