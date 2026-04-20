import { CURRENT_USER_SUBSCRIPTION } from "../subscriptionConfig";

const tierColors: Record<string, string> = {
  creator: "bg-gray-700 text-gray-200 border-gray-500",
  pro: "bg-blue-700 text-blue-100 border-blue-400",
  studio: "bg-purple-700 text-purple-100 border-purple-400",
  enterprise: "bg-emerald-700 text-emerald-100 border-emerald-400",
};

const tierLabels: Record<string, string> = {
  creator: "Creator (Free)",
  pro: "Pro",
  studio: "Studio",
  enterprise: "Enterprise",
};

export default function TierBadge() {
  const tier = CURRENT_USER_SUBSCRIPTION.tier;

  return (
    <span
      className={`px-3 py-1 rounded-full text-[11px] border ${tierColors[tier]}`}
    >
      {tierLabels[tier]}
    </span>
  );
}
