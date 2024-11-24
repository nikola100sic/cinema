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

const RegistrationPage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);
  const navigate = useNavigate();

  const isFormValid = termsAccepted && privacyPolicyAccepted;

  return (
    <AuthFormContainer>
      <AuthFormTitle>Registration</AuthFormTitle>
      <FormLabel>Name: </FormLabel>
      <AuthFormInput placeholder="Enter your name"></AuthFormInput>
      <FormLabel>Surname: </FormLabel>
      <AuthFormInput placeholder="Enter your surname"></AuthFormInput>
      <FormLabel>Username: </FormLabel>
      <AuthFormInput placeholder="Enter your username"></AuthFormInput>
      <FormLabel>Password: </FormLabel>
      <AuthFormInput
        type="password"
        placeholder="Enter your password"
      ></AuthFormInput>
      <FormLabel>Repeat password: </FormLabel>
      <AuthFormInput
        type="password"
        placeholder="Repeat your password"
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
        <Button text="Create account" type="submit" disabled={!isFormValid} />
        <Button
          text="I already have an account"
          type="submit"
          onClick={() => navigate('/login')}
        />
      </ButtonContainer>
    </AuthFormContainer>
  );
};

export default RegistrationPage;
