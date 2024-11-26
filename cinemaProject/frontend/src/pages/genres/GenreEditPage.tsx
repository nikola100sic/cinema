import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Genre } from '../../types/Genre';
import genreServiceAxios from '../../components/api/genre.service.axios';
import {
  EditPageStyled,
  FormLabel,
  GenreFormInput,
  GenreFormTitle,
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

  const getBack = () => {
    navigate('/genres');
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
      <GenreFormTitle>Edit genre</GenreFormTitle>
      <form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Genre name</FormLabel>
        <GenreFormInput
          value={genre.name}
          type="text"
          id="name"
          onChange={(event) => setGenre({ ...genre, name: event.target.value })}
        ></GenreFormInput>
        <ButtonContainer>
          <Button text="Submit" type="submit" color="#0083f3d6" />
          <Button
            text="Cancel"
            type="reset"
            color="#e74c3c70"
            onClick={getBack}
          />
        </ButtonContainer>
      </form>
    </EditPageStyled>
  );
};

export default GenreEditPage;
