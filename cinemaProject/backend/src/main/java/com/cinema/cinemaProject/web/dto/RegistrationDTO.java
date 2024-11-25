package com.cinema.cinemaProject.web.dto;

import com.cinema.cinemaProject.enumeration.UserRole;
import jakarta.persistence.*;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Data
public class RegistrationDTO extends UserDTO {

    private String password;

    private String repeatedPassword;

}
