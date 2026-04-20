import type { Request, Response } from "express";
import { pantheonService } from "../services/pantheon.service";
import { success } from "../../core/utils/response";

export const pantheonController = {
  create: async (req: Request, res: Response) => {
    const { name, role, symbol, metadata } = req.body;
    const entity = await pantheonService.create(name, role, symbol, metadata);
    return res.json(success(entity, "Pantheon entity created"));
  },

  list: async (_req: Request, res: Response) => {
    const list = await pantheonService.list();
    return res.json(success(list));
  },
};
