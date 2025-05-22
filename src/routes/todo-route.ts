import express from "express";
import { asyncHandler } from "../utils/async-handler";
import { authMiddleware } from "../middleware/auth-middleware";

import { TodoController } from "../controllers/todo-controller";

export const todoRouter = express.Router();

// Example routes:
todoRouter.get("/api/todos", TodoController.getAll);
todoRouter.get("/api/todos/:id", TodoController.getOne);
todoRouter.post("/api/todos", TodoController.create);
todoRouter.put("/api/todos/:id", TodoController.update);
todoRouter.delete("/api/todos/:id", TodoController.delete);
