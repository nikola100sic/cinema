package com.cinema.cinemaProject.web.dto;

import lombok.Data;

import java.util.List;

@Data
public class MovieWithScreeningsDTO {

    private Long id;

    private MovieDTO movieDTO;
    
    private List<ScreeningDTO> screenings;


}
