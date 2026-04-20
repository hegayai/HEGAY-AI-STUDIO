import type { Request, Response } from "express";
import { revenueService } from "../services/revenue.service";
import { success } from "../../core/utils/response";

export const revenueController = {
  history: async (req: Request, res: Response) => {
    const list = await revenueService.history(req.user.id);
    return res.json(success(list));
  },
};
