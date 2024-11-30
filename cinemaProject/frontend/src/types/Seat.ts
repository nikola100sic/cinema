export interface Seat {
  id: number;
  row: number;
  column: number;
  status: 'occupied' | 'selected' | 'available';
}
