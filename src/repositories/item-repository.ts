import { prismaClient } from "../config/database";

export class ItemRepository {
  static async create(data: any) {
    return prismaClient.item.create({ data });
  }

  static async findById(id: number) {
    return prismaClient.item.findUnique({
      where: { id },
    });
  }

  static async update(id: number, data: any) {
    return prismaClient.item.update({
      where: { id },
      data,
    });
  }

  static async delete(id: number) {
    return prismaClient.item.delete({ where: { id } });
  }
  static async move(id: number, data: any) {
    return prismaClient.item.update({
      where: { id },
      data: { todoId: data.targetTodoId },
    });
  }
}
