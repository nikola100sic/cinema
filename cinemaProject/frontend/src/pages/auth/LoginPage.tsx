import React from 'react';
import {
  AuthFormContainer,
  AuthFormInput,
  AuthFormTitle,
  ButtonContainer,
  FormLabel,
} from '../../components/shared/forms/Forms.styled';
import Button from '../../components/shared/button/Button';

const LoginPage = () => {
  return (
    <AuthFormContainer>
      <AuthFormTitle>Login</AuthFormTitle>
      <FormLabel>Username: </FormLabel>
      <AuthFormInput></AuthFormInput>
      <FormLabel>Password: </FormLabel>
      <AuthFormInput></AuthFormInput>
      <ButtonContainer>
        <Button text="Login" type="submit" />
      </ButtonContainer>
    </AuthFormContainer>
  );
};

export default LoginPage;
