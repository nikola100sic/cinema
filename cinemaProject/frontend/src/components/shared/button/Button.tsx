import React from 'react';
import { StyledButton, SubmitButton } from './Button.styled';

type ButtonType = 'submit' | 'reset';
type ButtonVariant = 'filled' | 'outlined';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  type?: ButtonType;
  color?: string;
  textColor?: string;
  disabled?: boolean;
}

const Button = ({
  text,
  onClick,
  variant,
  type,
  color,
  textColor,
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
          $textColor={textColor}
          disabled={disabled}
        >
          {text}
        </SubmitButton>
      ) : (
        <StyledButton
          $variant={variant}
          $color={color}
          $textColor={textColor}
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

// Prefixing with $ ($color, $textColor) helps distinguish styling-specific props from other props that might be passed to the component.

export default Button;
