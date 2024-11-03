import { Genre } from './Genre';

export interface Movie {
  id: number;
  name: string;
  duration: number;
  image: string;
  genres: Genre[];
}
