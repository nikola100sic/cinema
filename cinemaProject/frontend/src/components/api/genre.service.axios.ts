import { CinemaAxios } from './axios';
import { Genre } from '../../types/Genre';

const getGenres = () => {
  return CinemaAxios.get('/genres');
};

const deleteGenre = (id: string) => {
  return CinemaAxios.get(`/genres/${id}`);
};

const addGenre = (genre: Genre) => {
  return CinemaAxios.post('/genres/', genre);
};

const updateGenre = (updatedGenre: Genre) => {
  return CinemaAxios.put(`/genres`, updateGenre);
};

export default {
  getGenres,
  addGenre,
  updateGenre,
  deleteGenre,
};
