import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Genre } from '../../types/Genre';
import genreServiceAxios from '../../components/api/genre.service.axios';
import {
  EditPageStyled,
  FormInput,
  FormLabel,
  FormTitle,
} from '../../components/shared/forms/Forms.styled';
import { ButtonContainer } from '../../components/ui/GenreCard/GenreCard.styled';
import Button from '../../components/shared/button/Button';
import { toast } from 'react-toastify';

const GenreEditPage = () => {
  const routeParams = useParams();
  const navigate = useNavigate();
  const genreId = routeParams.id;

  const [genre, setGenre] = useState<Genre>({ id: 0, name: '' });

  const getGenre = () => {
    genreServiceAxios
      .getGenre(Number(genreId))
      .then((res) => {
        setGenre(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGenre();
  }, [genreId]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (genre) {
      if (genre.name === '') {
        toast.warning('You must enter a name of genre!');
        return;
      }
      console.log('Updating genre:', genre);
      genreServiceAxios
        .updateGenre(genre)
        .then(() => {
          toast.success('Successfully updated!');
          navigate('/genres');
        })
        .catch((error) => {
          console.error(error);
          toast.error('Error updating genre');
        });
    }
  };

  return (
    <EditPageStyled>
      <FormTitle>Edit genre</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Genre name</FormLabel>
        <FormInput
          value={genre.name}
          type="text"
          id="name"
          onChange={(e) => setGenre({ ...genre, name: e.target.value })}
        ></FormInput>
        <ButtonContainer>
          <Button text="Submit" type="submit" />
        </ButtonContainer>
      </form>
    </EditPageStyled>
  );
};

export default GenreEditPage;
