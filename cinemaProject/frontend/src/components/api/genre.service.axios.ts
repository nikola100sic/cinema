import { CinemaAxios } from './axios';
import { Genre } from '../../types/Genre';

export const getGenres = () => {
  return CinemaAxios.get('/genres');
};

export const getGenre = (id: string) => {
  return CinemaAxios.get(`/genres/${id}`);
};

export const addGenre = (genre: Genre) => {
  return CinemaAxios.post('/genres/', genre);
};

export const updateGenre = (updatedGenre: Genre) => {
  return CinemaAxios.put(`/genres`, updateGenre);
};
