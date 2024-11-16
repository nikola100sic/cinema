package com.cinema.cinemaProject.service;

import com.cinema.cinemaProject.model.Movie;
import com.cinema.cinemaProject.model.Screening;

import java.util.List;

public interface ScreeningService {

    List<Screening> getAllScreenings();

    Screening createScreening(Screening screening);

    Screening delete (Long screeningId);

}
