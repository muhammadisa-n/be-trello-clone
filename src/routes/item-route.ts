import express from "express";
import { asyncHandler } from "../utils/async-handler";
import { authMiddleware } from "../middleware/auth-middleware";

import { ItemController } from "../controllers/item-controller";

export const itemRouter = express.Router();

// Example routes:
itemRouter.get("/api/items/:id", ItemController.getOne);
itemRouter.post("/api/items", ItemController.create);
itemRouter.get("/api/items/:id", ItemController.update);
itemRouter.get("/api/items/:id", ItemController.delete);
itemRouter.get("/api/items/:id/move", ItemController.move);
