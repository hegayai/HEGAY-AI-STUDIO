import { prisma } from "../../core/db/client";

export const creditService = {
  async getWallet(userId: string) {
    return prisma.creditWallet.upsert({
      where: { userId },
      update: {},
      create: { userId },
    });
  },

  async addCredits(userId: string, amount: number) {
    return prisma.creditWallet.update({
      where: { userId },
      data: { balance: { increment: amount } },
    });
  },

  async deductCredits(userId: string, amount: number) {
    return prisma.creditWallet.update({
      where: { userId },
      data: { balance: { decrement: amount } },
    });
  },
};
