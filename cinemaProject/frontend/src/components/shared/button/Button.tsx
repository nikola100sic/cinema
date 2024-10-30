import React from 'react';
import { StyledButton, SubmitButton } from './Button.styled';

type ButtonType = 'submit' | 'reset';
type ButtonVariant = 'filed' | 'outlined';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  type?: ButtonType;
  color?: string;
  disabled?: boolean;
}

const Button = ({
  text,
  onClick,
  variant,
  type,
  color,
  disabled,
}: ButtonProps) => {
  return (
    <>
      {type === 'submit' ? (
        <SubmitButton
          $variant={variant}
          onClick={onClick}
          type={type}
          $color={color}
          disabled={disabled}
        >
          {text}
        </SubmitButton>
      ) : (
        <StyledButton
          $variant={variant}
          $color={color}
          disabled={disabled}
          type={type}
          onClick={onClick}
        >
          {text}
        </StyledButton>
      )}
    </>
  );
};

//Prefixing with $ ($color) helps distinguish styling-specific props from other props that might be passed to the component.

export default Button;
