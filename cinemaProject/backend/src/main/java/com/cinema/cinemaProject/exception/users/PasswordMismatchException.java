package com.cinema.cinemaProject.exception.users;

public class PasswordMismatchException extends RuntimeException {
    public PasswordMismatchException(String password, String repeatedPassword) {
        super("Password " + password+ " and " +repeatedPassword +" do not match!");
    }
}
