import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../../../generated/prisma';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectsService {
  private prisma = new PrismaClient();

   async create(createProjectDto: CreateProjectDto, userId: number) {
    return this.prisma.project.create({
      data: {
        ...createProjectDto,
        userId, // Associate with current user
      },
    });
  }
}
