import React, { useState } from 'react';
import {
  AuthFormContainer,
  AuthFormInput,
  AuthFormTitle,
  ButtonContainer,
  CheckboxInput,
  FormLabel,
  Label,
} from '../../components/shared/forms/Forms.styled';
import Button from '../../components/shared/button/Button';
import { useNavigate } from 'react-router-dom';
import { User } from '../../types/User';
import { toast } from 'react-toastify';
import { AuthAxios } from '../../components/api/axios';

const RegistrationPage = () => {
  const [user, setUser] = useState<User>({
    name: '',
    surname: '',
    email: '',
    username: '',
    password: '',
    repeatedPassword: '',
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const navigate = useNavigate();

  const isFormValid = termsAccepted && privacyPolicyAccepted;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !user.name ||
      !user.surname ||
      !user.username ||
      !user.email ||
      !user.password ||
      !user.repeatedPassword
    ) {
      toast.warn('Please fill in all fields.');
      return;
    }
    if (!isFormValid) {
      toast.warn(
        'You must agree to the terms and conditions and the privacy policy before registration.',
      );
      return;
    }

    console.log(user);

    try {
      const resp = await AuthAxios.post('/registration', user);
      navigate('/login');
      toast.success(
        'Registration successful! Please verify your email before logging in.',
      );
    } catch (error: any) {
      toast.error(error.response.data || 'Error');
    }
  };

  return (
    <AuthFormContainer>
      <AuthFormTitle>Registration</AuthFormTitle>
      <FormLabel>Name: </FormLabel>
      <form onSubmit={handleSubmit}>
        <AuthFormInput
          type="text"
          placeholder="Enter your name"
          name="name"
          value={String(user.name)}
          onChange={handleChange}
        ></AuthFormInput>
        <FormLabel>Surname: </FormLabel>
        <AuthFormInput
          placeholder="Enter your surname"
          name="surname"
          value={String(user.surname)}
          onChange={handleChange}
          type="text"
        ></AuthFormInput>
        <FormLabel>Email: </FormLabel>
        <AuthFormInput
          placeholder="Enter your eMail"
          name="email"
          value={String(user.email)}
          onChange={handleChange}
          type="text"
        ></AuthFormInput>
        <FormLabel>Username: </FormLabel>
        <AuthFormInput
          placeholder="Enter your username"
          name="username"
          value={String(user.username)}
          onChange={handleChange}
          type="text"
        ></AuthFormInput>
        <FormLabel>Password: </FormLabel>
        <AuthFormInput
          placeholder="Enter your password"
          name="password"
          value={String(user.password)}
          onChange={handleChange}
          type="password"
        ></AuthFormInput>
        <FormLabel>Repeat password: </FormLabel>
        <AuthFormInput
          placeholder="Repeat your password"
          name="repeatedPassword"
          value={String(user.repeatedPassword)}
          onChange={handleChange}
          type="password"
        ></AuthFormInput>

        <>
          <Label>
            <CheckboxInput
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
            />
            I agree to the terms and conditions
          </Label>
        </>

        <>
          <Label>
            <CheckboxInput
              type="checkbox"
              checked={privacyPolicyAccepted}
              onChange={() => setPrivacyPolicyAccepted(!privacyPolicyAccepted)}
            />
            I agree to the privacy policy
          </Label>
        </>

        <ButtonContainer>
          <Button text="Create account" type="submit" />
          <Button
            text="I already have an account"
            type="submit"
            onClick={() => navigate('/login')}
          />
        </ButtonContainer>
      </form>
    </AuthFormContainer>
  );
};

export default RegistrationPage;
