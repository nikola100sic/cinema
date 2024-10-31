import React from 'react';
import Button from '../../shared/button/Button';
import { ButtonContainer, Card, GenreInfo } from './GenreCar.styled';

interface GenreCardProps {
  name: string;
}

const GenreCard = ({ name }: GenreCardProps) => {
  return (
    <Card>
      <GenreInfo>
        <h3>{name}</h3>
      </GenreInfo>
      <ButtonContainer>
        <Button text="Delete"></Button>
        <Button text="Edit" type="submit"></Button>
      </ButtonContainer>
    </Card>
  );
};

export default GenreCard;
