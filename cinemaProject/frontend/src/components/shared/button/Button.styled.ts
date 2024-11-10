import styled from 'styled-components';

export const StyledButton = styled.button<{
  $variant?: string;
  $color?: string;
  $textColor?: string; // Dodajte opcionalni prop za boju teksta
}>`
  width: 100px;
  height: 40px;
  background: ${(props) =>
    props.$color
      ? props.$color
      : props.$variant === 'filled'
        ? 'red'
        : 'transparent'};
  border: ${(props) => (props.$variant === 'filled' ? 'none' : ' #ff000094')};
  color: ${(props) => props.$textColor || 'black'};
  &:hover {
    cursor: pointer;
  }
  border-radius: 15px;
`;

export const SubmitButton = styled(StyledButton)`
  background-color: #0014ff66;
  color: black;
  border: none;
  display: block;
  margin: 0;
`;
