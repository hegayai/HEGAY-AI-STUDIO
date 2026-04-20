import type { Request, Response } from "express";
import { ambassadorService } from "../services/ambassador.service";
import { success } from "../../core/utils/response";

export const ambassadorController = {
  register: async (req: Request, res: Response) => {
    const entry = await ambassadorService.register(req.user.id);
    return res.json(success(entry, "Ambassador registered"));
  },

  stats: async (req: Request, res: Response) => {
    const stats = await ambassadorService.stats(req.user.id);
    return res.json(success(stats));
  },
};
