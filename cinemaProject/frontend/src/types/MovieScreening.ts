import { Genre } from './Genre';
import { Hall } from './Hall';
import { Movie } from './Movie';

export interface Screening {
  id: number;
  screening_time: string;
  screening_date: string;
  hallDto: Hall;
}

export interface MovieScreening {
  id: number;
  movieDTO: Movie;
  screenings: Screening[];
}
