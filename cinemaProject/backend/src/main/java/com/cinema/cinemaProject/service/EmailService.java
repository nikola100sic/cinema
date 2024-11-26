package com.cinema.cinemaProject.service;

public interface EmailService {

    void sendEmail(String to, String subject, String htmlContent);
}
