package com.cinema.cinemaProject.service;

import com.cinema.cinemaProject.model.User;
import com.cinema.cinemaProject.web.dto.RegistrationDTO;
import com.cinema.cinemaProject.web.dto.UserDTO;

import java.util.List;

public interface UserService {

    List<User>findAll ();

    User save(RegistrationDTO registrationData);

}
