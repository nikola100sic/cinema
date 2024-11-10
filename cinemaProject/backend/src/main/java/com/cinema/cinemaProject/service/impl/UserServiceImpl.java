package com.cinema.cinemaProject.service.impl;

import com.cinema.cinemaProject.exception.users.UserAlreadyExistsException;
import com.cinema.cinemaProject.model.User;
import com.cinema.cinemaProject.repository.UserRepository;
import com.cinema.cinemaProject.service.UserService;
import com.cinema.cinemaProject.web.dto.user.RegistrationDTO;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@RequiredArgsConstructor
@Data
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public Optional<User> findOne(Long id) {
        return userRepository.findById(id);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User save(RegistrationDTO registrationDTO) {
        if (findbyUsername(registrationDTO.getUsername()).isPresent()) {
            throw new UserAlreadyExistsException(registrationDTO.getUsername());
        }
        User user = new User();
        user.setUsername(registrationDTO.getUsername());
        user.setPassword(registrationDTO.getPassword());
        user.setFirstName(registrationDTO.getFirstName());
        user.setLastName(registrationDTO.getLastName());
        user.setBirthDate(registrationDTO.getBirthDate());
        user.setRole(registrationDTO.getRole());
        return userRepository.save(user);
    }

    @Override
    public User delete(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()) {
            userRepository.deleteById(id);
            return user.get();
        }
        return null;
    }

    @Override
    public Optional<User> findbyUsername(String username) {
        return userRepository.findFirstByUsername(username);
    }

}
