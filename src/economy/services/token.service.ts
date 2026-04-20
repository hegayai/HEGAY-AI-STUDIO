import { prisma } from "../../core/db/client";

export const tokenService = {
  async record(userId: string, amount: number, type: string, metadata?: any) {
    return prisma.tokenTransaction.create({
      data: { userId, amount, type, metadata },
    });
  },

  async history(userId: string) {
    return prisma.tokenTransaction.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },
};
