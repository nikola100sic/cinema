package com.cinema.cinemaProject.service.impl;

import com.cinema.cinemaProject.exception.genres.GenreNotFoundException;
import com.cinema.cinemaProject.exception.genres.GenresListEmpty;
import com.cinema.cinemaProject.model.Genre;
import com.cinema.cinemaProject.model.Movie;
import com.cinema.cinemaProject.repository.GenreRepository;
import com.cinema.cinemaProject.repository.MovieRepository;
import com.cinema.cinemaProject.service.GenreService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;
@RequiredArgsConstructor
@Service
public class GenreServiceImpl implements GenreService {


    private final GenreRepository genreRepository;

    private final MovieRepository movieRepository;

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
    public Page<Genre> findAllSearch(int page) {
        Page<Genre>genres = genreRepository.findAll(PageRequest.of(page,5));
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
            for (Movie movie : movieRepository.findAll()) {
                if (movie.getGenres().contains(genre)) {
                    movie.getGenres().remove(genre);
                    movieRepository.save(movie);  // Save updated movie to persist changes
                }
            }
            genreRepository.delete(genre);
            return genre;
        }
         throw new GenreNotFoundException(genreId);
    }
}
