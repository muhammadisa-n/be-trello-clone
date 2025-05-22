import { Request, Response, NextFunction } from "express";
import { TodoService } from "../services/todo-service";
import {
  successCreateResponse,
  successDeleteResponse,
  successResponse,
  successUpdateResponse,
} from "../utils/response";
import { CreateTodoRequest, UpdateTodoRequest } from "../dtos/todo-dto";

export class TodoController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await TodoService.getAll();
      res
        .status(200)
        .json(successResponse("Berhasil Get All Data", 200, response));
    } catch (error) {
      next(error);
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const response = await TodoService.getOne(id);
      res
        .status(200)
        .json(successResponse("Berhasil Get Detail Data", 200, response));
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateTodoRequest = req.body as CreateTodoRequest;
      const response = await TodoService.create(request);
      res.status(201).json(successCreateResponse(response));
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const request: UpdateTodoRequest = req.body as UpdateTodoRequest;
      const response = await TodoService.update(id, request);
      res.status(200).json(successUpdateResponse(response));
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await TodoService.delete(id);
      res.status(200).json(successDeleteResponse());
    } catch (error) {
      next(error);
    }
  }
}
