import type { Request, Response } from "express";
import { rewardService } from "../services/reward.service";
import { success } from "../../core/utils/response";

export const rewardController = {
  list: async (req: Request, res: Response) => {
    const list = await rewardService.list(req.user.id);
    return res.json(success(list));
  },
};
