import { Router } from "express";
import { authMiddleware } from "../../server/middleware/auth.middleware";

import { creditController } from "../controllers/credit.controller";
import { tokenController } from "../controllers/token.controller";
import { rewardController } from "../controllers/reward.controller";
import { ambassadorController } from "../controllers/ambassador.controller";

import { marketplaceController } from "../controllers/marketplace.controller";
import { subscriptionController } from "../controllers/subscription.controller";
import { revenueController } from "../controllers/revenue.controller";
import { tierController } from "../controllers/tier.controller";

export const economyRouter = Router();

// All economy routes require authentication
economyRouter.use(authMiddleware);

// ---------------------------------------------
// Credits
// ---------------------------------------------
economyRouter.get("/wallet", creditController.wallet);
economyRouter.post("/wallet/add", creditController.add);

// ---------------------------------------------
// Token History
// ---------------------------------------------
economyRouter.get("/tokens", tokenController.history);

// ---------------------------------------------
// Rewards
// ---------------------------------------------
economyRouter.get("/rewards", rewardController.list);

// ---------------------------------------------
// Ambassador System
// ---------------------------------------------
economyRouter.post("/ambassador/register", ambassadorController.register);
economyRouter.get("/ambassador/stats", ambassadorController.stats);

// ---------------------------------------------
// Marketplace
// ---------------------------------------------
economyRouter.post("/marketplace/create", marketplaceController.create);
economyRouter.get("/marketplace", marketplaceController.list);

// ---------------------------------------------
// Subscriptions
// ---------------------------------------------
economyRouter.get("/subscriptions/plans", subscriptionController.plans);
economyRouter.post("/subscriptions/subscribe", subscriptionController.subscribe);

// ---------------------------------------------
// Revenue Sharing
// ---------------------------------------------
economyRouter.get("/revenue", revenueController.history);

// ---------------------------------------------
// Tier Evaluation
// ---------------------------------------------
economyRouter.post("/tiers/evaluate", tierController.evaluate);
