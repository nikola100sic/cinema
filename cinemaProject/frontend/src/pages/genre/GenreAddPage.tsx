import React, { useState } from 'react';
import Button from '../../components/shared/button/Button';
import {
  AddPageStyled,
  FormInput,
  FormLabel,
  FormTitle,
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
      toast.info('You must enter a name of genre');
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
    <AddPageStyled>
      <form onSubmit={handleSubmit}>
        <FormTitle>Add genre</FormTitle>
        <FormLabel>Name:</FormLabel>
        <FormInput
          type="text"
          placeholder="Enter genre name"
          onChange={handleChange}
          name="name"
          value={genre.name}
        ></FormInput>
        <ButtonContainer>
          <Button text="Add" type="submit" />
        </ButtonContainer>
      </form>
    </AddPageStyled>
  );
};

export default GenreAddPage;
