package com.cinema.cinemaProject.web.dto;

import lombok.Data;

import java.util.List;

@Data
public class MovieWithScreeningsDTO {

    private Long id;

    private String name;

    private int duration;

    private String image;

    private int rating;

    private List<GenreDTO> genres;

    private List<ScreeningDTO> screenings;


}
