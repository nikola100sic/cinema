import { CinemaAxios } from './axios';

const getScreenings = (date?: string) => {
  return CinemaAxios.get('/screenings', {
    params: { date },
  });
};

export default {
  getScreenings,
};
