import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

/*
The reason why MoviesController is able to get the data 
from MoviesService is because of Dependency Injection.
-
Dependency Injection is a design pattern that allows us
to inject dependencies into a class.

In this case, NestJS is injecting MoviesService into MoviesController.
So MoviesController can use MoviesService by just declaring it as
a parameter with its type.

This is why MoviesService has @Injectable() decorator.
*/
@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
