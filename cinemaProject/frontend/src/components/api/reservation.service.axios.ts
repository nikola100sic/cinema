import { ReservationRequest } from '../../types/Reservation';
import { CinemaAxios } from './axios';

const getTakenSeats = (screeningId: number) => {
  return CinemaAxios.get(`/reservations/taken-seats/${screeningId}`);
};

const createReservation = (reservation: ReservationRequest) => {
  return CinemaAxios.post(`/reservations`, reservation);
};
export default {
  getTakenSeats,
  createReservation,
};
