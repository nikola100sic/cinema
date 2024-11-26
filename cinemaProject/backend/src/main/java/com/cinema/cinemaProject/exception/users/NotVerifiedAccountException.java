package com.cinema.cinemaProject.exception.users;

public class NotVerifiedAccountException extends RuntimeException {
    public NotVerifiedAccountException(String username) {
        super("Account with  " + username + " username not verified!");
    }
}
