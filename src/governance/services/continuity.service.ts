import { prisma } from "../../core/db/client";

export const continuityService = {
  async record(event: string, details?: any) {
    return prisma.continuityRecord.create({
      data: { event, details },
    });
  },

  async history() {
    return prisma.continuityRecord.findMany({
      orderBy: { createdAt: "desc" },
    });
  },
};
