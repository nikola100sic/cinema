package com.cinema.cinemaProject.model;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
@Table(name = "genres")
public class Genre {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;
}