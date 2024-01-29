import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    const foundMovie = this.movies.find((movie) => movie.id === id);
    if (!foundMovie) {
      throw new NotFoundException(`Movie with ID: ${id} not found.`);
    }
    return foundMovie;
  }

  deleteOne(id: number) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
  }

  create(movieData: CreateMovieDto): Movie & { created: boolean } {
    const movieId = this.movies.length + 1;
    this.movies.push({
      id: movieId,
      ...movieData,
    });

    return {
      created: true,
      id: movieId,
      ...movieData,
    };
  }

  update(movieId: number, updateData: UpdateMovieDto): Movie {
    const movie = this.getOne(movieId);
    this.deleteOne(movieId);
    this.movies.push({ ...movie, ...updateData });
    return this.getOne(movieId);
  }
}
