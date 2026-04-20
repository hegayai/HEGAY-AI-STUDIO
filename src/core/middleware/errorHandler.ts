import type { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { logger } from "../logging/logger";

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof AppError) {
    logger.error("AppError:", err.message, err.details);
    return res.status(err.statusCode).json({
      success: false,
      error: err.message,
      details: err.details,
    });
  }

  logger.error("Unknown error:", err);
  return res.status(500).json({
    success: false,
    error: "Internal Server Error",
  });
};
