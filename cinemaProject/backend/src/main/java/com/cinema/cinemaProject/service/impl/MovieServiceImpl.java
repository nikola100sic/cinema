package com.cinema.cinemaProject.service.impl;

import com.cinema.cinemaProject.exception.movies.MovieNotFoundException;
import com.cinema.cinemaProject.exception.movies.MoviesListEmpty;
import com.cinema.cinemaProject.model.Genre;
import com.cinema.cinemaProject.model.Movie;
import com.cinema.cinemaProject.repository.GenreRepository;
import com.cinema.cinemaProject.repository.MovieRepository;
import com.cinema.cinemaProject.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;

    private final GenreRepository genreRepository;

    @Override
    public Movie findOne(Long movieId) {
        return movieRepository.findById(movieId)
                .orElseThrow(()-> new MovieNotFoundException(movieId));
    }

    @Override
    public Page<Movie> findAll(String name, int durationFrom, int durationTo, int page) {
        Page<Movie>movies = movieRepository.search(name,durationFrom, durationTo, PageRequest.of(page,5));
        if(movies.isEmpty()){
            throw  new MoviesListEmpty();
        }
        return movies;
    }

    @Override
    public Movie save(Movie movie) {
        List<Long>genreIds = movie.getGenres().stream()
                .map(Genre::getId)
                .toList();
        List<Genre>movieGenres= genreRepository.findAllById(genreIds);
        movie.setGenres(movieGenres);
        return movieRepository.save(movie);
    }

    @Override
    public Movie update(Movie movie, Long movieId) {
        return movieRepository.save(movie);
    }

    @Override
    public Movie delete(Long movieId) {
        Movie movieForDelete = getMovieById(movieId);
        movieRepository.delete(movieForDelete);
        return movieForDelete;
    }

    private Movie getMovieById(Long id){
    return movieRepository.findById(id)
            .orElseThrow(()-> new MovieNotFoundException(id));
    }
}
