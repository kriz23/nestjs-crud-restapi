import { TaksStatus } from '../task.entity';
import {
  IsIn,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  @IsString()
  description: string;
}

export class UpdatedTaskDto {
  @IsString()
  @IsOptional()
  title?: string;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  @IsIn([TaksStatus.PENDING, TaksStatus.IN_PROGRESS, TaksStatus.DONE])
  status?: TaksStatus;
}
