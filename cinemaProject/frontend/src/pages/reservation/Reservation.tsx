import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Screening } from '../../types/Screening';
import { MovieScreening } from '../../types/MovieScreening';

import {
  LeftSide,
  LegendBox,
  LegendItem,
  LegendText,
  LegendWrapper,
  PriceAndButton,
  ProjectionScreen,
  ReservationContainer,
  RightSide,
  ScreeningDetails,
  SeatBox,
  SeatsContainer,
} from './Reservation.styled';
import { formatDate } from '../../utils/dateUtils';
import { formatTime } from '../../utils/timeUtils';
import Button from '../../components/shared/button/Button';

const Reservation = () => {
  const routeParams = useParams();
  const screeningId = routeParams.id;
  const { state } = useLocation();
  const [screening, setScreening] = useState<Screening | null>(null);
  const movieScreeningData = state?.movieScreeningData as MovieScreening;

  useEffect(() => {
    if (movieScreeningData) {
      const foundScreening = movieScreeningData.screenings.find(
        (screening) => screening.id.toString() === screeningId,
      );
      setScreening(foundScreening || null);
      console.log(foundScreening);
    }
  }, [screeningId, movieScreeningData]);

  if (!movieScreeningData) {
    return <p>Movie data not found. Please navigate from the homepage.</p>;
  }

  if (!screening) {
    return <p>Loading...</p>;
  }

  const createSeats = () => {
    const seats = [];
    const capacity = screening.hallDto.capacity;
    const columns = 11;
    const rows = capacity / columns;

    for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
        const seatIndex = row * columns + column + 1;
        if (seatIndex > capacity) break;
        seats.push(
          <SeatBox
            key={`${row}-${column}`}
            data-row={row}
            data-column={column}
          />,
        );
      }
    }
    return seats;
  };

  return (
    <ReservationContainer>
      <LeftSide>
        <h2>Ticket reservation</h2>
        <ScreeningDetails>
          <p>Movie name: {movieScreeningData.movieDTO.name}</p>
          ______
          <p>
            Screening date: {formatDate(new Date(screening.screening_date))}
          </p>
          ______
          <p>Screening time: {formatTime(screening.screening_time)} h</p>
          ______
          <p>Ticket price: {screening.ticket_price} €</p>
        </ScreeningDetails>
        No. of ticket 1/5
        <LegendWrapper>
          <LegendItem>
            <LegendBox color="red" />
            <LegendText>Occupied</LegendText>
          </LegendItem>
          <LegendItem>
            <LegendBox color="gray" />
            <LegendText>Selected</LegendText>
          </LegendItem>
          <LegendItem>
            <LegendBox color="white" />
            <LegendText>Available</LegendText>
          </LegendItem>
        </LegendWrapper>
      </LeftSide>
      <RightSide>
        <ProjectionScreen>Projection screen</ProjectionScreen>
        <SeatsContainer>{createSeats()}</SeatsContainer>
        <PriceAndButton>
          Total price: {screening.ticket_price} €
          <Button text="Make reservation" color="#07bc0c87" />
        </PriceAndButton>
      </RightSide>
    </ReservationContainer>
  );
};

export default Reservation;
