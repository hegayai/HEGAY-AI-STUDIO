import type { Request, Response } from "express";
import { tokenService } from "../services/token.service";
import { success } from "../../core/utils/response";

export const tokenController = {
  history: async (req: Request, res: Response) => {
    const list = await tokenService.history(req.user.id);
    return res.json(success(list));
  },
};
