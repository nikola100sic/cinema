package com.cinema.cinemaProject.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;
@Entity
@Data
@Table(name = "halls")
public class Hall {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int number;

    private int capacity;

    @OneToMany(mappedBy = "hall", cascade = CascadeType.ALL)
    private Set<Seat>seats;
}
