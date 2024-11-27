import { useNavigate } from 'react-router-dom';
import Button from '../../components/shared/button/Button';
import { VerificationPageStyled } from './EmailVerification.styled';

const EmailVerification = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };
  return (
    <VerificationPageStyled>
      <p>Your email has been successfully verified!</p>
      <Button
        text="Go to login page"
        color="#ffffffb5"
        onClick={() => handleClick()}
      ></Button>
    </VerificationPageStyled>
  );
};

export default EmailVerification;
