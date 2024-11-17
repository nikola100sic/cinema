package com.cinema.cinemaProject.service;

import com.cinema.cinemaProject.model.Hall;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.List;

public interface HallService {

    List<Hall>findAll ();

}
