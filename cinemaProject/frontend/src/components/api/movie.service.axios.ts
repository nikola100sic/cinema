import { CinemaAxios } from './axios';
import { Movie } from '../../types/Movie';

const getMovies = (pageNo: number) => {
  return CinemaAxios.get('/movies', {
    params: { pageNo },
  });
};
const getMovie = (id: number) => {
  return CinemaAxios.get(`/movies/${id}`);
};

const addMovie = (movie: Movie) => {
  return CinemaAxios.post(`/movies`, movie);
};

const updateMovie = (updatedMovie: Movie) => {
  return CinemaAxios.put(`/movies`, updatedMovie);
};

const deleteMovie = (id: number) => {
  return CinemaAxios.delete(`/movies/${id}`);
};

export default {
  getMovie,
  getMovies,
  addMovie,
  updateMovie,
  deleteMovie,
};
