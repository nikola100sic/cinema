package com.cinema.cinemaProject.web.controller;

import com.cinema.cinemaProject.model.Movie;
import com.cinema.cinemaProject.model.Screening;
import com.cinema.cinemaProject.service.MovieService;
import com.cinema.cinemaProject.service.ScreeningService;
import com.cinema.cinemaProject.web.dto.MovieWithScreeningsDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping(value = "/api/screenings",produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class ScreeningController {

    private final ScreeningService screeningService;

    private final MovieService movieService;

    @GetMapping
    public ResponseEntity<List<MovieWithScreeningsDTO>> getMoviesWithScreenings(
            @RequestParam(value = "date", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date,
            @RequestParam(value = "genreId", required = false)Long genreId) {
        if (date == null) {
            date = LocalDate.now();
        }
        List<MovieWithScreeningsDTO> screeningsFoDate = movieService.getForDateAndGenre(date, genreId);
        return new ResponseEntity<>(screeningsFoDate, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void>delete(@PathVariable Long id){
        screeningService.delete(id);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}

