export type SubscriptionTier = "creator" | "pro" | "studio" | "enterprise";

export type UserSubscription = {
  tier: SubscriptionTier;
  status: "active" | "past_due" | "canceled";
};

export const CURRENT_USER_SUBSCRIPTION: UserSubscription = {
  // change this while testing: "creator" | "pro" | "studio" | "enterprise"
  tier: "creator",
  status: "active",
};

// Daily free coins for Creator (Free) tier
export const DAILY_FREE_COINS = 10;

export const FREE_LIMITS = {
  imageGenerationsPerDay: 1,
  videoGenerationsPerDay: 1,
  maxImageResolution: "512x512",
  maxVideoLengthSeconds: 2,
  watermark: true,
  allowBackgroundRemover: true,
  allowEnhancer: true,
  allowTextTools: true,
  allowMotion: false,
  allowHD: false,
  allowMusic: false,
  allowVoice: false,
  allowCharacterConsistency: false,
};

export function canUseFeature(tier: SubscriptionTier, feature: string) {
  if (tier === "enterprise") return true;
  if (tier === "studio") return true;

  if (tier === "pro") {
    if (feature === "motion") return false;
    if (feature === "long_video") return false;
    if (feature === "long_music") return false;
    return true;
  }

  // creator (free)
  if (feature === "background_remover") return true;
  if (feature === "enhancer") return true;
  if (feature === "text_tools") return true;
  if (feature === "image_generation") return true;
  if (feature === "video_generation") return true;

  return false;
}
