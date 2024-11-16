package com.cinema.cinemaProject.exception.screenings;

public class ScreeningNotFoundException extends RuntimeException {
    public ScreeningNotFoundException(Long id) {
        super("Screening with id: "+ id + " not found");
    }
}
