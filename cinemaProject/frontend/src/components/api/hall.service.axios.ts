import { CinemaAxios } from './axios';

const getHalls = () => {
  return CinemaAxios.get('/halls');
};

export default {
  getHalls,
};
