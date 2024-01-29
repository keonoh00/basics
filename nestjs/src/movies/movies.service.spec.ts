import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll()', () => {
    let result: Movie[];
    beforeEach(() => {
      result = service.getAll();
    });

    it('should return an array', () => {
      expect(result).toBeInstanceOf(Array);
    });

    it('should return an array of movie', () => {
      result.map((item) => expect(item).toBeInstanceOf(Movie));
    });
  });

  describe('getOne()', () => {
    it('should return a movie', () => {
      const testMovieObj = {
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      };
      service.create(testMovieObj);

      // First element should exist
      const movie = service.getOne(1);

      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
      expect(movie.title).toEqual(testMovieObj.title);
      expect(movie.year).toEqual(testMovieObj.year);
      expect(movie.genres).toEqual(testMovieObj.genres);
    });

    it('should throw an Not Found 404 Error', () => {
      const dummyMovieId = 9999999999;
      try {
        service.getOne(dummyMovieId);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Movie with ID: ${dummyMovieId} not found.`);
      }
    });
  });

  describe('deleteOne()', () => {
    it('should delete a movie', () => {
      const testMovieObj = {
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      };
      service.create(testMovieObj);

      const allMovies = service.getAll().length;
      service.deleteOne(1);
      const afterDelete = service.getAll().length;

      expect(afterDelete).toBeLessThan(allMovies);
    });

    it('should return a 404', () => {
      const dummyMovieId = 999999999;
      try {
        service.deleteOne(dummyMovieId);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Movie with ID: ${dummyMovieId} not found.`);
      }
    });
  });

  describe('create()', () => {
    it('should create a movie', () => {
      const testMovieObj = {
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      };
      const beforeCreate = service.getAll().length;
      service.create(testMovieObj);
      const afterCreate = service.getAll().length;

      expect(afterCreate).toBeGreaterThan(beforeCreate);
    });
  });

  describe('update()', () => {
    it('should update when existing', () => {
      const testMovieObj = {
        title: 'Test Movie',
        genres: ['test'],
        year: 2000,
      };
      service.create(testMovieObj);

      const lengthBeforeUpdate = service.getAll().length;
      const newTitle = '[Edited] New Title of Test Movie';
      service.update(1, { title: newTitle });
      const lengthAfterUpdate = service.getAll().length;
      const updatedMovie = service.getOne(1);

      expect(lengthBeforeUpdate).toEqual(lengthAfterUpdate);
      expect(updatedMovie.id).toEqual(1);
      expect(updatedMovie.title).toEqual(newTitle);
      expect(updatedMovie.year).toEqual(testMovieObj.year);
      expect(updatedMovie.genres).toEqual(testMovieObj.genres);
    });
  });
});
