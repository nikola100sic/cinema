package com.cinema.cinemaProject.exception;

import com.cinema.cinemaProject.exception.genres.GenreNotFoundException;
import com.cinema.cinemaProject.exception.genres.GenresListEmpty;
import com.cinema.cinemaProject.exception.movies.MovieNotFoundException;
import com.cinema.cinemaProject.exception.movies.MoviesListEmpty;
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

    @ExceptionHandler(value = DataIntegrityViolationException.class)
    public ResponseEntity<Void> handle() {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}

