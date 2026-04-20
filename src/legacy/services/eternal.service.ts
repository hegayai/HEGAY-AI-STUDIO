import { prisma } from "../../core/db/client";

export const eternalService = {
  async write(category: string, payload: any) {
    return prisma.eternalRecord.create({
      data: { category, payload },
    });
  },

  async list(category?: string) {
    return prisma.eternalRecord.findMany({
      where: category ? { category } : undefined,
      orderBy: { createdAt: "desc" },
    });
  },
};
