import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../../../generated/prisma';
import { CreateUserDto } from './dto/create-user.dto'

@Injectable()
export class UsersService {
  private prisma = new PrismaClient();

  async create(data: CreateUserDto) {
    return this.prisma.user.create({ data });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
