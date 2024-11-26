package com.cinema.cinemaProject.exception.users;

public class PasswordMismatchException extends RuntimeException {
    public PasswordMismatchException() {
        super("Passwords not match!");
    }
}
