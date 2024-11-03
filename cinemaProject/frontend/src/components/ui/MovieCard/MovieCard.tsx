import React from 'react';
import { Genre } from '../../../types/Genre';
import {
  ButtonContainer,
  Label,
  MovieCardStyled,
  MovieInfo,
} from './MovieCard.styled';
import Button from '../../shared/button/Button';
interface MovieCardProps {
  id: number;
  name: string;
  duration: number;
  image: string;
  genres?: Genre[];
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const MovieCard = ({
  id,
  name,
  duration,
  image,
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
        {duration}
        <Label>Image:</Label>
        {image}
        <Label>Genres:</Label>
        {genres?.map((genre, index) => <li key={index}>{genre.name}</li>)}
      </MovieInfo>
      <ButtonContainer>
        <Button
          text="Delete"
          color="#ff00004a"
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
