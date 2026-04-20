import { Router } from "express";
import { pantheonController } from "../controllers/pantheon.controller";
import { legacyController } from "../controllers/legacy.controller";
import { eternalController } from "../controllers/eternal.controller";

export const legacyRouter = Router();

// Pantheon
legacyRouter.post("/pantheon", pantheonController.create);
legacyRouter.get("/pantheon", pantheonController.list);

// Legacy Records
legacyRouter.post("/record", legacyController.record);
legacyRouter.get("/records", legacyController.list);

// Eternal Records
legacyRouter.post("/eternal", eternalController.write);
legacyRouter.get("/eternal", eternalController.list);
