import {
  CreateTodoRequest,
  UpdateTodoRequest,
  TodoResponse,
  toTodoDetailResponse,
  toTodoResponse,
} from "../dtos/todo-dto";
import { ResponseError } from "../utils/response-error";
import { TodoValidation } from "../validations/todo-validation";
import { Validation } from "../utils/validation";
import { TodoRepository } from "../repositories/todo-repository";

export class TodoService {
  static async create(request: CreateTodoRequest): Promise<TodoResponse> {
    const data = Validation.validate(TodoValidation.CREATE, request);
    const response = await TodoRepository.create(data);
    return toTodoResponse(response);
  }
  static async getAll() {
    const data = await TodoRepository.findMany();
    return data;
  }

  static async getOne(id: number): Promise<TodoResponse> {
    const data = await TodoRepository.findById(id);
    if (!data) {
      throw new ResponseError(404, "Data Tidak Ditemukan");
    }
    return toTodoDetailResponse(data);
  }
  static async update(
    id: number,
    request: UpdateTodoRequest
  ): Promise<TodoResponse> {
    const data = Validation.validate(TodoValidation.UPDATE, request);
    const todo = await TodoRepository.findById(id);
    if (!todo) {
      throw new ResponseError(404, "Data Tidak Ditemukan");
    }
    if (data.name) {
      todo.name = data.name;
    }

    const result = await TodoRepository.update(id, {
      name: data.name ?? todo.name,
    });
    return toTodoResponse(result);
  }

  static async delete(id: number) {
    const data = await TodoRepository.findById(id);
    if (!data) {
      throw new ResponseError(404, "Data Tidak Ditemukan");
    }
    await TodoRepository.delete(id);
  }
}
