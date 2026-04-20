import { prisma } from "../../core/db/client";
import crypto from "crypto";

export const ambassadorService = {
  async register(userId: string) {
    const code = crypto.randomBytes(4).toString("hex").toUpperCase();

    return prisma.ambassador.upsert({
      where: { userId },
      update: {},
      create: { userId, code },
    });
  },

  async recordReferral(code: string) {
    return prisma.ambassador.update({
      where: { code },
      data: { referrals: { increment: 1 }, earnings: { increment: 10 } },
    });
  },

  async stats(userId: string) {
    return prisma.ambassador.findUnique({ where: { userId } });
  },
};
