package com.cinema.cinemaProject.service.impl;

import com.cinema.cinemaProject.exception.genres.GenresListEmpty;
import com.cinema.cinemaProject.exception.genres.GenreNotFoundException;
import com.cinema.cinemaProject.model.Genre;
import com.cinema.cinemaProject.repository.GenreRepository;
import com.cinema.cinemaProject.service.GenreService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
@RequiredArgsConstructor
@Service
public class GenreServiceImpl implements GenreService {


    private final GenreRepository genreRepository;

    @Override
    public Genre findOne(Long genreId) {
        return genreRepository.findById(genreId)
                .orElseThrow(()->new GenreNotFoundException(genreId));
    }

    @Override
    public List<Genre> findAll() {
        List<Genre>genres = genreRepository.findAll();
        if(genres.isEmpty()){
            throw new GenresListEmpty();
        }
        return genres;
    }

    @Override
    public Genre save(Genre genre) {
        return genreRepository.save(genre);
    }

    @Override
    public Genre update(Genre genre, Long id) {
        if(genre==null){
            throw new GenreNotFoundException(id);
        }
        return genreRepository.save(genre);
    }

    @Override
    public Genre delete(Long genreId) {
        Genre genre = genreRepository.findOneById(genreId);
        if(genre!=null){
            genreRepository.delete(genre);
            return genre;
        }
         throw new GenreNotFoundException(genreId);
    }
}
