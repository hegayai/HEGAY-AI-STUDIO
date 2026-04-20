import { Router } from "express";
import { cosmicLawController } from "../controllers/cosmicLaw.controller";
import { expansionController } from "../controllers/expansion.controller";
import { continuityController } from "../controllers/continuity.controller";

export const governanceRouter = Router();

// Cosmic Law
governanceRouter.post("/law", cosmicLawController.set);
governanceRouter.get("/law/:key", cosmicLawController.get);
governanceRouter.get("/laws", cosmicLawController.list);

// Expansion Protocols
governanceRouter.post("/expansion", expansionController.register);
governanceRouter.get("/expansions", expansionController.list);

// Continuity
governanceRouter.post("/continuity", continuityController.record);
governanceRouter.get("/continuity/history", continuityController.history);
