import styled from 'styled-components';

export const StyledButton = styled.button<{
  $variant?: string;
  $color?: string;
}>`
  width: 100px;
  height: 40px;
  background: ${(props) =>
    props.$color
      ? props.$color
      : props.$variant === 'filled'
        ? 'red'
        : 'transparent'};
  border: ${(props) =>
    props.$variant === 'filled' ? 'none' : '1px solid #ff000094'};
  &:hover {
    cursor: pointer; // Using & in styled-components is helpful because it explicitly ties pseudo-classes and states
    //(like :hover, :active) to the current element. It improves readability and consistency, especially in complex styles.
    //While not technically necessary for simple pseudo-classes, & is a best practice for clear, maintainable code.
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
