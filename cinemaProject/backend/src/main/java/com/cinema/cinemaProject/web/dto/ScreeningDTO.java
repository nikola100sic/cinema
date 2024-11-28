package com.cinema.cinemaProject.web.dto;

import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

@Data
public class ScreeningDTO {

    private Long id;

    private LocalTime screening_time;

    private BigDecimal ticket_price;

    private LocalDate screening_date;

    private HallDTO hallDto;

}
