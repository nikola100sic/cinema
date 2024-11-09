//package com.cinema.cinemaProject.security;
//
//import io.jsonwebtoken.*;
//import jakarta.servlet.ServletRequest;
//import jakarta.servlet.http.HttpServletRequest;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.core.Authentication;
//import org.springframework.stereotype.Component;
//
//import java.util.Date;
//
//@Component
//public class JwtTokenUtil {
//
//    @Value("${jwt.secret}")
//    private String secretKey;
//
//    @Value("${jwt.expiration}")
//    private int jwtExpirationMs;
//
//    public String generateToken(Authentication authentication) {
//        return Jwts.builder()
//                .setSubject(authentication.getName())
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + jwtExpirationMs))
//                .signWith(SignatureAlgorithm.HS512, secretKey)
//                .compact();
//    }
//
//    public String getTokenFromRequest(ServletRequest request) {
//        String header = ((HttpServletRequest) request).getHeader("Authorization");
//        if (header != null && header.startsWith("Bearer ")) {
//            return header.substring(7);
//        }
//        return null;
//    }
//
//    public boolean validateToken(String token) {
//        try {
//            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
//            return true;
//        } catch (SignatureException | MalformedJwtException | ExpiredJwtException |
//                 UnsupportedJwtException | IllegalArgumentException e) {
//            return false;
//        }
//    }
//
//    public String getUsernameFromToken(String token) {
//        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
//    }
//}
