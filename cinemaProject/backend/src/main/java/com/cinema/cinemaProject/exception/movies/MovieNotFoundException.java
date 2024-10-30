package com.cinema.cinemaProject.exception.movies;

public class MovieNotFoundException extends RuntimeException {

    public MovieNotFoundException(Long id) {
        super("Movie with id: "+ id + " not found");
    }
}
