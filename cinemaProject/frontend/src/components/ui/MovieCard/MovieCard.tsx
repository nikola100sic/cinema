import React from 'react';
import { Genre } from '../../../types/Genre';
import {
  MovieCardStyled,
  MovieImageStyled,
  MovieInfo,
} from './MovieCard.styled';
import Button from '../../shared/button/Button';
import { ButtonContainer } from '../GenreCard/GenreCard.styled';
import { Label } from '../../shared/forms/Forms.styled';
interface MovieCardProps {
  id: number;
  name: string;
  duration: number;
  imageUrl: string;
  genres?: Genre[];
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const MovieCard = ({
  id,
  name,
  duration,
  imageUrl,
  genres,
  onDelete,
  onEdit,
}: MovieCardProps) => {
  return (
    <MovieCardStyled>
      <MovieInfo>
        <Label> Movie name:</Label>
        {name}
        <Label>Duration:</Label>
        {duration} min
        <MovieImageStyled>
          <img src={imageUrl} alt={`${name} poster`} />
        </MovieImageStyled>
        <Label>Genres:</Label>
        {genres?.map((genre, index) => <li key={index}>{genre.name}</li>)}
      </MovieInfo>
      <ButtonContainer>
        <Button
          text="Delete"
          color="#ffffff7a"
          onClick={() => onDelete && onDelete(id)}
        />
        <Button
          text="Edit"
          type="submit"
          onClick={() => onEdit && onEdit(id)}
        ></Button>
      </ButtonContainer>
    </MovieCardStyled>
  );
};

export default MovieCard;
