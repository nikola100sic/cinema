package com.cinema.cinemaProject.web.dto;

import com.cinema.cinemaProject.enumeration.UserRole;
import lombok.Data;

@Data
public class UserDTO {

    private Long id;

    private String username;

    private String name;

    private String surname;

    private String eMail;

    private UserRole userRole;

    private boolean isVerified;
}
