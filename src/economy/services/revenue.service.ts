import { prisma } from "../../core/db/client";

export const revenueService = {
  async record(userId: string, amount: number, source: string, metadata?: any) {
    return prisma.revenueShare.create({
      data: { userId, amount, source, metadata },
    });
  },

  async history(userId: string) {
    return prisma.revenueShare.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },
};
