package com.cinema.cinemaProject.web.dto;

import com.cinema.cinemaProject.enumeration.UserRole;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
public class UserDTO {

    private Long id;

    private String username;

    private String name;

    private String surname;

    private String eMail;
    
    private UserRole userRole;
}
