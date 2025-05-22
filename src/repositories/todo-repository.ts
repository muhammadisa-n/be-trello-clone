import { prismaClient } from "../config/database";

export class TodoRepository {
  static async create(data: any) {
    return prismaClient.todo.create({ data });
  }

  static async findMany() {
    return prismaClient.todo.findMany({
      select: {
        id: true,
        name: true,
        items: {
          select: {
            id: true,
            name: true,
            todoId: true,
          },
        },
      },
    });
  }

  static async findById(id: number) {
    return prismaClient.todo.findUnique({
      where: { id },
    });
  }

  static async update(id: number, data: any) {
    return prismaClient.todo.update({
      where: { id },
      data,
    });
  }

  static async delete(id: number) {
    return prismaClient.todo.delete({ where: { id } });
  }
}
