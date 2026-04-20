import { prisma } from "../../core/db/client";

export const tierService = {
  async evaluate(userId: string) {
    const earnings = await prisma.revenueShare.aggregate({
      where: { userId },
      _sum: { amount: true },
    });

    const total = earnings._sum.amount ?? 0;

    const tier = await prisma.tier.findFirst({
      where: { minEarnings: { lte: total } },
      orderBy: { minEarnings: "desc" },
    });

    if (!tier) return null;

    return prisma.userTier.upsert({
      where: { userId },
      update: { tierId: tier.id },
      create: { userId, tierId: tier.id },
    });
  },
};
