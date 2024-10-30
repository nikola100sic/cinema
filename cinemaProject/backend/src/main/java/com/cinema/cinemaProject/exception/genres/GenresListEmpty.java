package com.cinema.cinemaProject.exception.genres;

public class GenresListEmpty extends RuntimeException {

    public GenresListEmpty() {
        super("Genres list is empty");
    }
}
