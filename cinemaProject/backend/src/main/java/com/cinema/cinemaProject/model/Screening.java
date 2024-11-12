package com.cinema.cinemaProject.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Data
public class Screening {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    private LocalDate screening_date;

    private LocalTime screening_time;

    @ManyToOne
    private Movie movie;

    @ManyToOne
    private Hall hall;
}
