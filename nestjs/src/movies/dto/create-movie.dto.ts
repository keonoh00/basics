// DTO stands for Data Transfer Object

import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional() // This decorator means that this property is optional.
  @IsString({ each: true })
  readonly genres: string[];
}
