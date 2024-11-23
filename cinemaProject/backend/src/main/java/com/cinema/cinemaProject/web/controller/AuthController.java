package com.cinema.cinemaProject.web.controller;

import com.cinema.cinemaProject.model.Genre;
import com.cinema.cinemaProject.security.JwtUtills;
import com.cinema.cinemaProject.service.GenreService;
import com.cinema.cinemaProject.web.dto.LoginDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthController {

    private final UserDetailsService userDetailsService;
    private final JwtUtills jwtUtills;

    @PostMapping("/login")
    public ResponseEntity<String> login(LoginDTO loginData) {
        UserDetails user = userDetailsService.loadUserByUsername(loginData.getUsername());
        if(user != null && user.getPassword().equals(loginData.getPassword())){
            String token = jwtUtills.generateJwtToken(new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities()));
            return new ResponseEntity<>(token, HttpStatus.OK);
        }
        return new ResponseEntity<>("Invalid credentials.", HttpStatus.BAD_REQUEST);
    }
}
