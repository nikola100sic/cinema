//package com.cinema.cinemaProject.security;
//
//
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import lombok.Data;
//import lombok.RequiredArgsConstructor;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//import java.util.ArrayList;
//@Component
//
//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//
//    private final JwtTokenUtil jwtTokenUtil;
//
//    private final AuthenticationManager authenticationManager;
//
//    public JwtAuthenticationFilter(JwtTokenUtil jwtTokenUtil, AuthenticationManager authenticationManager) {
//        this.jwtTokenUtil = jwtTokenUtil;
//        this.authenticationManager = authenticationManager;
//    }
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String token = jwtTokenUtil.getTokenFromRequest(request);
//
//        if (token != null && jwtTokenUtil.validateToken(token)) {
//            String username = jwtTokenUtil.getUsernameFromToken(token);
//            SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(username, null, new ArrayList<>()));
//        }
//
//        filterChain.doFilter(request, response);
//    }
//}
