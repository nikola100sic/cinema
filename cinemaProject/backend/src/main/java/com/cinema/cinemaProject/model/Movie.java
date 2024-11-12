package com.cinema.cinemaProject.model;



import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String name;

    @Column(nullable = false)
    private int duration;

    @Column(unique = true, nullable = false)
    private String image;

    @Column(nullable = false)
    private int rating;

    @ManyToMany
    @JoinTable(
            name = "movie_genre",
            joinColumns = @JoinColumn(name = "movie_id"), // It can without join
            inverseJoinColumns = @JoinColumn(name = "genre_id"))
    private List<Genre> genres;
}
