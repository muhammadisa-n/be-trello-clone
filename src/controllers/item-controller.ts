import { Request, Response, NextFunction } from "express";
import { ItemService } from "../services/item-service";
import {
  successCreateResponse,
  successDeleteResponse,
  successResponse,
  successUpdateResponse,
} from "../utils/response";
import {
  CreateItemRequest,
  MoveItemRequest,
  UpdateItemRequest,
} from "../dtos/item-dto";

export class ItemController {
  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const response = await ItemService.getOne(Number(req.params.id));
      res
        .status(200)
        .json(successResponse("Berhasil Get Detail Data", 200, response));
    } catch (error) {
      next(error);
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const request: CreateItemRequest = req.body as CreateItemRequest;
      const response = await ItemService.create(request);
      res.status(201).json(successCreateResponse(response));
    } catch (error) {
      next(error);
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      const request: UpdateItemRequest = req.body as UpdateItemRequest;
      const response = await ItemService.update(id, request);
      res.status(200).json(successUpdateResponse(response));
    } catch (error) {
      next(error);
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);
      await ItemService.delete(id);
      res.status(200).json(successDeleteResponse());
    } catch (error) {
      next(error);
    }
  }
  static async move(req: Request, res: Response, next: NextFunction) {
    try {
      const request: MoveItemRequest = req.body as MoveItemRequest;
      const id = Number(req.params.id);
      await ItemService.move(id, request);
      res.status(200).json(successDeleteResponse());
    } catch (error) {
      next(error);
    }
  }
}
