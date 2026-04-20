import { prisma } from "../../core/db/client";

export const pantheonService = {
  async create(name: string, role: string, symbol?: string, metadata?: any) {
    return prisma.pantheonEntity.create({
      data: { name, role, symbol, metadata },
    });
  },

  async list() {
    return prisma.pantheonEntity.findMany();
  },
};
