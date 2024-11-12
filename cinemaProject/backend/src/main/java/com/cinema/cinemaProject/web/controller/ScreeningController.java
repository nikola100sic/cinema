package com.cinema.cinemaProject.web.controller;

import com.cinema.cinemaProject.service.MovieService;
import com.cinema.cinemaProject.service.ScreeningService;
import com.cinema.cinemaProject.web.dto.MovieWithScreeningsDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping(value = "/api/screenings",produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class ScreeningController {

    private final ScreeningService screeningService;

    private final MovieService movieService;

    @GetMapping
    public ResponseEntity<List<MovieWithScreeningsDTO>> getMoviesWithScreeningsByDate(
            @RequestParam(value = "date", required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        if (date == null) {
            date = LocalDate.now();
        }
        List<MovieWithScreeningsDTO> screeningsFoDate = movieService.getForDate(date);
        return new ResponseEntity<>(screeningsFoDate, HttpStatus.OK);
    }
}

