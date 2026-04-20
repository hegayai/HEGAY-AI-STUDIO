import type { Request, Response } from "express";
import { success } from "../../core/utils/response";
import { config } from "../../core/config";

export const healthController = {
  status: (_req: Request, res: Response) => {
    return res.json(
      success({
        status: "ok",
        environment: config.env,
        timestamp: new Date().toISOString(),
      })
    );
  },
};
