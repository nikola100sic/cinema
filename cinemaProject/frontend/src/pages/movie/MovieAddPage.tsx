import React from 'react';
import {
  AddPageStyled,
  FormLabel,
  FormTitle,
} from '../../components/shared/forms/Forms.styled';

const MovieAddPage = () => {
  return (
    <AddPageStyled>
      <FormTitle>Add movie</FormTitle>
      <FormLabel>Movie name:</FormLabel>
      <FormLabel></FormLabel>
      <FormLabel></FormLabel>
      <FormLabel></FormLabel>
      <FormLabel></FormLabel>
    </AddPageStyled>
  );
};

export default MovieAddPage;
