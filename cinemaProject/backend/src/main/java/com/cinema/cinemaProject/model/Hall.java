package com.cinema.cinemaProject.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.Data;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Data
@Table(name = "halls")
public class Hall {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private int hallNumber;

    private int capacity;

    @OneToMany(mappedBy = "hall", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Seat> seats = new ArrayList<>() {
    };
}
