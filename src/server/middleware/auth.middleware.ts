import type { Request, Response, NextFunction } from "express";
import { prisma } from "../../core/db/client";
import { AppError } from "../../core/errors/AppError";

export const authMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) throw new AppError("Unauthorized", 401);

  const session = await prisma.session.findUnique({ where: { token } });
  if (!session || session.expiresAt < new Date()) {
    throw new AppError("Session expired", 401);
  }

  const user = await prisma.user.findUnique({ where: { id: session.userId } });
  if (!user) throw new AppError("User not found", 404);

  (req as any).user = user;
  next();
};
