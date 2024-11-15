package com.cinema.cinemaProject.web.dto;

import lombok.Data;

import java.util.List;

@Data
public class MovieWithScreeningsDTO {

    private Long id;

    private String name;

    private int duration;
    
    private int rating;

    private String imageUrl;

    private List<GenreDTO> genres;

    private List<ScreeningDTO> screenings;


}
