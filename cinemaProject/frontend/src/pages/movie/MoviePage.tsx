import React, { useEffect, useState } from 'react';
import MovieCard from '../../components/ui/MovieCard/MovieCard';
import { Movie } from '../../types/Movie';
import movieServiceAxios from '../../components/api/movie.service.axios';
import Loader from '../../components/shared/loader/Loader';
import {
  AddButton,
  AddButtonContainer,
  MovieCardContainer,
} from './MoviePage.styled';

const MoviePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getMovies = () => {
    movieServiceAxios
      .getMovies()
      .then((res) => {
        setMovies(res.data);
        console.log(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);

  const goToAdd = () => {};
  return (
    <>
      <AddButtonContainer>
        <AddButton onClick={() => goToAdd()}>Add new movie</AddButton>
      </AddButtonContainer>
      {loading ? (
        <Loader loading={loading} />
      ) : (
        <MovieCardContainer>
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              name={movie.name}
              id={movie.id}
              duration={movie.duration}
              image={movie.image}
              genres={movie.genres}
            />
          ))}
        </MovieCardContainer>
      )}
    </>
  );
};

export default MoviePage;
