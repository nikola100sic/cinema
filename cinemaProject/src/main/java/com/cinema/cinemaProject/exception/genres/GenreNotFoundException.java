package com.cinema.cinemaProject.exception.genres;

public class GenreNotFoundException extends  RuntimeException{

    public GenreNotFoundException(Long id){
        super ("Genre with id: "+ id + " not found");
    }

}
