import express from "express";
import { config } from "../core/config";
import { errorHandler } from "../core/middleware/errorHandler";
import { logger } from "../core/logging/logger";
import { apiRouter } from "./routes";

const app = express();

app.use(express.json());

// Attach API routes
app.use("/api", apiRouter);

// Global error handler
app.use(errorHandler);

app.listen(config.port, () => {
  logger.info(`🚀 Hegay AI Studio server running on port ${config.port}`);
});
