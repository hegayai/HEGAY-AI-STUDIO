import { prisma } from "../../core/db/client";
import { AppError } from "../../core/errors/AppError";

export const cosmicLawService = {
  async setLaw(key: string, value: any, description?: string) {
    return prisma.cosmicLaw.upsert({
      where: { key },
      update: { value, description },
      create: { key, value, description },
    });
  },

  async getLaw(key: string) {
    const law = await prisma.cosmicLaw.findUnique({ where: { key } });
    if (!law) throw new AppError("Cosmic law not found", 404);
    return law;
  },

  async listLaws() {
    return prisma.cosmicLaw.findMany();
  },
};
