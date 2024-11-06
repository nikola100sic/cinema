import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Movie } from '../../types/Movie';
import { Genre } from '../../types/Genre';
import movieServiceAxios from '../../components/api/movie.service.axios';
import {
  CheckBoxGroup,
  CheckboxInput,
  CheckBoxItem,
  FormLabel,
  MovieFormInput,
  MovieFormTitle,
  MovieInfoPage,
  MoviePageStyled,
  MoviePicture,
} from '../../components/shared/forms/Forms.styled';
import { ButtonContainer } from '../../components/ui/MovieCard/MovieCard.styled';
import Button from '../../components/shared/button/Button';
import genreServiceAxios from '../../components/api/genre.service.axios';

const MovieEditPage = () => {
  const routeParams = useParams();
  const navigate = useNavigate();
  const movieId = routeParams.id;

  const [genres, setGenres] = useState<Genre[]>([]);
  const [movie, setMovie] = useState<Movie>({
    id: 0,
    name: '',
    duration: 0,
    image: '',
    genres: [] as Genre[],
  });

  const getMovie = () => {
    movieServiceAxios
      .getMovie(Number(movieId))
      .then((res) => {
        setMovie(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getGenres = () => {
    genreServiceAxios
      .getGenres()
      .then((res) => {
        setGenres(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setMoviesGenres = (genre: Genre) => {
    setMovie((prevMovie) => {
      const newGenres = prevMovie.genres.includes(genre)
        ? prevMovie.genres.filter((g) => g !== genre)
        : [...prevMovie.genres, genre];
      return { ...prevMovie, genres: newGenres };
    });
  };

  useEffect(() => {
    getMovie();
    getGenres();
  }, [movieId]);

  return (
    <>
      <MoviePageStyled>
        <MovieInfoPage>
          <MovieFormTitle>Edit movie</MovieFormTitle>
          <FormLabel>Movie name:</FormLabel>
          <MovieFormInput
            type="text"
            placeholder="Enter movie name"
            name="name"
            value={movie.name}
          />
          <FormLabel>Duration:</FormLabel>
          <MovieFormInput
            type="number"
            placeholder="Enter movie duration"
            name="duration"
            value={movie.duration}
          />
          <FormLabel>Image:</FormLabel>
          <MovieFormInput
            type="text"
            placeholder="Add movie image"
            name="image"
            value={movie.image}
          />
          <FormLabel>Genres:</FormLabel>
          <CheckBoxGroup>
            {genres.map((genre) => (
              <CheckBoxItem key={genre.id}>
                <CheckboxInput
                  type="checkbox"
                  value={genre.id}
                  checked={movie.genres.some((el) => el.id === genre.id)}
                />
                {genre.name}
              </CheckBoxItem>
            ))}
          </CheckBoxGroup>
          <ButtonContainer>
            <Button text="Submit" type="submit" />
          </ButtonContainer>
        </MovieInfoPage>
        <MoviePicture>
          <img
            src={`${process.env.PUBLIC_URL}/cinema-logo.png`}
            alt="cinema logo"
            loading="lazy"
          />
        </MoviePicture>
      </MoviePageStyled>
    </>
  );
};

export default MovieEditPage;
