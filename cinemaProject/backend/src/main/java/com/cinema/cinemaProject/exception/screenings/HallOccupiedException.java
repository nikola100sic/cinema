package com.cinema.cinemaProject.exception.screenings;

public class HallOccupiedException extends RuntimeException {
    public HallOccupiedException(String time) {
        super("The hall is occupied at the time: " + time);
    }
}
