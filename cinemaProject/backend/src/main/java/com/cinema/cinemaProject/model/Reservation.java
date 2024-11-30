package com.cinema.cinemaProject.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private boolean isActive;

    @ManyToOne
    private Seat seat;

    @ManyToOne
    private Screening screening;
    
    @ManyToOne
    private User user;
}
