package com.cinema.cinemaProject.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@RequiredArgsConstructor
@Table(name = "seats")
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "seat_row")
    private int row;

    @Column(name = "seat_column")
    private int column;

    @ManyToOne
    @JoinColumn(name = "hall_id")
    @JsonBackReference
    private Hall hall;


}
