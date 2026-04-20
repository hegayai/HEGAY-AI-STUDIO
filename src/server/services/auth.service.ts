import bcrypt from "bcryptjs";
import crypto from "crypto";
import { prisma } from "../../core/db/client";
import { AppError } from "../../core/errors/AppError";

export const authService = {
  async hashPassword(password: string) {
    return bcrypt.hash(password, 12);
  },

  async comparePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  },

  async generateToken() {
    return crypto.randomBytes(32).toString("hex");
  },

  async signup(email: string, password: string, name?: string) {
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) throw new AppError("Email already in use", 400);

    const passwordHash = await this.hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        name,
        profile: { create: {} },
      },
    });

    return user;
  },

  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new AppError("Invalid credentials", 401);

    const valid = await this.comparePassword(password, user.passwordHash);
    if (!valid) throw new AppError("Invalid credentials", 401);

    const token = await this.generateToken();
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24); // 24h

    await prisma.session.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    return { user, token };
  },

  async logout(token: string) {
    await prisma.session.deleteMany({ where: { token } });
  },

  async createApiKey(userId: string, label?: string) {
    const key = crypto.randomBytes(24).toString("hex");

    const apiKey = await prisma.aPIKey.create({
      data: {
        userId,
        key,
        label,
      },
    });

    return apiKey;
  },
};
