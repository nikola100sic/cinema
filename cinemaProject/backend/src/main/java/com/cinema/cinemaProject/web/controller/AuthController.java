package com.cinema.cinemaProject.web.controller;

import com.cinema.cinemaProject.exception.users.InvalidCredentialsException;
import com.cinema.cinemaProject.exception.users.NotVerifiedAccountException;
import com.cinema.cinemaProject.model.User;
import com.cinema.cinemaProject.security.JwtUtills;
import com.cinema.cinemaProject.service.EmailService;
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
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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

    private final EmailService emailService;


    @GetMapping
    public ResponseEntity<List<User>> getAll() {
        List<User> users = userService.findAll();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO loginData) {

        UserDetails user = userDetailsService.loadUserByUsername(loginData.getUsername());
        if (user == null) {
            throw new InvalidCredentialsException("User with username: " + loginData.getUsername() + " not found.");
        }
        User userFromBase = userService.findOne(loginData.getUsername());
        if (!userService.isVerified(userFromBase)) {
            throw new NotVerifiedAccountException(userFromBase.getUsername());
        }
        ;
        if (passwordEncoder.matches(loginData.getPassword(), user.getPassword())) {
            String token = jwtUtills.generateJwtToken(
                    new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities()));
            return new ResponseEntity<>(token, HttpStatus.OK);
        }
        throw new InvalidCredentialsException("Invalid credentials.");

    }

    @PostMapping("/registration")
    public ResponseEntity<User> registration(@RequestBody RegistrationDTO registrationData) {
        User user = userService.registration(registrationData);

        String verificationLink = "http://localhost:8080/api/emailVerification/" + user.getToken();
        String htmlContent = "<html>" +
                "<body>" +
                "<h1>Welcome to Cinema Application!</h1>" +
                "<p>Please click the link to verify your email:</p>" +
                "<a href=\"" + verificationLink + "\">Verify Email</a>" +
                "</body>" +
                "</html>";

        emailService.sendEmail(user.getEMail(), "Email Verification!", htmlContent);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
