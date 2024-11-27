package com.cinema.cinemaProject.web.dto;

import lombok.Data;

@Data
public class RegistrationDTO extends UserDTO {

    private String password;

    private String repeatedPassword;

}
