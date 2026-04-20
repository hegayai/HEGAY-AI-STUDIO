import type { Request, Response } from "express";
import { expansionService } from "../services/expansion.service";
import { success } from "../../core/utils/response";

export const expansionController = {
  register: async (req: Request, res: Response) => {
    const { name, version, metadata } = req.body;
    const protocol = await expansionService.registerProtocol(name, version, metadata);
    return res.json(success(protocol, "Expansion protocol registered"));
  },

  list: async (_req: Request, res: Response) => {
    const protocols = await expansionService.listProtocols();
    return res.json(success(protocols));
  },
};
