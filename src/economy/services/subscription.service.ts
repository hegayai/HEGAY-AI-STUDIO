import { prisma } from "../../core/db/client";

export const subscriptionService = {
  async subscribe(userId: string, planId: string, expiresAt: Date) {
    return prisma.userSubscription.create({
      data: { userId, planId, expiresAt },
    });
  },

  async plans() {
    return prisma.subscriptionPlan.findMany();
  },
};
