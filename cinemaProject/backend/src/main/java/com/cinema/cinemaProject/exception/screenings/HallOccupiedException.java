package com.cinema.cinemaProject.exception.screenings;

import java.time.LocalTime;

public class HallOccupiedException extends RuntimeException {
    public HallOccupiedException(LocalTime startTime, LocalTime endTime) {
        super("The hall is occupied. Existing screening: " + startTime + " - " + endTime);
    }
}
