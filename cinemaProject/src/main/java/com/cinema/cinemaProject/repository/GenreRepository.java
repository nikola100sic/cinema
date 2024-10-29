package com.cinema.cinemaProject.repository;

import com.cinema.cinemaProject.model.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {

    Genre findOneById(Long id);

}
