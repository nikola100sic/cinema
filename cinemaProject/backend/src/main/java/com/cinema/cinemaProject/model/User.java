package com.cinema.cinemaProject.model;

import com.cinema.cinemaProject.enumeration.UserRole;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String surname;

    @Column( unique = true, nullable = false)
    private String eMail;

    @Column(nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole userRole;
}