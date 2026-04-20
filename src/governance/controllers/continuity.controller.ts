import type { Request, Response } from "express";
import { continuityService } from "../services/continuity.service";
import { success } from "../../core/utils/response";

export const continuityController = {
  record: async (req: Request, res: Response) => {
    const { event, details } = req.body;
    const record = await continuityService.record(event, details);
    return res.json(success(record, "Continuity event recorded"));
  },

  history: async (_req: Request, res: Response) => {
    const history = await continuityService.history();
    return res.json(success(history));
  },
};
