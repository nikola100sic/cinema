import React, { useEffect, useState } from 'react';
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
import { Genre } from '../../types/Genre';
import genreServiceAxios from '../../components/api/genre.service.axios';
import { ButtonContainer } from '../../components/ui/MovieCard/MovieCard.styled';
import Button from '../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import movieServiceAxios from '../../components/api/movie.service.axios';

const MovieAddPage = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movie, setMovie] = useState({
    id: 0,
    name: '',
    duration: 0,
    imageUrl: '',
    genres: [] as Genre[],
  });
  const navigate = useNavigate();

  const getGenres = async () => {
    try {
      const res = await genreServiceAxios.getGenres();
      setGenres(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGenres();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      movie.name === '' ||
      movie.imageUrl === '' ||
      movie.duration === null ||
      movie.genres.length === 0
    ) {
      toast.warn('Please fill in all fields.');
      return;
    }

    movieServiceAxios
      .addMovie(movie)
      .then((res) => {
        toast.success('Movie added successfully!');
        console.log(event.target);
        setMovie({
          id: 0,
          imageUrl: '',
          name: '',
          duration: 0,
          genres: [],
        });

        navigate('/movies');
      })
      .catch((error) => {
        console.error(error);
        toast.error('Error adding movie');
      });
  };

  const setMoviesGenres = (genreName: string) => {
    setMovie((prevMovie) => {
      const genre = genres.find((g) => g.name === genreName);
      if (!genre) return prevMovie;

      const newGenres: Genre[] = prevMovie.genres.includes(genre)
        ? prevMovie.genres.filter((g) => g !== genre)
        : [...prevMovie.genres, genre];

      return { ...prevMovie, genres: newGenres };
    });
  };

  return (
    <>
      <MoviePageStyled>
        <MovieInfoPage>
          <MovieFormTitle>Add movie</MovieFormTitle>
          <form onSubmit={handleSubmit}>
            <FormLabel>Movie name:</FormLabel>
            <MovieFormInput
              type="text"
              placeholder="Enter movie name"
              name="name"
              value={movie.name}
              onChange={handleChange}
            />
            <FormLabel>Duration:</FormLabel>
            <MovieFormInput
              type="number"
              placeholder="Enter movie duration"
              name="duration"
              value={movie.duration}
              onChange={handleChange}
            />
            <FormLabel>Image:</FormLabel>
            <MovieFormInput
              type="text"
              placeholder="Enter movie image URL"
              name="imageUrl"
              value={movie.imageUrl}
              onChange={handleChange}
            />
            <FormLabel>Genres:</FormLabel>
            <CheckBoxGroup>
              {genres.map((genre) => (
                <CheckBoxItem key={genre.id}>
                  <CheckboxInput
                    type="checkbox"
                    value={genre.id}
                    onChange={() => setMoviesGenres(genre.name)}
                  />
                  {genre.name}
                </CheckBoxItem>
              ))}
            </CheckBoxGroup>
            <ButtonContainer>
              <Button text="Add movie" type="submit" />
            </ButtonContainer>
          </form>
        </MovieInfoPage>
        <MoviePicture>
          <img
            src={`${process.env.PUBLIC_URL}/cinema-logo.png`}
            alt="cinema"
            loading="lazy"
          />
        </MoviePicture>
      </MoviePageStyled>
    </>
  );
};

export default MovieAddPage;
