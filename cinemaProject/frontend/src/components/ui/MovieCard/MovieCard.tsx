import React from 'react';
interface MovieCardProps {
  id: number;
  name: string;
  duration: number;
  image: string;
  onEdit?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const MovieCard = ({
  id,
  name,
  duration,
  image,
  onDelete,
  onEdit,
}: MovieCardProps) => {
  return <div></div>;
};

export default MovieCard;
