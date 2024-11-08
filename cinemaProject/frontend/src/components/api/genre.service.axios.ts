import { CinemaAxios } from './axios';
import { Genre } from '../../types/Genre';

const getGenres = () => {
  return CinemaAxios.get('/genres');
};

const getGenresSearch = (pageNo: number) => {
  return CinemaAxios.get('/genres/pagination', {
    params: { pageNo },
  });
};

const getGenre = (id: number) => {
  return CinemaAxios.get(`/genres/${id}`);
};

const deleteGenre = (id: number) => {
  return CinemaAxios.delete(`/genres/${id}`);
};

const addGenre = (genre: Genre) => {
  return CinemaAxios.post('/genres', genre);
};

const updateGenre = (updatedGenre: Genre) => {
  return CinemaAxios.put(`/genres`, updatedGenre);
};

export default {
  getGenres,
  getGenresSearch,
  getGenre,
  addGenre,
  updateGenre,
  deleteGenre,
};
