package com.cinema.cinemaProject.exception;

import com.cinema.cinemaProject.exception.genres.GenreNotFoundException;
import com.cinema.cinemaProject.exception.genres.GenresListEmpty;
import com.cinema.cinemaProject.exception.movies.MovieNotFoundException;
import com.cinema.cinemaProject.exception.movies.MoviesListEmpty;
import com.cinema.cinemaProject.exception.screenings.HallOccupiedException;
import com.cinema.cinemaProject.exception.screenings.ScreeningNotFoundException;
import com.cinema.cinemaProject.exception.screenings.ScreeningsNotFoundException;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(GenreNotFoundException.class)
    public ResponseEntity<String> handleEntityNotFoundException(GenreNotFoundException ex){
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(GenresListEmpty.class)
    public ResponseEntity<String> handleEmptyListException(GenresListEmpty ex){
        return new ResponseEntity<>(ex.getMessage(),HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MovieNotFoundException.class)
    public ResponseEntity<String>handleEntityNotFoundException (MovieNotFoundException ex){
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(MoviesListEmpty.class)
    public  ResponseEntity<String> handleEmptyListException(MoviesListEmpty ex){
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ScreeningsNotFoundException.class)
    public  ResponseEntity<String> handleEmptyListException(ScreeningsNotFoundException ex){
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(ScreeningNotFoundException.class)
    public ResponseEntity<String>handleEntityNotFoundException (ScreeningNotFoundException ex){
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(HallOccupiedException.class)
    public ResponseEntity<String>handleEntityHallOccupiedException (HallOccupiedException ex){
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = DataIntegrityViolationException.class)
    public ResponseEntity<Void> handle() {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}

