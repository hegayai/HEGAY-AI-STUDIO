import type { Request, Response, NextFunction } from "express";
import { prisma } from "../../core/db/client";
import { AppError } from "../../core/errors/AppError";

export const requireRole = (roleName: string) => {
  return async (req: Request, _res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user) throw new AppError("Unauthorized", 401);

    const roles = await prisma.userRole.findMany({
      where: { userId: user.id },
      include: { role: true },
    });

    const hasRole = roles.some(r => r.role.name === roleName);
    if (!hasRole) throw new AppError("Forbidden", 403);

    next();
  };
};
