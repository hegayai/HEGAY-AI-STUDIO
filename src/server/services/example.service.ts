import { prisma } from "../../core/db/client";

export const exampleService = {
  async getExample() {
    return prisma.example.findMany();
  },
};
