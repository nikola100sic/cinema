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
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/shared/button/Button';

const MoviePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

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

  const goToAdd = () => {
    navigate('/movies/add');
  };

  const goToEdit = (movieId: any) => {
    navigate('edit/' + movieId);
  };

  const handleDelete = (movieId: number) => {
    toast(
      <>
        <div>Are you sure you want to delete this genre?</div>
        <Button
          text="Yes"
          variant="filled"
          onClick={() => confirmDelete(movieId)}
        />
        <Button text="No" variant="outlined" onClick={() => toast.dismiss()} />
      </>,
      {
        autoClose: false,
        closeButton: false,
      },
    );
  };

  const confirmDelete = (id: number) => {
    toast.dismiss();

    movieServiceAxios
      .deleteMovie(id)
      .then((res) => {
        console.log(res);
        toast.success('Successfully deleted');
        setMovies((prevMovies) =>
          prevMovies.filter((movie) => movie.id !== id),
        );
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error');
      });
  };
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
              onDelete={handleDelete}
              onEdit={goToEdit}
            />
          ))}
        </MovieCardContainer>
      )}
    </>
  );
};

export default MoviePage;
