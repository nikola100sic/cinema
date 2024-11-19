import { Hall } from './Hall';
import { Movie } from './Movie';

export interface ScreeningAdd {
  id: number;
  screening_time: string;
  screening_date: string;
  hall: Hall;
  movie: Movie;
}
