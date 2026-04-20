import { prisma } from "../../core/db/client";

export const legacyService = {
  async record(title: string, description?: string, data?: any) {
    return prisma.legacyRecord.create({
      data: { title, description, data },
    });
  },

  async list() {
    return prisma.legacyRecord.findMany({
      orderBy: { createdAt: "desc" },
    });
  },
};
