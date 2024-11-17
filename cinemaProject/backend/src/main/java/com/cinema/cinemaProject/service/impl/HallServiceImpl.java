package com.cinema.cinemaProject.service.impl;

import com.cinema.cinemaProject.model.Hall;
import com.cinema.cinemaProject.repository.HallRepository;
import com.cinema.cinemaProject.service.HallService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Data
@RequiredArgsConstructor
@Service
public class HallServiceImpl implements HallService {

    private final HallRepository hallRepository;

    @Override
    public List<Hall> findAll() {
        List<Hall> halls = hallRepository.findAll();
        return halls;
    }
}
