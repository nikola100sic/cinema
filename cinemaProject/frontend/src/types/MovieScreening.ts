import { Movie } from './Movie';
import { Screening } from './Screening';

export interface MovieScreening {
  id: number;
  movieDTO: Movie;
  screenings: Screening[];
}
