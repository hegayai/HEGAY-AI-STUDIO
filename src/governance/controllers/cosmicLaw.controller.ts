import type { Request, Response } from "express";
import { cosmicLawService } from "../services/cosmicLaw.service";
import { success } from "../../core/utils/response";

export const cosmicLawController = {
  set: async (req: Request, res: Response) => {
    const { key, value, description } = req.body;
    const law = await cosmicLawService.setLaw(key, value, description);
    return res.json(success(law, "Cosmic law updated"));
  },

  get: async (req: Request, res: Response) => {
    const { key } = req.params;
    const law = await cosmicLawService.getLaw(key);
    return res.json(success(law));
  },

  list: async (_req: Request, res: Response) => {
    const laws = await cosmicLawService.listLaws();
    return res.json(success(laws));
  },
};
