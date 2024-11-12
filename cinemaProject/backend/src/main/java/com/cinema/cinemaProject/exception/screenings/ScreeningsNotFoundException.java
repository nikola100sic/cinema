package com.cinema.cinemaProject.exception.screenings;

import java.time.LocalDate;

public class ScreeningsNotFoundException extends RuntimeException {
    public ScreeningsNotFoundException(LocalDate date) {
        super("No screenings found for date: " + date);
    }
}
