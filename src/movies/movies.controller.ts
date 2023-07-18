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

@Controller('movies')
export class MoviesController {
  @Get()
  getAllMovies() {
    return 'This will return all movies';
  }

  @Post()
  createMovie(@Body() movieData) {
    return `This will create a movie: ${movieData}`;
  }

  // Just like an ExpressJS if search controller is under /:id, then "search" will be considerd as id
  @Get('/search')
  searchMovie(@Query() searchQuery) {
    console.log(searchQuery);
    return `Searching for movie with title: ${JSON.stringify(searchQuery)}`;
  }

  @Get('/:id') // Same as ExpressJS: app.get('/movies/:id')
  getMovieById(
    @Param('id') movieId: string, // NestJS should ask for the parameter, it cannot automatically know what the parameter is.
  ) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Delete('/:id')
  deleteMovieById(@Param('id') movieId: string) {
    return `Deleting movie with id: ${movieId}`;
  }

  // @Put('/:id') // Put is used to update the entire resource.
  @Patch('/:id') // Patch is used to update only a part of the resource.
  updateMovieById(@Param('id') movieId: string, @Body() updateData) {
    return `Updating movie with id: ${movieId}\n${JSON.stringify(updateData)}`;
  }
}
