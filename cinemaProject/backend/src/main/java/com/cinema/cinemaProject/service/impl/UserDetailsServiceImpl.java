//package com.cinema.cinemaProject.service.impl;
//
//import com.cinema.cinemaProject.model.User;
//import com.cinema.cinemaProject.service.UserService;
//import jakarta.transaction.Transactional;
//import lombok.RequiredArgsConstructor;
//import org.springframework.context.annotation.Primary;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//
//@Service
//@Primary
//@RequiredArgsConstructor
//public class UserDetailsServiceImpl implements UserDetailsService {
//
//
//    private final UserService userService;
//
//    @Override
//    @Transactional
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//        User user = userService.findbyUsername(username).orElse(null);
//
//        if (user == null) {
//            throw new UsernameNotFoundException(String.format("No user found with username '%s'.", username));
//        } else {
//            ArrayList<GrantedAuthority> grantedAuthorities = new ArrayList<>();
//
//            String role = user.getRole().toString();
//            grantedAuthorities.add(new SimpleGrantedAuthority(role));
//
//            return new org.springframework.security.core.userdetails.User(user.getUsername().trim(),
//                    user.getPassword().trim(), grantedAuthorities);
//        }
//    }
//}