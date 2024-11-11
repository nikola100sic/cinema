package com.cinema.cinemaProject.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Seat seat;

    @ManyToOne
    private Screening screening;

    private boolean isActive;

    @ManyToOne
    private User user; //
}
