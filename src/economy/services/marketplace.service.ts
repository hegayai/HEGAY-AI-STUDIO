import { prisma } from "../../core/db/client";

export const marketplaceService = {
  async create(userId: string, data: any) {
    return prisma.marketplaceItem.create({
      data: { userId, ...data },
    });
  },

  async list() {
    return prisma.marketplaceItem.findMany({
      orderBy: { createdAt: "desc" },
    });
  },
};
