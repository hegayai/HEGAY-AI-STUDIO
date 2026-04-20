import type { Request, Response } from "express";
import { marketplaceService } from "../services/marketplace.service";
import { success } from "../../core/utils/response";

export const marketplaceController = {
  create: async (req: Request, res: Response) => {
    const item = await marketplaceService.create(req.user.id, req.body);
    return res.json(success(item, "Marketplace item created"));
  },

  list: async (_req: Request, res: Response) => {
    const items = await marketplaceService.list();
    return res.json(success(items));
  },
};
