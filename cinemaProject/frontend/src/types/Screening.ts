import { Genre } from './Genre';

export interface Screening {
  id: number;
  screeningTime: string;
  screeningDate: string;
  hallId: number;
  hallNumber: number;
}
