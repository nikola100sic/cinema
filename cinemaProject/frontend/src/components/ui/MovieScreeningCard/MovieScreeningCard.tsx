import React from 'react';
import {
  Details,
  ImageStyled,
  MovieInfoStyled,
  MovieScreeningCardStyled,
  MovieTitle,
  ShowtimesAndRating,
  Time,
} from './MovieScreeningCard.styled';
import Button from '../../shared/button/Button';
import { useNavigate } from 'react-router-dom';
import { MovieScreening } from '../../../types/MovieScreening';

interface MovieScreeningCardProps {
  data: MovieScreening;
}

const MovieScreeningCard = ({ data }: MovieScreeningCardProps) => {
  const { movieDTO, screenings } = data;
  const navigate = useNavigate();

  const handleTimeClick = (id: number) => {
    navigate(`/screening/${id}`);
  };

  const renderStars = (rating: number | undefined) => {
    const safeRating = rating ?? 0;
    const filledStars = '★'.repeat(Math.floor(safeRating));
    const emptyStars = '☆'.repeat(5 - Math.floor(safeRating));
    return (
      <span style={{ color: 'rgb(255 236 0)', fontSize: '24px' }}>
        {filledStars}
        {emptyStars}
      </span>
    );
  };

  return (
    <MovieScreeningCardStyled>
      <ImageStyled>
        <img src={movieDTO.imageUrl} alt={`${movieDTO.name} poster`} />
      </ImageStyled>
      <MovieInfoStyled>
        <MovieTitle>Name: {movieDTO.name}</MovieTitle>
        <Details>Duration: {movieDTO.duration} min</Details>
        Genres: {movieDTO.genres.map((genre) => genre.name).join(', ')}
      </MovieInfoStyled>
      <ShowtimesAndRating>
        <p>Rating: {renderStars(movieDTO.rating)}</p>
        <Time>
          {screenings && screenings.length > 0 ? (
            screenings.map((screening) => (
              <Button
                key={screening.id}
                text={`Hall: ${screening.hallDto.hallNumber} | ${screening.screening_time.slice(
                  0,
                  5,
                )}`}
                onClick={() => handleTimeClick(screening.id)}
                color="#ffffff8c"
              />
            ))
          ) : (
            <p>No screenings available</p>
          )}
        </Time>
      </ShowtimesAndRating>
    </MovieScreeningCardStyled>
  );
};

export default MovieScreeningCard;
