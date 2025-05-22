import {
  CreateItemRequest,
  UpdateItemRequest,
  ItemResponse,
  toItemDetailResponse,
  toItemResponse,
  MoveItemRequest,
} from "../dtos/item-dto";
import { ResponseError } from "../utils/response-error";
import { ItemValidation } from "../validations/item-validation";
import { Validation } from "../utils/validation";
import { ItemRepository } from "../repositories/item-repository";

export class ItemService {
  static async create(request: CreateItemRequest): Promise<ItemResponse> {
    const data = Validation.validate(ItemValidation.CREATE, request);
    const response = await ItemRepository.create(data);
    return toItemResponse(response);
  }

  static async getOne(id: number): Promise<ItemResponse> {
    const data = await ItemRepository.findById(id);
    if (!data) {
      throw new ResponseError(404, "Data Tidak Ditemukan");
    }
    return toItemDetailResponse(data);
  }
  static async update(
    id: number,
    request: UpdateItemRequest
  ): Promise<ItemResponse> {
    const data = Validation.validate(ItemValidation.UPDATE, request);
    const todo = await ItemRepository.findById(id);
    if (!todo) {
      throw new ResponseError(404, "Data Tidak Ditemukan");
    }
    if (data.name) {
      todo.name = data.name;
    }

    const result = await ItemRepository.update(id, {
      name: data.name ?? todo.name,
    });
    return toItemResponse(result);
  }

  static async delete(id: number) {
    const data = await ItemRepository.findById(id);
    if (!data) {
      throw new ResponseError(404, "Data Tidak Ditemukan");
    }
    await ItemRepository.delete(id);
  }

  static async move(id: number, request: MoveItemRequest) {
    const data = Validation.validate(ItemValidation.MOVE, request);
    const todo = await ItemRepository.findById(id);
    if (!todo) {
      throw new ResponseError(404, "Data Tidak Ditemukan");
    }
    const result = await ItemRepository.move(id, data);
    return toItemResponse(result);
  }
}
