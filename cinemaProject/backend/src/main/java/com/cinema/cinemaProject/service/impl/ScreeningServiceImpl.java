package com.cinema.cinemaProject.service.impl;

import com.cinema.cinemaProject.exception.screenings.HallOccupiedException;
import com.cinema.cinemaProject.exception.screenings.ScreeningNotFoundException;
import com.cinema.cinemaProject.exception.screenings.ScreeningsNotFoundException;
import com.cinema.cinemaProject.model.Screening;
import com.cinema.cinemaProject.repository.ScreeningRepository;
import com.cinema.cinemaProject.service.ScreeningService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalTime;
import java.util.List;
@Service
@RequiredArgsConstructor
public class ScreeningServiceImpl implements ScreeningService {
    private final ScreeningRepository screeningRepository;
    @Override
    public List<Screening> getAllScreenings() {
        return screeningRepository.findAll();
    }


    @Override
    public Screening createScreening(Screening screening) {
        List<Screening> screenings = screeningRepository.findScreeningsByHallAndDate(
                screening.getHall().getId(),
                screening.getScreening_date()
        );
        LocalTime newEndTime = screening.getScreening_time().plusMinutes(screening.getMovie().getDuration());

        for (Screening s : screenings) {
            LocalTime existingEndTime = s.getScreening_time().plusMinutes(s.getMovie().getDuration());
            if (screening.getScreening_time().isBefore(existingEndTime) && newEndTime.isAfter(s.getScreening_time())) {
                throw new HallOccupiedException(screening.getScreening_time().toString());
            }
        }
        return screeningRepository.save(screening);
    }

    @Override
    public Screening delete(Long screeningId) {
        Screening screeningForDelete = screeningRepository.findById(screeningId).
                orElseThrow(()-> new  ScreeningNotFoundException(screeningId));
        screeningRepository.delete(screeningForDelete);
        return screeningForDelete;
    }
}
