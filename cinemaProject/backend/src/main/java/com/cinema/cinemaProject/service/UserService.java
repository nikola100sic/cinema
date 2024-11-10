package com.cinema.cinemaProject.service;

import com.cinema.cinemaProject.model.User;
import com.cinema.cinemaProject.web.dto.user.RegistrationDTO;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface UserService {
    Optional<User> findOne(Long id);

    List<User> findAll();

    User save(RegistrationDTO registrationDTO);

    User delete(Long id);

    Optional<User> findbyUsername(String username);

//    boolean changePassword(Long id, UserChangePasswordDTO userChangePasswordDto);

}
