package com.cinema.cinemaProject.web.dto;

import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class ScreeningDTO {

    private Long id;

    private LocalTime screeningTime;

    private LocalDate screeningDate;

    private int hallNumber;

    private Long hallId;
}
