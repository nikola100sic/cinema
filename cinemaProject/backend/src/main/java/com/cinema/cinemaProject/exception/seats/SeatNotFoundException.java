package com.cinema.cinemaProject.exception.seats;

public class SeatNotFoundException extends RuntimeException {
    public SeatNotFoundException(Long id) {
        super("Seat with id: " + id + " not found");
    }
}
