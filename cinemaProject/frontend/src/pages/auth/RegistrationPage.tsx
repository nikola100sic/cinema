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

const RegistrationPage = () => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyPolicyAccepted, setPrivacyPolicyAccepted] = useState(false);

  const isFormValid = termsAccepted && privacyPolicyAccepted;

  return (
    <AuthFormContainer>
      <AuthFormTitle>Registration</AuthFormTitle>
      <FormLabel>Name: </FormLabel>
      <AuthFormInput></AuthFormInput>
      <FormLabel>Surname: </FormLabel>
      <AuthFormInput></AuthFormInput>
      <FormLabel>Username: </FormLabel>
      <AuthFormInput></AuthFormInput>
      <FormLabel>Password: </FormLabel>
      <AuthFormInput type="password"></AuthFormInput>
      <FormLabel>Repeat password: </FormLabel>
      <AuthFormInput type="password"></AuthFormInput>

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
      </ButtonContainer>
    </AuthFormContainer>
  );
};

export default RegistrationPage;
