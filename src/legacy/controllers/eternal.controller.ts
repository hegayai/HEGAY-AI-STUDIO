import type { Request, Response } from "express";
import { eternalService } from "../services/eternal.service";
import { success } from "../../core/utils/response";

export const eternalController = {
  write: async (req: Request, res: Response) => {
    const { category, payload } = req.body;
    const entry = await eternalService.write(category, payload);
    return res.json(success(entry, "Eternal record written"));
  },

  list: async (req: Request, res: Response) => {
    const { category } = req.query;
    const list = await eternalService.list(category as string);
    return res.json(success(list));
  },
};
