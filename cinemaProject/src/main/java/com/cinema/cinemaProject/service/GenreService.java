package com.cinema.cinemaProject.service;

import com.cinema.cinemaProject.model.Genre;

import java.util.List;

public interface GenreService {
    Genre findOne(Long genreId);

    List<Genre> findAll();

    Genre save(Genre genre);

    Genre update(Genre genre, Long id);

    Genre delete(Long genreId);
}