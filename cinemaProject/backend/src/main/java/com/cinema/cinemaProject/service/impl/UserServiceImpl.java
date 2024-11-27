package com.cinema.cinemaProject.service.impl;

import com.cinema.cinemaProject.enumeration.UserRole;
import com.cinema.cinemaProject.exception.users.PasswordMismatchException;
import com.cinema.cinemaProject.model.User;
import com.cinema.cinemaProject.repository.UserRepository;
import com.cinema.cinemaProject.service.UserService;
import com.cinema.cinemaProject.web.dto.RegistrationDTO;
import com.cinema.cinemaProject.web.dto.UserDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User registration(RegistrationDTO registrationData) {
        if (!registrationData.getPassword().equals(registrationData.getRepeatedPassword())) {
            throw new PasswordMismatchException();
        } else {
            User user = new User();
            user.setName(registrationData.getName());
            user.setToken(UUID.randomUUID().toString());
            user.setSurname(registrationData.getSurname());
            user.setUsername(registrationData.getUsername());
            String encodedPassword = passwordEncoder.encode(registrationData.getPassword());
            user.setPassword(encodedPassword);
            user.setEMail(registrationData.getEMail());
            user.setUserRole(UserRole.USER);
            return userRepository.save(user);
        }
    }

    @Override
    public User update(UserDTO userDTO) {
        User existingUser = userRepository.findById(userDTO.getId())
                .orElseThrow(() -> new UsernameNotFoundException("User not found with ID: " + userDTO.getId()));
        existingUser.setName(userDTO.getName());
        existingUser.setSurname(userDTO.getSurname());
        existingUser.setUsername(userDTO.getUsername());
        existingUser.setEMail(userDTO.getEMail());
        existingUser.setUserRole(UserRole.USER);
        return userRepository.save(existingUser);
    }


    @Override
    public void verifyUser(User user) {
        user.setEmailVerified(true);
        userRepository.save(user);
    }

    @Override
    public User findByToken(String token) {
        return userRepository.findByToken(token).orElse(null);
    }

    @Override
    public boolean isVerified(User user) {
        return user.isEmailVerified();
    }

    @Override
    public User findOne(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username));
    }
}
