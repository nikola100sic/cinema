package com.cinema.cinemaProject.exception.movies;

public class MoviesListEmpty extends RuntimeException {

    public MoviesListEmpty() {
        super("Movies list is empty");
    }
}
