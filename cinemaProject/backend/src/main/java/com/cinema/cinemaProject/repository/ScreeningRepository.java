package com.cinema.cinemaProject.repository;

import com.cinema.cinemaProject.model.Screening;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface ScreeningRepository extends JpaRepository<Screening, Long> {

    @Query("SELECT s FROM Screening s WHERE s.screening_date = :date AND s.movie.id = :movieId")
    List<Screening> findByScreeningDateAndMovieId(@Param("date") LocalDate screeningDate, @Param("movieId") Long movieId);

    @Query("SELECT s FROM Screening s WHERE s.hall.id = :hallId AND s.screening_date = :screeningDate")
    List<Screening> findScreeningsByHallAndDate(
            @Param("hallId") Long hallId,
            @Param("screeningDate") LocalDate screeningDate);


}


