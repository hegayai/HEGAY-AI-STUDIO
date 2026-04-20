"use client";

import { UltraAdaptivePresetPage } from "@/components/UltraAdaptivePresetPage";

export default function TradeWindNetworkPage() {
  const template = `
Economy Name: {{economy_name}}
Core Principle: {{core_principle}}
Primary Commodity: {{primary_commodity}}
Trade Routes: {{trade_routes}}
Transport Method: {{transport_method}}
Merchant Guilds: {{merchant_guilds}}
Currency Type: {{currency_type}}
Value System: {{value_system}}
Seasonal Influence: {{seasonal_influence}}
Risk Factor: {{risk_factor}}
Economic Strength: {{economic_strength}}
Economic Weakness: {{economic_weakness}}
Cultural Impact: {{cultural_impact}}
Governance Relationship: {{governance_relationship}}
Foreign Trade Stance: {{foreign_trade_stance}}
Black Market Element: {{black_market_element}}
Key Innovation: {{key_innovation}}
Mythic Belief: {{mythic_belief}}
Hidden Truth: {{hidden_truth}}
`;

  return (
    <UltraAdaptivePresetPage
      presetId="trade-wind-network"
      title="Trade‑Wind Network"
      subtitle="Ultra Adaptive economic blueprint"
      template={template}
      sections={[
        { name: "Identity" },
        { name: "Flow" },
        { name: "Structure" },
        { name: "Influence" },
        { name: "Shadow" },
      ]}
      fields={[
        // Identity
        { key: "economy_name", label: "Economy Name", defaultValue: "Trade‑Wind Network", section: "Identity" },
        { key: "core_principle", label: "Core Principle", defaultValue: "Movement creates value", section: "Identity" },
        { key: "primary_commodity", label: "Primary Commodity", defaultValue: "Wind‑charged crystals", section: "Identity" },

        // Flow
        { key: "trade_routes", label: "Trade Routes", defaultValue: "Sky‑bridges and dune‑paths", section: "Flow" },
        { key: "transport_method", label: "Transport Method", defaultValue: "Wind skiffs and glider caravans", section: "Flow" },
        { key: "seasonal_influence", label: "Seasonal Influence", defaultValue: "Storm season doubles profits", section: "Flow" },

        // Structure
        { key: "merchant_guilds", label: "Merchant Guilds", defaultValue: "Three major guilds of the wind", section: "Structure" },
        { key: "currency_type", label: "Currency Type", defaultValue: "Crystallized wind tokens", section: "Structure" },
        { key: "value_system", label: "Value System", defaultValue: "Speed, rarity, and resonance", section: "Structure" },
        { key: "key_innovation", label: "Key Innovation", defaultValue: "Wind‑mapping instruments", section: "Structure" },

        // Influence
        { key: "economic_strength", label: "Economic Strength", defaultValue: "Fastest trade network in the region", section: "Influence" },
        { key: "cultural_impact", label: "Cultural Impact", defaultValue: "Trade songs and wind‑chants", section: "Influence" },
        { key: "governance_relationship", label: "Governance Relationship", defaultValue: "Semi‑autonomous under council oversight", section: "Influence" },
        { key: "foreign_trade_stance", label: "Foreign Trade Stance", defaultValue: "Open but selective", section: "Influence" },

        // Shadow
        { key: "risk_factor", label: "Risk Factor", defaultValue: "Storm piracy", section: "Shadow" },
        { key: "black_market_element", label: "Black Market Element", defaultValue: "Illicit wind‑essence trade", section: "Shadow" },
        { key: "economic_weakness", label: "Economic Weakness", defaultValue: "Over‑reliance on wind patterns", section: "Shadow" },
        { key: "mythic_belief", label: "Mythic Belief", defaultValue: "The wind chooses the wealthy", section: "Shadow" },
        { key: "hidden_truth", label: "Hidden Truth", defaultValue: "Guilds manipulate wind forecasts", section: "Shadow" },
      ]}
    />
  );
}
