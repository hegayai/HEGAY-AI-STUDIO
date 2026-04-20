import type { Request, Response } from "express";
import { tierService } from "../services/tier.service";
import { success } from "../../core/utils/response";

export const tierController = {
  evaluate: async (req: Request, res: Response) => {
    const tier = await tierService.evaluate(req.user.id);
    return res.json(success(tier, "Tier evaluated"));
  },
};
