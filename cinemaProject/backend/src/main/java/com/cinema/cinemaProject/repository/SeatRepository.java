package com.cinema.cinemaProject.repository;

import com.cinema.cinemaProject.model.Hall;
import com.cinema.cinemaProject.model.Seat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long> {
        List<Seat> findByHall(Hall hall);

}
