package com.cinema.cinemaProject.repository;

import com.cinema.cinemaProject.model.Genre;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {

    Genre findOneById(Long id);

    Page<Genre> findAll(Pageable pageable);


}
