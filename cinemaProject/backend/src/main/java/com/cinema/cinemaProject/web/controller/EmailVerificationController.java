package com.cinema.cinemaProject.web.controller;

import com.cinema.cinemaProject.model.User;
import com.cinema.cinemaProject.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/emailVerification", produces = MediaType.APPLICATION_JSON_VALUE)
public class EmailVerificationController {

    private final UserService userService;

    @GetMapping("/{token}")
    public ResponseEntity<Void> getOne(@PathVariable String token) {
        User user = userService.findByToken(token);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        if (user.isEmailVerified()) {
            return ResponseEntity.status(HttpStatus.FOUND)
                    .location(URI.create("http://localhost:3000/login"))
                    .build();
        }
        userService.verifyUser(user);
        return ResponseEntity.status(HttpStatus.FOUND)
                .location(URI.create("http://localhost:3000/emailVerificationSuccess"))
                .build();
    }
}
