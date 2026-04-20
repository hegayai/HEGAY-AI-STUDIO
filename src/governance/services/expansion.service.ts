import { prisma } from "../../core/db/client";

export const expansionService = {
  async registerProtocol(name: string, version: string, metadata?: any) {
    return prisma.expansionProtocol.create({
      data: { name, version, metadata },
    });
  },

  async listProtocols() {
    return prisma.expansionProtocol.findMany();
  },
};
