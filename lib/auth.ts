// lib/auth.ts (example)
import { PLAN_LIMITS, PlanId } from "@/config/plans";

export async function getCurrentUser(req: Request) {
  // decode JWT / session here
  // return { id, email, planId: "free" | "starter" | "pro" | "creator" | "admin" }
}

export async function getTodayUsage(userId: string) {
  // fetch or create Usage row for today
}

export function canGenerateImage(planId: PlanId, usage: { imagesUsed: number }) {
  const limits = PLAN_LIMITS[planId];
  return usage.imagesUsed < limits.maxImagesPerDay;
}

export function canGenerateVideo(planId: PlanId, usage: { videosUsed: number }) {
  const limits = PLAN_LIMITS[planId];
  return usage.videosUsed < limits.maxVideosPerDay;
}

export function validateVideoDuration(planId: PlanId, requestedSeconds: number) {
  const limits = PLAN_LIMITS[planId];
  return requestedSeconds <= limits.maxVideoSeconds;
}
