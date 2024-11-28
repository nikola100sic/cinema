package com.cinema.cinemaProject.web.controller;

import com.cinema.cinemaProject.model.Hall;
import com.cinema.cinemaProject.service.HallService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/halls", produces = MediaType.APPLICATION_JSON_VALUE)
public class HallController {

    private final HallService hallService;

    @GetMapping
    public ResponseEntity<List<Hall>> getAll() {
        List<Hall> halls = hallService.findAll();
        return new ResponseEntity<>(halls, HttpStatus.OK);
    }

    @GetMapping("/test")
    public void testHalls() {
        List<Hall> halls = hallService.findAll();
        halls.forEach(hall -> {
            System.out.println("Hall: " + hall.getName());
            System.out.println("Seats: " + hall.getSeats());
        });
    }

}
