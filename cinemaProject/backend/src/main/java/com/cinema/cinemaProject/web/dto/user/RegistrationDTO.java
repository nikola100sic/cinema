package com.cinema.cinemaProject.web.dto.user;

import com.cinema.cinemaProject.enumeration.UserRole;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
@Data
@NoArgsConstructor
public class RegistrationDTO {
    private String username;

    private String firstName;

    private String lastName;

    private LocalDate birthDate;

    private String password;

    private UserRole role;
}
