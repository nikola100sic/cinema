package com.cinema.cinemaProject.service;

import com.cinema.cinemaProject.model.User;
import com.cinema.cinemaProject.web.dto.RegistrationDTO;
import com.cinema.cinemaProject.web.dto.UserDTO;

import java.util.List;

public interface UserService {

    List<User> findAll();

    User registration(RegistrationDTO registrationData);

    User update(UserDTO updateData);

    void verifyUser(User user);

    User findByToken(String token);

    boolean isVerified(User user);

    User getOneUser(String username);

    UserDTO getOneUserDto(String username);

}
