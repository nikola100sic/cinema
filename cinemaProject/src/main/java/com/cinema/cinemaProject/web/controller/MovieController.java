package com.cinema.cinemaProject.web.controller;

import com.cinema.cinemaProject.model.Movie;
import com.cinema.cinemaProject.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/movies",produces = MediaType.APPLICATION_JSON_VALUE)
public class MovieController {

    private final MovieService movieService;

    @GetMapping("/{id}")
    public ResponseEntity<Movie> getOne(@PathVariable Long id){
        Movie movie = movieService.findOne(id);
        return new  ResponseEntity<>(movie, HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<Movie>>getAll(@RequestParam (required = false)String name,
                                             @RequestParam (required = false, defaultValue = "0") int durationFrom,
                                             @RequestParam (required = false, defaultValue = "100000000") int durationTo,
                                             @RequestParam (value = "pageNo", defaultValue = "0") int pageNo){
        Page<Movie> moviePage = movieService.findAll(name,durationFrom,durationTo,pageNo);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Total-Pages", Integer.toString(moviePage.getTotalPages()));
       return new ResponseEntity<>(moviePage.getContent(), headers ,HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Movie> save (@RequestBody Movie movie){
        movieService.save(movie);
        return new ResponseEntity<>(movie, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void>delete(@PathVariable Long id){
        movieService.delete(id);
        return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Movie> edit (@RequestBody  Movie movie){
        movieService.update(movie, movie.getId());
        return new ResponseEntity<>(movie,HttpStatus.OK);
    }

}
