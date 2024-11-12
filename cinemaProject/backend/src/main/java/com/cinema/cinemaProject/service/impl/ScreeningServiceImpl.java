package com.cinema.cinemaProject.service.impl;

import com.cinema.cinemaProject.model.Screening;
import com.cinema.cinemaProject.repository.ScreeningRepository;
import com.cinema.cinemaProject.service.ScreeningService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
        return screeningRepository.save(screening);
    }
}
