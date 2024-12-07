package com.cinema.cinemaProject.service;

import com.cinema.cinemaProject.model.Reservation;
import com.cinema.cinemaProject.model.Screening;
import com.cinema.cinemaProject.model.Seat;
import com.cinema.cinemaProject.model.User;
import com.cinema.cinemaProject.web.dto.ReservationDTO;

import java.util.List;

public interface ReservationService {

    public List<Reservation> getAll();

    public List<Seat> getTakenSeats(Long id);

    public boolean isSeatTaken(Seat seat, Screening screening);

    public Reservation reserveSeat(ReservationDTO reservationDTO);

}
