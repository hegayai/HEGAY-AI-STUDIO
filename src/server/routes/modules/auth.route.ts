import { Router } from "express";
import { authController } from "../../controllers/auth.controller";
import { authMiddleware } from "../../middleware/auth.middleware";

export const authRouter = Router();

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);
authRouter.post("/logout", authMiddleware, authController.logout);
authRouter.post("/apikey", authMiddleware, authController.createApiKey);
