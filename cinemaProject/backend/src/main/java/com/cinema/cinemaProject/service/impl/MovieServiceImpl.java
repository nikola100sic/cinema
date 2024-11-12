package com.cinema.cinemaProject.service.impl;

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
import com.cinema.cinemaProject.web.dto.GenreDTO;
import com.cinema.cinemaProject.web.dto.MovieWithScreeningsDTO;
import com.cinema.cinemaProject.web.dto.ScreeningDTO;
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
                .orElseThrow(()-> new MovieNotFoundException(movieId));
    }

    @Override
    public Page<Movie> findAll(String name, int durationFrom, int durationTo, int page) {
        Page<Movie>movies = movieRepository.search(name,durationFrom, durationTo, PageRequest.of(page,3));
        if(movies.isEmpty()){
            throw  new MoviesListEmpty();
        }
        return movies;
    }

    @Override
    public Movie save(Movie movie) {
        List<Long>genreIds = movie.getGenres().stream()
                .map(Genre::getId)
                .toList();
        List<Genre>movieGenres= genreRepository.findAllById(genreIds);
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
    public List<MovieWithScreeningsDTO> getForDate(LocalDate date) {
        List<Movie> movies = movieRepository.findAll();

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
        movieScreeningsDTO.setName(movie.getName());
        movieScreeningsDTO.setDuration(movie.getDuration());
        movieScreeningsDTO.setImage(movie.getImage());
        movieScreeningsDTO.setGenres(createGenreDTOs(movie.getGenres()));
        movieScreeningsDTO.setScreenings(screeningDTOs);
        movieScreeningsDTO.setRating(movie.getRating());

        return movieScreeningsDTO;
    }

    private List<ScreeningDTO> createScreeningDTOs(List<Screening> screenings) {
        return screenings.stream()
                .map(screening -> {
                    ScreeningDTO screeningDTO = new ScreeningDTO();
                    screeningDTO.setId(screening.getId());
                    screeningDTO.setScreeningDate(screening.getScreening_date());
                    screeningDTO.setScreeningTime(screening.getScreening_time());
                    screeningDTO.setHallId(screening.getHall().getId());
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


    private Movie getMovieById(Long id){
    return movieRepository.findById(id)
            .orElseThrow(()-> new MovieNotFoundException(id));
    }
}
