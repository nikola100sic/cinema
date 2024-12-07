package com.cinema.cinemaProject.repository;

import com.cinema.cinemaProject.model.Reservation;
import com.cinema.cinemaProject.model.Screening;
import com.cinema.cinemaProject.model.Seat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

    boolean existsBySeatAndScreeningAndIsActiveTrue(Seat seat, Screening screening);

    List<Reservation> findByScreeningAndIsActiveTrue(Screening screening);


}
