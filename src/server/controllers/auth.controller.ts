import type { Request, Response } from "express";
import { authService } from "../services/auth.service";
import { success } from "../../core/utils/response";

export const authController = {
  signup: async (req: Request, res: Response) => {
    const { email, password, name } = req.body;
    const user = await authService.signup(email, password, name);
    return res.json(success(user, "Signup successful"));
  },

  login: async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    return res.json(success(result, "Login successful"));
  },

  logout: async (req: Request, res: Response) => {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (token) await authService.logout(token);
    return res.json(success(null, "Logged out"));
  },

  createApiKey: async (req: Request, res: Response) => {
    const userId = req.user.id;
    const { label } = req.body;
    const apiKey = await authService.createApiKey(userId, label);
    return res.json(success(apiKey, "API key created"));
  },
};
