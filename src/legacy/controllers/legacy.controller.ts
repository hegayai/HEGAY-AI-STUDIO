import type { Request, Response } from "express";
import { legacyService } from "../services/legacy.service";
import { success } from "../../core/utils/response";

export const legacyController = {
  record: async (req: Request, res: Response) => {
    const { title, description, data } = req.body;
    const entry = await legacyService.record(title, description, data);
    return res.json(success(entry, "Legacy record added"));
  },

  list: async (_req: Request, res: Response) => {
    const list = await legacyService.list();
    return res.json(success(list));
  },
};
