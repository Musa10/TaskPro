import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '../../../../generated/prisma';

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async create(data: User) {
    return this.prisma.user.create({ data });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
