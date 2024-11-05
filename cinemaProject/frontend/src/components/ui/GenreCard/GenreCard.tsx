import React from 'react';
import Button from '../../shared/button/Button';
import { ButtonContainer, Card, GenreInfo } from './GenreCard.styled';

interface GenreCardProps {
  name: string;
  id: number;
  onDelete: (id: number) => void;
  onEdit?: (id: number) => void;
}

const GenreCard = ({ id, name, onDelete, onEdit }: GenreCardProps) => {
  return (
    <Card>
      <GenreInfo>
        <h3>{name}</h3>
      </GenreInfo>
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
    </Card>
  );
};

export default GenreCard;
