package com.cinema.cinemaProject.service.impl;

import com.cinema.cinemaProject.exception.genres.GenreNotFoundException;
import com.cinema.cinemaProject.exception.screenings.ScreeningNotFoundException;
import com.cinema.cinemaProject.exception.seats.SeatNotFoundException;
import com.cinema.cinemaProject.exception.users.UserNotFoundException;
import com.cinema.cinemaProject.model.Reservation;
import com.cinema.cinemaProject.model.Screening;
import com.cinema.cinemaProject.model.Seat;
import com.cinema.cinemaProject.model.User;
import com.cinema.cinemaProject.repository.ReservationRepository;
import com.cinema.cinemaProject.repository.ScreeningRepository;
import com.cinema.cinemaProject.repository.SeatRepository;
import com.cinema.cinemaProject.repository.UserRepository;
import com.cinema.cinemaProject.service.ReservationService;
import com.cinema.cinemaProject.web.dto.ReservationDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RequiredArgsConstructor
@Service
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;

    private final ScreeningRepository screeningRepository;

    private final SeatRepository seatRepository;

    private final UserRepository userRepository;

    @Override
    public List<Reservation> getAll() {
        return reservationRepository.findAll();
    }

    @Override
    public List<Seat> getTakenSeats(Long screeningId) {
        Screening screening = screeningRepository.findById(screeningId).orElseThrow(() -> new ScreeningNotFoundException(screeningId));
        List<Reservation> reservations = reservationRepository.findByScreeningAndIsActiveTrue(screening);
        List<Seat> takenSeats = new ArrayList<>();
        for (Reservation reservation : reservations) {
            takenSeats.add(reservation.getSeat());
        }
        return takenSeats;
    }

    @Override
    public boolean isSeatTaken(Seat seat, Screening screening) {
        return reservationRepository.existsBySeatAndScreeningAndIsActiveTrue(seat, screening);
    }

    @Override
    public Reservation reserveSeat(ReservationDTO reservationDTO) {
        Screening screening = screeningRepository.findById(reservationDTO.getScreeningId())
                .orElseThrow(() -> new ScreeningNotFoundException(reservationDTO.getScreeningId()));
        Seat seat = seatRepository.findById(reservationDTO.getSeatId())
                .orElseThrow(() -> new SeatNotFoundException(reservationDTO.getSeatId()));
        User user = userRepository.findById(reservationDTO.getUserId())
                .orElseThrow(() -> new UserNotFoundException(reservationDTO.getUserId()));

        if (isSeatTaken(seat, screening)) {
            throw new IllegalStateException("Seat is already taken for this screening.");
        }

        Reservation reservation = new Reservation();
        reservation.setSeat(seat);
        reservation.setScreening(screening);
        reservation.setUser(user);
        reservation.setActive(true);

        return reservationRepository.save(reservation);
    }
}
