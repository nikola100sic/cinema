import { Genre } from './Genre';
import { Screening } from './Screening';

export interface MovieScreening {
  name: string;
  id: number;
  duration: number;
  genres: Genre[];
  imageUrl: string;
  rating: number;
  screenings: Screening[];
}
