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
import { Genre } from '../../../types/Genre';
import { Screening } from '../../../types/Screening';

interface MovieScreeningCardProps {
  name: string;
  genres: Genre[];
  duration: number;
  screenings: Screening[];
  image: string;
  rating: number;
}

const MovieScreeningCard = ({
  name,
  genres,
  duration,
  screenings,
  image,
  rating,
}: MovieScreeningCardProps) => {
  const navigate = useNavigate();

  const handleTimeClick = (id: number) => {
    navigate(`/screening/${id}`);
  };

  const renderStars = (rating: number) => {
    const filledStars = '★'.repeat(Math.floor(rating));
    const emptyStars = '☆'.repeat(5 - Math.floor(rating));
    return (
      <span style={{ color: 'rgb(255 236 0)', fontSize: '24px' }}>
        {filledStars}
        {emptyStars}
      </span>
    );
  };

  return (
    <MovieScreeningCardStyled>
      <ImageStyled>Image: {image}</ImageStyled>
      <MovieInfoStyled>
        <MovieTitle>Name: {name}</MovieTitle>
        <Details>Duration: {duration} min</Details>
        Genres: {genres.map((genre) => genre.name).join(', ')}
      </MovieInfoStyled>
      <ShowtimesAndRating>
        <p>Rating: {renderStars(rating)}</p>
        <Time>
          {screenings.map((screening) => (
            <Button
              key={screening.id}
              text={`Hall: ${screening.hallNumber}| ${screening.screeningTime.slice(0, 5)}`}
              onClick={() => handleTimeClick(screening.id)}
              color="#ffffff8c"
            />
          ))}
        </Time>
      </ShowtimesAndRating>
    </MovieScreeningCardStyled>
  );
};

export default MovieScreeningCard;
