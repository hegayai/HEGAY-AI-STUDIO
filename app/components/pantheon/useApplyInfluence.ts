import { PantheonInfluenceRegistry, InfluenceDefinition } from "./InfluenceRegistry";

export function useApplyInfluence(realm: string): InfluenceDefinition {
  const match = PantheonInfluenceRegistry.find((inf) =>
    inf.realms.includes(realm)
  );

  return (
    match || {
      archetype: "Neutral",
      type: "wisdom",
      intensity: 0,
      realms: [],
      color: "",
      glow: false,
      motion: "slow",
    }
  );
}
