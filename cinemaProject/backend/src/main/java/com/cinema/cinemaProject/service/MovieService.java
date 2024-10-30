package com.cinema.cinemaProject.service;

import com.cinema.cinemaProject.model.Movie;
import org.springframework.data.domain.Page;

import java.util.List;

public interface MovieService {

    Movie findOne (Long movieId);

    Page<Movie> findAll (String name, int durationFrom, int durationTo, int page);

    Movie save (Movie movie);

    Movie update (Movie movie, Long movieId);

    Movie delete (Long movieId);
}
