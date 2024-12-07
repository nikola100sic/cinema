package com.cinema.cinemaProject.exception;

import com.cinema.cinemaProject.exception.genres.GenreNotFoundException;
import com.cinema.cinemaProject.exception.genres.GenresListEmpty;
import com.cinema.cinemaProject.exception.movies.MovieNotFoundException;
import com.cinema.cinemaProject.exception.movies.MoviesListEmpty;
import com.cinema.cinemaProject.exception.screenings.HallOccupiedException;
import com.cinema.cinemaProject.exception.screenings.ScreeningNotFoundException;
import com.cinema.cinemaProject.exception.screenings.ScreeningsNotFoundException;
import com.cinema.cinemaProject.exception.seats.SeatNotFoundException;
import com.cinema.cinemaProject.exception.users.InvalidCredentialsException;
import com.cinema.cinemaProject.exception.users.NotVerifiedAccountException;
import com.cinema.cinemaProject.exception.users.PasswordMismatchException;
import com.cinema.cinemaProject.exception.users.UserNotFoundException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(GenreNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFoundException(GenreNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(GenresListEmpty.class)
    public ResponseEntity<String> handleEmptyListException(GenresListEmpty ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MovieNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFoundException(MovieNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MoviesListEmpty.class)
    public ResponseEntity<String> handleEmptyListException(MoviesListEmpty ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ScreeningsNotFoundException.class)
    public ResponseEntity<String> handleEmptyListException(ScreeningsNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ScreeningNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFoundException(ScreeningNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(PasswordMismatchException.class)
    public ResponseEntity<String> handlePasswordMismatch(PasswordMismatchException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(InvalidCredentialsException.class)
    public ResponseEntity<String> handleInvalidCredential(InvalidCredentialsException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(NotVerifiedAccountException.class)
    public ResponseEntity<String> handleNotVerifiedAccount(NotVerifiedAccountException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFoundException(UserNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(SeatNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFoundException(SeatNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(HallOccupiedException.class)
    public ResponseEntity<String> handleEntityHallOccupiedException(HallOccupiedException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = DataIntegrityViolationException.class)
    public ResponseEntity<Void> handle() {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}

