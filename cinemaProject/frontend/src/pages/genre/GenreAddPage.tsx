import React, { useState } from 'react';
import Button from '../../components/shared/button/Button';
import {
  AddGenrePageStyled,
  FormLabel,
  GenreFormInput,
  GenreFormTitle,
} from '../../components/shared/forms/Forms.styled';
import { toast } from 'react-toastify';
import genreServiceAxios from '../../components/api/genre.service.axios';
import { useNavigate } from 'react-router-dom';
import { ButtonContainer } from '../../components/ui/GenreCard/GenreCard.styled';

const GenreAddPage = () => {
  const [genre, setGenre] = useState({
    id: -1,
    name: '',
  });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setGenre((prevGenre) => ({
      ...prevGenre,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (genre.name === '') {
      toast.warning('You must enter a name of genre');
      return;
    }
    genreServiceAxios
      .addGenre(genre)
      .then((res) => {
        toast.success('Genre added successfully!');
        navigate('/genres');
      })
      .catch((error) => {
        console.log(error);
        toast.error('Error adding genre');
      });
  };

  return (
    <AddGenrePageStyled>
      <form onSubmit={handleSubmit}>
        <GenreFormTitle>Add genre</GenreFormTitle>
        <FormLabel>Name:</FormLabel>
        <GenreFormInput
          type="text"
          placeholder="Enter genre name"
          onChange={handleChange}
          name="name"
          value={genre.name}
        ></GenreFormInput>
        <ButtonContainer>
          <Button text="Add" type="submit" />
        </ButtonContainer>
      </form>
    </AddGenrePageStyled>
  );
};

export default GenreAddPage;
