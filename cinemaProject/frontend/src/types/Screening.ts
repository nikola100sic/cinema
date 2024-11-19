import { Hall } from './Hall';

export interface Screening {
  id: number;
  screening_time: string;
  screening_date: string;
  hallDto: Hall;
}
