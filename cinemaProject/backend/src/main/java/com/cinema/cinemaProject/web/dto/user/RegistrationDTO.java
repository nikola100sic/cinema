package com.cinema.cinemaProject.web.dto.user;

import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.Date;
@Data
@NoArgsConstructor
public class RegistrationDTO {
    private String username;

    private String firstName;

    private String lastName;

    private Date birthDate;

    private String password;

    private String role;
}
