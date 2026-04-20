import { Router } from "express";
import { healthRouter } from "./modules/health.route";
import { authRouter } from "./modules/auth.route";
import { governanceRouter } from "../../governance/routes/governance.route";
import { legacyRouter } from "../../legacy/routes/legacy.route";
import { economyRouter } from "../../economy/routes/economy.route";

export const apiRouter = Router();

// Health
apiRouter.use("/health", healthRouter);

// Authentication
apiRouter.use("/auth", authRouter);

// Governance System
apiRouter.use("/governance", governanceRouter);

// Legacy + Pantheon + Eternal Records
apiRouter.use("/legacy", legacyRouter);

// Creator Economy Engine
apiRouter.use("/economy", economyRouter);
