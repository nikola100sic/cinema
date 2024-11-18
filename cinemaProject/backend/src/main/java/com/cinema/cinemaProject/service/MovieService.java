package com.cinema.cinemaProject.service;

import com.cinema.cinemaProject.model.Movie;
import com.cinema.cinemaProject.web.dto.MovieWithScreeningsDTO;
import org.springframework.data.domain.Page;

import java.time.LocalDate;
import java.util.List;

public interface MovieService {

    Movie findOne (Long movieId);

    List<Movie>getAll ();

    Page<Movie> findAll (String name, int durationFrom, int durationTo, int page);

    Movie save (Movie movie);

    Movie update (Movie movie, Long movieId);

    Movie delete (Long movieId);

    List<MovieWithScreeningsDTO> getForDateAndGenre (LocalDate date, Long genreId);
}
