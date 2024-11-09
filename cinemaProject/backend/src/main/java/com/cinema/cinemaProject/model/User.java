package com.cinema.cinemaProject.model;

import com.cinema.cinemaProject.enumeration.UserRole;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    private String firstName;

    private String lastName;

    private LocalDate birthDate;

    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role;


}
