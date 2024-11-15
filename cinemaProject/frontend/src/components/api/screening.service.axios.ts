import { CinemaAxios } from './axios';

const getScreenings = (date?: string, genreId?: number) => {
  return CinemaAxios.get('/screenings', {
    params: { date, genreId },
  });
};

export default {
  getScreenings,
};
