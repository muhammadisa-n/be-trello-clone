import { Todo } from "@prisma/client";

export type CreateTodoRequest = {
  name: string;
};

export type UpdateTodoRequest = {
  name?: string;
};

export type TodoDetailResponse = {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
};

export type TodoResponse = {
  id: number;
  name: string;
};

export function toTodoDetailResponse(todo: Todo): TodoDetailResponse {
  return {
    id: todo.id,
    name: todo.name,
    created_at: todo.created_at,
    updated_at: todo.updated_at,
    deleted_at: todo.deleted_at!,
  };
}
export function toTodoResponse(todo: Todo): TodoResponse {
  return {
    id: todo.id,
    name: todo.name,
  };
}
