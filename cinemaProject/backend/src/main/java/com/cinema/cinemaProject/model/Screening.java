package com.cinema.cinemaProject.model;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Entity
@Data
public class Screening {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDate screening_date;

    @Column(nullable = false)
    private LocalTime screening_time;

    private BigDecimal ticket_price;


    @ManyToOne
    private Movie movie;

    @ManyToOne
    private Hall hall;
}
