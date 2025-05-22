import { Item } from "@prisma/client";

export type CreateItemRequest = {
  name: string;
  todoId: number;
};

export type UpdateItemRequest = {
  name: string;
};
export type MoveItemRequest = {
  targetTodoId: number;
};

export type ItemDetailResponse = {
  id: number;
  name: string;
  todoId: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
};

export type ItemResponse = {
  id: number;
  name: string;
  todoId: number;
};

export function toItemDetailResponse(item: Item): ItemDetailResponse {
  return {
    id: item.id,
    name: item.name,
    todoId: item.todoId,
    created_at: item.created_at,
    updated_at: item.updated_at,
    deleted_at: item.deleted_at!,
  };
}
export function toItemResponse(item: Item): ItemResponse {
  return {
    id: item.id,
    name: item.name,
    todoId: item.todoId,
  };
}
