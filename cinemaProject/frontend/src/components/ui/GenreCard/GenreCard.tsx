import React from 'react';
import Button from '../../shared/button/Button';
import { ButtonContainer, Card, GenreInfo } from './GenreCard.styled';

interface GenreCardProps {
  name: string;
  id: number;
  onDelete: (id: number) => void; // Dodaj onDelete prop
}

const GenreCard = ({ id, name, onDelete }: GenreCardProps) => {
  return (
    <Card>
      <GenreInfo>
        <h3>{name}</h3>
      </GenreInfo>
      <ButtonContainer>
        <Button text="Delete" onClick={() => onDelete(id)} />{' '}
        {/* Poziv na onDelete */}
        <Button text="Edit" type="submit"></Button>
      </ButtonContainer>
    </Card>
  );
};

export default GenreCard;
