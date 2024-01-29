import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.moviesService.getAll();
  }

  @Post()
  createMovie(
    @Body() movieData: CreateMovieDto, // NestJS should ask for the parameter, it cannot automatically know what the parameter is.
  ) {
    return this.moviesService.create(movieData);
  }

  // Just like an ExpressJS if search controller is under /:id, then "search" will be considerd as id
  @Get('/search')
  searchMovie(@Query() searchQuery) {
    console.log(searchQuery);
    return `Searching for movie with title: ${JSON.stringify(searchQuery)}`;
  }

  @Get('/:id') // Same as ExpressJS: app.get('/movies/:id')
  getMovieById(@Param('id') movieId: number) {
    return this.moviesService.getOne(movieId);
  }

  @Delete('/:id')
  deleteMovieById(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  // @Put('/:id') // Put is used to update the entire resource.
  @Patch('/:id') // Patch is used to update only a part of the resource.
  updateMovieById(
    @Param('id') movieId: number,
    @Body() updateData: UpdateMovieDto,
  ) {
    return this.moviesService.update(movieId, updateData);
  }
}
