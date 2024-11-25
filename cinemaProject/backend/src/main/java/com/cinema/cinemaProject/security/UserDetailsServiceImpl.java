package com.cinema.cinemaProject.security;

import com.cinema.cinemaProject.enumeration.UserRole;
import com.cinema.cinemaProject.model.User;
import com.cinema.cinemaProject.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        try{
            User user = userRepository.findByUsername(username).orElseThrow();
            return new UserDetails() {
                @Override
                public Collection<? extends GrantedAuthority> getAuthorities() {
                    Collection<GrantedAuthority> roles = new ArrayList<>();
                    roles.add(new GrantedAuthority() {
                        @Override
                        public String getAuthority() {
                            return user.getUserRole().toString();
                        }
                    });
                    return roles;
                }

                @Override
                public String getPassword() {
                    return user.getPassword();
                }

                @Override
                public String getUsername() {
                    return user.getUsername();
                }
            };
        }catch(Exception ex){
            return null;
        }
    }
}
