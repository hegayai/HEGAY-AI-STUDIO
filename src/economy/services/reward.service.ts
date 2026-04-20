import { prisma } from "../../core/db/client";

export const rewardService = {
  async give(userId: string, title: string, details?: string) {
    return prisma.reward.create({
      data: { userId, title, details },
    });
  },

  async list(userId: string) {
    return prisma.reward.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },
};
