import type { Request, Response } from "express";
import { creditService } from "../services/credit.service";
import { success } from "../../core/utils/response";

export const creditController = {
  wallet: async (req: Request, res: Response) => {
    const wallet = await creditService.getWallet(req.user.id);
    return res.json(success(wallet));
  },

  add: async (req: Request, res: Response) => {
    const { amount } = req.body;
    const wallet = await creditService.addCredits(req.user.id, amount);
    return res.json(success(wallet, "Credits added"));
  },
};
