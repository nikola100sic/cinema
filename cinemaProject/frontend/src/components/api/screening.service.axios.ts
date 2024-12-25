import { ScreeningAdd } from '../../types/ScreeningAdd';
import { CinemaAxios } from './axios';

const getScreenings = (date?: string, genreId?: number) => {
  return CinemaAxios.get('/screenings', {
    params: { date, genreId },
  });
};

const addScreening = (screening: ScreeningAdd) => {
  return CinemaAxios.post(`/screenings`, screening);
};

export default {
  getScreenings,
  addScreening,
};
