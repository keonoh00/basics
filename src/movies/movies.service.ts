import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: string): Movie {
    const foundMovie = this.movies.find((movie) => movie.id === +id);
    if (!foundMovie) {
      throw new NotFoundException(`Movie with ID: ${id} not found.`);
    }
    return foundMovie;
  }

  deleteOne(id: string) {
    this.getOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  create(movieData: Omit<Movie, 'id'>): Movie & { created: boolean } {
    if (
      !movieData.title ||
      !movieData.year ||
      !movieData.genres ||
      movieData.genres.length < 1
    ) {
      throw new BadRequestException(
        'The request should have title, year and genres',
      );
    }
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

  update(movieId: string, updateData: Partial<Movie>): Movie {
    const movie = this.getOne(movieId);
    this.deleteOne(movieId);
    this.movies.push({ ...movie, ...updateData });
    return this.getOne(movieId);
  }
}
