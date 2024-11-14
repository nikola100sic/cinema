package com.cinema.cinemaProject.repository;

import com.cinema.cinemaProject.model.Genre;
import com.cinema.cinemaProject.model.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Long> {

    @Query("SELECT m FROM Movie m WHERE" +
            "(:name IS NULL OR LOWER(m.name) LIKE LOWER(CONCAT('%', :name, '%'))) AND" +
            "(:durationFrom IS NULL OR m.duration >= :durationFrom) AND " +
            "(:durationTo IS NULL OR m.duration <= :durationTo)")
    Page<Movie> search(@Param("name") String name,
                       @Param("durationFrom") int cenaOd,
                       @Param("durationTo") int cenaDo,
                       Pageable pageable);

    List<Movie> findByGenresContaining(Genre genre);

}