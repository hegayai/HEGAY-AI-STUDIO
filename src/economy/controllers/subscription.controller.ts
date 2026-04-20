import type { Request, Response } from "express";
import { subscriptionService } from "../services/subscription.service";
import { success } from "../../core/utils/response";

export const subscriptionController = {
  plans: async (_req: Request, res: Response) => {
    const plans = await subscriptionService.plans();
    return res.json(success(plans));
  },

  subscribe: async (req: Request, res: Response) => {
    const { planId, expiresAt } = req.body;
    const sub = await subscriptionService.subscribe(req.user.id, planId, new Date(expiresAt));
    return res.json(success(sub, "Subscription activated"));
  },
};
