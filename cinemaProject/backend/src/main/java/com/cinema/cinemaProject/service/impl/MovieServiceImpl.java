package com.cinema.cinemaProject.service.impl;

import com.cinema.cinemaProject.exception.genres.GenreNotFoundException;
import com.cinema.cinemaProject.exception.movies.MovieNotFoundException;
import com.cinema.cinemaProject.exception.movies.MoviesListEmpty;
import com.cinema.cinemaProject.exception.screenings.ScreeningsNotFoundException;
import com.cinema.cinemaProject.model.Genre;
import com.cinema.cinemaProject.model.Movie;
import com.cinema.cinemaProject.model.Screening;
import com.cinema.cinemaProject.repository.GenreRepository;
import com.cinema.cinemaProject.repository.MovieRepository;
import com.cinema.cinemaProject.repository.ScreeningRepository;
import com.cinema.cinemaProject.service.MovieService;
import com.cinema.cinemaProject.web.dto.*;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;

    private final GenreRepository genreRepository;

    private final ScreeningRepository screeningRepository;

    @Override
    public Movie findOne(Long movieId) {
        return movieRepository.findById(movieId)
                .orElseThrow(() -> new MovieNotFoundException(movieId));
    }

    @Override
    public List<Movie> getAll() {
        return movieRepository.findAll();
    }

    @Override
    public Page<Movie> findAll(String name, int durationFrom, int durationTo, int page) {
        Page<Movie> movies = movieRepository.search(name, durationFrom, durationTo, PageRequest.of(page, 4));
        if (movies.isEmpty()) {
            throw new MoviesListEmpty();
        }
        return movies;
    }

    @Override
    public Movie save(Movie movie) {
        List<Long> genreIds = movie.getGenres().stream()
                .map(Genre::getId)
                .toList();
        List<Genre> movieGenres = genreRepository.findAllById(genreIds);
        movie.setGenres(movieGenres);
        return movieRepository.save(movie);
    }

    @Override
    public Movie update(Movie movie, Long movieId) {
        return movieRepository.save(movie);
    }

    @Override
    public Movie delete(Long movieId) {
        Movie movieForDelete = getMovieById(movieId);
        movieRepository.delete(movieForDelete);
        return movieForDelete;
    }

    @Override
    public List<MovieWithScreeningsDTO> getForDateAndGenre(LocalDate date, Long genreId) {
        List<Movie> movies;
        if (genreId != null) {
            Genre genre = genreRepository.findById(genreId)
                    .orElseThrow(() -> new GenreNotFoundException(genreId));
            movies = movieRepository.findByGenresContaining(genre);
        } else {
            movies = movieRepository.findAll();
        }

        List<MovieWithScreeningsDTO> movieWithScreeningsDTOList = movies.stream()
                .map(movie -> createMovieWithScreeningsDTO(movie, date))
                .filter(movieScreeningsDTO -> movieScreeningsDTO != null)
                .collect(Collectors.toList());

        if (movieWithScreeningsDTOList.isEmpty()) {
            throw new ScreeningsNotFoundException(date);
        }

        return movieWithScreeningsDTOList;
    }

    private MovieWithScreeningsDTO createMovieWithScreeningsDTO(Movie movie, LocalDate date) {
        List<Screening> screenings = screeningRepository.findByScreeningDateAndMovieId(date, movie.getId());
        if (screenings.isEmpty()) {
            return null;
        }
        List<ScreeningDTO> screeningDTOs = createScreeningDTOs(screenings);

        MovieWithScreeningsDTO movieScreeningsDTO = new MovieWithScreeningsDTO();
        movieScreeningsDTO.setId(movie.getId());
        movieScreeningsDTO.setScreenings(screeningDTOs);

        MovieDTO movieDTO = new MovieDTO();
        movieDTO.setId(movie.getId());
        movieDTO.setName(movie.getName());
        movieDTO.setDuration(movie.getDuration());
        movieDTO.setImageUrl(movie.getImageUrl());
        movieDTO.setGenres(createGenreDTOs(movie.getGenres()));
        movieDTO.setRating(movie.getRating());

        movieScreeningsDTO.setMovieDTO(movieDTO);
        return movieScreeningsDTO;
    }

    private List<ScreeningDTO> createScreeningDTOs(List<Screening> screenings) {
        return screenings.stream()
                .map(screening -> {
                    ScreeningDTO screeningDTO = new ScreeningDTO();
                    screeningDTO.setId(screening.getId());
                    screeningDTO.setScreening_date(screening.getScreening_date());
                    screeningDTO.setScreening_time(screening.getScreening_time());
                    screeningDTO.setTicket_price(screening.getTicket_price());
                    HallDTO hallDTO = new HallDTO();
                    hallDTO.setId(screening.getHall().getId());
                    hallDTO.setHallNumber(screening.getHall().getHallNumber());
                    hallDTO.setName(screening.getHall().getName());
                    hallDTO.setCapacity(screening.getHall().getCapacity());

                    screeningDTO.setHallDto(hallDTO);
                    return screeningDTO;
                })
                .collect(Collectors.toList());
    }

    private List<GenreDTO> createGenreDTOs(List<Genre> genres) {
        return genres.stream()
                .map(genre -> {
                    GenreDTO genreDTO = new GenreDTO();
                    genreDTO.setId(genre.getId());
                    genreDTO.setName(genre.getName());
                    return genreDTO;
                })
                .collect(Collectors.toList());
    }


    private Movie getMovieById(Long id) {
        return movieRepository.findById(id)
                .orElseThrow(() -> new MovieNotFoundException(id));
    }
}
