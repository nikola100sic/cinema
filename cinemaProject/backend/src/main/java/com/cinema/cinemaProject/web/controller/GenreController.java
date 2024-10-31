package com.cinema.cinemaProject.web.controller;

import com.cinema.cinemaProject.model.Genre;
import com.cinema.cinemaProject.service.GenreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/genres", produces = MediaType.APPLICATION_JSON_VALUE)
public class GenreController {

    private final  GenreService genreService;

    @GetMapping
    public ResponseEntity<List<Genre>> getAll() {
        List<Genre> genres = genreService.findAll();
        return new ResponseEntity<>(genres, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Genre> getOne(@PathVariable Long id) {
        Genre genre = genreService.findOne(id);
        return new ResponseEntity<>(genre, HttpStatus.OK);
    }

    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Genre> create(@RequestBody Genre genre) {
        Genre saved = genreService.save(genre);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete (@PathVariable Long id){
        genreService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping
    public ResponseEntity<Genre> edit (@RequestBody Genre genre){
        genreService.update(genre, genre.getId());
        return new ResponseEntity<>(genre,HttpStatus.OK);
    }
}
