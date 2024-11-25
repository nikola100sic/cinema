package com.cinema.cinemaProject.web.controller;

import com.cinema.cinemaProject.model.User;
import com.cinema.cinemaProject.security.JwtUtills;
import com.cinema.cinemaProject.service.UserService;
import com.cinema.cinemaProject.web.dto.LoginDTO;
import com.cinema.cinemaProject.web.dto.RegistrationDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
public class AuthController {

    private final UserDetailsService userDetailsService;

    private final JwtUtills jwtUtills;

    private final UserService userService;

    private final PasswordEncoder passwordEncoder;


    @GetMapping
    public ResponseEntity<List<User>> getAll() {
        List<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO loginData) {
        UserDetails user = userDetailsService.loadUserByUsername(loginData.getUsername());
        if (user != null && passwordEncoder.matches(loginData.getPassword(), user.getPassword())) {
            String token = jwtUtills.generateJwtToken(new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities()));
            return new ResponseEntity<>(token, HttpStatus.OK);
        }
        return new ResponseEntity<>("Invalid credentials.", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/registration")
    public ResponseEntity<User> registration(@RequestBody RegistrationDTO registrationData) {
        User user = userService.save(registrationData);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
