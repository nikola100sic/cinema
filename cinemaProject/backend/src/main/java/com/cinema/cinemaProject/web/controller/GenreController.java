package com.cinema.cinemaProject.web.controller;

import com.cinema.cinemaProject.model.Genre;
import com.cinema.cinemaProject.service.GenreService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/genres", produces = MediaType.APPLICATION_JSON_VALUE)
public class GenreController {

    private final GenreService genreService;

    @GetMapping
    @PreAuthorize("permitAll()")
    public ResponseEntity<List<Genre>> getAll() {
        List<Genre> genres = genreService.findAll();
        return new ResponseEntity<>(genres, HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/pagination")
    public ResponseEntity<List<Genre>> getAllPage(@RequestParam(value = "pageNo", defaultValue = "0") int pageNo) {
        Page<Genre> genrePage = genreService.findAllSearch(pageNo);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Total-Pages", Integer.toString(genrePage.getTotalPages()));
        return new ResponseEntity<>(genrePage.getContent(), headers, HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @GetMapping("/{id}")
    public ResponseEntity<Genre> getOne(@PathVariable Long id) {
        Genre genre = genreService.findOne(id);
        return new ResponseEntity<>(genre, HttpStatus.OK);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Genre> create(@RequestBody Genre genre) {
        Genre saved = genreService.save(genre);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        genreService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @PutMapping(consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Genre> edit(@RequestBody Genre genre) {
        genreService.update(genre, genre.getId());
        return new ResponseEntity<>(genre, HttpStatus.OK);
    }
}
