// create-user.dto.ts
import { IsString } from 'class-validator';

export class CreateProjectDto {

  @IsString()
  name: string;

}