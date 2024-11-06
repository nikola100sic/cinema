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
import { toast } from 'react-toastify';

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
      const genreExists = prevMovie.genres.some((g) => g.id === genre.id);
      const newGenres = genreExists
        ? prevMovie.genres.filter((g) => g.id !== genre.id)
        : [...prevMovie.genres, genre];
      return { ...prevMovie, genres: newGenres };
    });
  };
  useEffect(() => {
    getMovie();
    getGenres();
  }, [movieId]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !movie.name ||
      !movie.image ||
      movie.genres.length === 0 ||
      movie.duration <= 0
    ) {
      toast.warn('You must fill all fields');
      return;
    }
    movieServiceAxios
      .updateMovie(movie)
      .then(() => {
        navigate('/movies');
        toast.success('Successfuly movie update!');
      })
      .catch(() => {
        toast.error('Error with updating!');
        console.log('Error');
      });
  };

  return (
    <>
      <MoviePageStyled>
        <MovieInfoPage>
          <MovieFormTitle>Edit movie</MovieFormTitle>
          <form onSubmit={handleSubmit}>
            <FormLabel>Movie name:</FormLabel>
            <MovieFormInput
              type="text"
              placeholder="Enter movie name"
              name="name"
              value={movie.name}
              onChange={handleInputChange}
            />
            <FormLabel>Duration:</FormLabel>
            <MovieFormInput
              type="number"
              placeholder="Enter movie duration"
              name="duration"
              value={movie.duration}
              onChange={handleInputChange}
            />
            <FormLabel>Image:</FormLabel>
            <MovieFormInput
              type="text"
              placeholder="Add movie image"
              name="image"
              value={movie.image}
              onChange={handleInputChange}
            />
            <FormLabel>Genres:</FormLabel>
            <CheckBoxGroup>
              {genres.map((genre) => (
                <CheckBoxItem key={genre.id}>
                  <CheckboxInput
                    type="checkbox"
                    value={genre.id}
                    checked={movie.genres.some((el) => el.id === genre.id)}
                    onChange={() => setMoviesGenres(genre)}
                  />
                  {genre.name}
                </CheckBoxItem>
              ))}
            </CheckBoxGroup>
            <ButtonContainer>
              <Button text="Submit" type="submit" />
            </ButtonContainer>
          </form>
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
