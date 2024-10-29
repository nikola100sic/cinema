package com.cinema.cinemaProject.web.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@NoArgsConstructor
@Data
@Component
public class GenreDtoEdit {

    private Long id;

    private String name;

}
