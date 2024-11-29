import React, { useState } from 'react';
import {
  AuthFormContainer,
  AuthFormInput,
  AuthFormTitle,
  ButtonContainer,
  FormLabel,
} from '../../components/shared/forms/Forms.styled';
import Button from '../../components/shared/button/Button';
import { User } from '../../types/User';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthAxios } from '../../components/api/axios';

const LoginPage = () => {
  const [user, setUser] = useState<User>({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (user.username === '' || user.password === '') {
      toast.warn('Please fill in all fields.');

      return;
    }
    console.log(user);
    try {
      const resp = await AuthAxios.post('/login', user);
      window.localStorage.setItem('jwt', resp.data);
      window.location.replace('/home');
      toast.success('Login successful!');
    } catch (error: any) {
      console.log(error);
      toast.warn(error.response.data);
    }
  };

  return (
    <AuthFormContainer>
      <AuthFormTitle>Login</AuthFormTitle>
      <FormLabel>Username: </FormLabel>
      <form onSubmit={handleSubmit}>
        <AuthFormInput
          type="text"
          placeholder="Enter your username"
          name="username"
          value={String(user.username)}
          onChange={handleChange}
        />

        <FormLabel>Password: </FormLabel>
        <AuthFormInput
          type="password"
          placeholder="Enter your password"
          name="password"
          value={String(user.password)}
          onChange={handleChange}
        />
        <ButtonContainer>
          <Button text="Login" type="submit" />
          <Button
            text="Create acount"
            type="submit"
            onClick={() => navigate('/registration')}
          />
        </ButtonContainer>
      </form>
    </AuthFormContainer>
  );
};

export default LoginPage;
