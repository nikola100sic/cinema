import { Axios } from 'axios';
import { CinemaAxios } from './axios';

const getGenres = () => {
  return CinemaAxios.get('/genres');
};

const getGenre = (id: string) => {
  return CinemaAxios.get(`/genres/${id}`);
};
